const fs = require('fs');
const path = require("path");
const sequelize = require('../config/database');

const db = [];

// dir - Lista os arquivos do diretorio
fs.readdir(__dirname)
    .filter(file => file !== 'index.js')
    .foreach(file => {
        // Capturando cada arquivo individualmente
        const model = require(path.join(__dirname, file));
        // db [user] = Modelo user
        db[model.name] = model;
    })

    sequelize.sync();

    module.exports = { sequelize, ...db};