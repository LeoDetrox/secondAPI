const express = require('express');
const port = process.env.PORT || 3000;

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    return res.json({usuario: 'Cleber Leonardo'})
});


server.listen(port, () => {
    console.log('Servidor funcionando...')
});