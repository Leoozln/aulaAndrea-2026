const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => { res.send('Olá mundo !'); })

const pool = require('./db');
app.use(express.json());
const pessoaRoutes = require('./routes/pessoaRoutes');
app.use('/pessoas', pessoaRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

