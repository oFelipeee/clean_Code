require("dotenv").config();
const express = require("express");
const { sequelize } = require("./model");
const router = require("./routers/router");

const app = express();

app.use(express.json());

app.use("/api", router);

sequelize
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizado com sucesso!!");
    })
    .catch((error) => {
        console.error("Erro ao se conectar ao banco: ", error);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("=====================");
    console.log(`Running on http://${PORT}`);
    console.log("=====================");
});