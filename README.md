# aulaAndrea-2026

Sistema com backend (Node.js + Express + PostgreSQL) e frontend (React + Vite).

## Estrutura

```
.gitignore
README.md
Back/    -> API (Express, Sequelize, Swagger)
Front/   -> Interface (React + Vite)
```

## Como rodar

As dependências (`node_modules`) não são versionadas. Depois de clonar, instale-as em cada pasta.

### Back

```bash
cd Back
npm install
node index.js
```

A API sobe em `http://localhost:3000`. O banco é configurado em `Back/db.js` e o script do banco está em `Back/bb.sql`.

### Front

```bash
cd Front
npm install
npm run dev
```
