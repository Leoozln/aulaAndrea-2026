const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const pool = require('./db');
app.use(express.json());

app.get('/pessoas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro na consulta', err.message);
    res.status(500).send('Erro no servidor');
  }
});