import express from "express";
import cors from "cors";
import multer from "multer";

import { atualizarNovoPost, boasVindas, deletarNovoPost, listarPosts, postPorId, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// para windows
const upload = multer({ dest: "./uploads" , storage});
// e também criar a pasta "uploads", na raiz do projeto
// para linux e mac não necessário criar esta página, pois o multer cria automáticamente

// para linux, mac
//const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // Habilita o parsing de JSON para as requisições
    app.use(express.json());
    app.use(cors(corsOptions));

    // Rota para a raiz da API, retorna uma mensagem de boas-vindas
    app.get("/api", boasVindas);

    // Rota para obter todos os posts
    app.get("/posts", listarPosts);

    //app.get("/posts", (req, res) => {
    //    res.status(200).json(posts);
    //});

    app.get("/posts/:id", postPorId);

    app.post("/posts", postarNovoPost);
    app.post("/upload",upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost);

    app.delete("/posts/:id",deletarNovoPost);

    app.get("/livros", (req, res) => {
        res.status(200).json({            
                titulo: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                ano: 1954,
                genero: "Fantasia"              
        });
    })

};

export default routes;

