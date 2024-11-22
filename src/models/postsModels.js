import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Array de posts de exemplo (será substituído por dados do banco em produção)
const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    // ...
];

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados e a coleção de posts
    const db = conexao.db("imersao-instabaytes");
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

export function buscarPostPorID(id) {
    const index =  posts.findIndex((post) => {
        return post.id === Number(id)
    })
    return posts[index];
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabaytes");
    const colecao = db.collection("posts");
    const postCriado = colecao.insertOne(novoPost);
    return postCriado;
}

export async function atualizarPost(id, post) {
    const db = conexao.db("imersao-instabaytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    const postAtualizado = colecao.updateOne({_id: new ObjectId(objID)}, {$set:post})
    return postAtualizado;
}

export async function deletarPost(id) {
    const db = conexao.db("imersao-instabaytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    const postDeletado = colecao.deleteOne({_id: new ObjectId(objID)});
    return postDeletado;
}