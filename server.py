#!/usr/bin/env python3
"""
Digita — Servidor Python
Serve o frontend e fornece uma API REST para salvar/consultar resultados.

Uso:
    python server.py
    Acesse: http://localhost:8080

Dependências: apenas stdlib (http.server, json, sqlite3)
"""

import http.server
import json
import os
import sqlite3
import urllib.parse
from datetime import datetime
from pathlib import Path

# ── Configuração ────────────────────────────────
PORT = 8080
BASE_DIR = Path(__file__).parent
DB_PATH = BASE_DIR / "results.db"


# ── Banco de Dados ───────────────────────────────
def init_db():
    """Cria as tabelas necessárias se não existirem."""
    conn = sqlite3.connect(DB_PATH)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS results (
            id        INTEGER PRIMARY KEY AUTOINCREMENT,
            wpm       INTEGER NOT NULL,
            accuracy  REAL    NOT NULL,
            errors    INTEGER NOT NULL,
            chars     INTEGER NOT NULL,
            words     INTEGER NOT NULL,
            duration  INTEGER NOT NULL,
            mode      TEXT    NOT NULL,
            created_at TEXT   NOT NULL
        )
    """)
    conn.commit()
    conn.close()
    print("✅  Banco de dados inicializado.")


def save_result(data: dict) -> dict:
    """Salva um resultado e retorna o registro criado."""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.execute(
        """
        INSERT INTO results (wpm, accuracy, errors, chars, words, duration, mode, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            int(data.get("wpm", 0)),
            float(data.get("accuracy", 0)),
            int(data.get("errors", 0)),
            int(data.get("chars", 0)),
            int(data.get("words", 0)),
            int(data.get("duration", 0)),
            str(data.get("mode", "unknown")),
            datetime.utcnow().isoformat(),
        ),
    )
    conn.commit()
    row_id = cur.lastrowid
    conn.close()
    return {"id": row_id, **data}


def get_results(limit: int = 20, mode: str = None) -> list:
    """Retorna os últimos resultados, com filtro opcional por modo."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    if mode:
        rows = conn.execute(
            "SELECT * FROM results WHERE mode=? ORDER BY created_at DESC LIMIT ?",
            (mode, limit),
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT * FROM results ORDER BY created_at DESC LIMIT ?",
            (limit,),
        ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def get_stats() -> dict:
    """Retorna estatísticas agregadas de todos os resultados."""
    conn = sqlite3.connect(DB_PATH)
    row = conn.execute(
        """
        SELECT
            COUNT(*)       AS total,
            MAX(wpm)       AS best_wpm,
            AVG(wpm)       AS avg_wpm,
            AVG(accuracy)  AS avg_accuracy,
            SUM(chars)     AS total_chars,
            MIN(wpm)       AS min_wpm
        FROM results
        """
    ).fetchone()
    conn.close()
    if not row or row[0] == 0:
        return {"total": 0}
    return {
        "total":        row[0],
        "best_wpm":     row[1],
        "avg_wpm":      round(row[2], 1) if row[2] else 0,
        "avg_accuracy": round(row[3], 1) if row[3] else 0,
        "total_chars":  row[4] or 0,
        "min_wpm":      row[5] or 0,
    }


# ── HTTP Handler ─────────────────────────────────
class DigitaHandler(http.server.SimpleHTTPRequestHandler):
    """Handler customizado: serve arquivos estáticos + API /api/*"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    # ── CORS helper ──────────────────────────────
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    # ── Route dispatch ────────────────────────────
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path   = parsed.path
        params = urllib.parse.parse_qs(parsed.query)

        if path == "/api/results":
            limit = int(params.get("limit", [20])[0])
            mode  = params.get("mode", [None])[0]
            self._json(get_results(limit, mode))

        elif path == "/api/stats":
            self._json(get_stats())

        elif path == "/api/health":
            self._json({"status": "ok", "timestamp": datetime.utcnow().isoformat()})

        else:
            # Serve arquivo estático (index.html, style.css, app.js …)
            if path == "/":
                self.path = "/index.html"
            super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path   = parsed.path

        if path == "/api/results":
            length = int(self.headers.get("Content-Length", 0))
            body   = self.rfile.read(length)
            try:
                data   = json.loads(body)
                result = save_result(data)
                self._json(result, status=201)
            except (json.JSONDecodeError, KeyError) as exc:
                self._json({"error": str(exc)}, status=400)
        else:
            self._json({"error": "Not found"}, status=404)

    # ── JSON response helper ──────────────────────
    def _json(self, payload, status: int = 200):
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self._cors()
        self.end_headers()
        self.wfile.write(body)

    # ── Suppress request logs in production ──────
    def log_message(self, fmt, *args):
        # Mostra apenas erros (4xx/5xx) e requisições de API
        if "/api/" in self.path or (args and str(args[1]) >= "400"):
            print(f"  [{datetime.now().strftime('%H:%M:%S')}] {self.path}  {args[1] if args else ''}")


# ── Main ─────────────────────────────────────────
def main():
    init_db()
    server = http.server.ThreadingHTTPServer(("0.0.0.0", PORT), DigitaHandler)
    print(f"""
╔══════════════════════════════════════╗
║        Digita — Servidor           ║
╠══════════════════════════════════════╣
║  🌐  http://localhost:{PORT}           ║
║                                      ║
║  API Endpoints:                      ║
║  GET  /api/health                    ║
║  GET  /api/stats                     ║
║  GET  /api/results?limit=20&mode=30s ║
║  POST /api/results  (body: JSON)     ║
║                                      ║
║  Pressione Ctrl+C para parar         ║
╚══════════════════════════════════════╝
    """)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👋  Servidor encerrado.")


if __name__ == "__main__":
    main()
