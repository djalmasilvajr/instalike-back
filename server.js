import express from "express";
import routes from "./src/routes/postsRoutes.js";

// console.log(process.env.STRING_CONEXAO);

// Inicializa o framework Express para criar o servidor
const app = express();

app.use(express.static("uploads"))

routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});



