const pool = require('../db');

async function listar() {
    const result = await pool.query('SELECT * FROM pessoas ORDER BY pes_id');
    return result.rows;
}

async function buscarPorId(pes_id) {
    const result = await pool.query(
        'SELECT * FROM pessoas WHERE pes_id = $1',
        [pes_id]
    );

    return result.rows[0];
}

async function inserir(pes_nome) {
    const result = await pool.query(
        'INSERT INTO pessoas(pes_nome) VALUES($1) RETURNING *',
        [pes_nome]
    );

    return result.rows[0];
}

async function atualizar(pes_id, pes_nome) {
    const result = await pool.query(
        `UPDATE pessoas
         SET pes_nome = $1
         WHERE pes_id = $2
         RETURNING *`,
        [pes_nome, pes_id]
    );

    return result.rows[0];
}
async function excluir(pes_id) {
    await pool.query(
        'DELETE FROM pessoas WHERE pes_id=$1',
        [pes_id]
    );
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    excluir
};
