import fs from "fs";
import { buscarPostPorID, getTodosPosts, criarPost, atualizarPost, deletarPost } from "../models/postsModels.js";
import gerarDescricaoComGemini from "../services/geminiServices.js";

// Função para listar todos os posts
export async function listarPosts(req, res) {
  // Obtém todos os posts do banco de dados (ou de outra fonte)
  const posts = await getTodosPosts();
  // Envia os posts como resposta JSON com status 200 (sucesso)
  res.status(200).json(posts);
}

// Função para exibir uma mensagem de boas-vindas
export function boasVindas(req, res) {
  // Envia uma mensagem de boas-vindas como resposta com status 200 (sucesso)
  res.status(200).send("Boas vindas à imersão");
}

// Função para buscar um post por ID
export function postPorId(req, res) {
  // Busca um post específico pelo ID fornecido na requisição
  const post = buscarPostPorID(req.params.id);
  // Envia o post encontrado como resposta JSON com status 200 (sucesso)
  res.status(200).json(post);
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
  // Obtém os dados do novo post do corpo da requisição
  const novoPost = req.body;
  try {
    // Cria um novo post no banco de dados (ou em outra fonte)
    const postCriado = await criarPost(novoPost);
    // Envia o post criado como resposta JSON com status 200 (sucesso)
    res.status(200).json(postCriado);
  } catch (erro) {
    // Loga o erro no console para depuração
    console.error(erro);
    // Envia uma mensagem de erro genérica como resposta com status 500 (erro interno do servidor)
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}

// Função para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
  // Cria um objeto de post com a descrição da imagem e o caminho da imagem
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };
  try {
    // Cria um novo post no banco de dados (ou em outra fonte)
    const postCriado = await criarPost(novoPost);
    // Constrói o caminho completo da imagem no servidor
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // Move o arquivo da imagem temporária para o destino final
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia o post criado como resposta JSON com status 200 (sucesso)
    res.status(200).json(postCriado);
  } catch (erro) {
    // Loga o erro no console para depuração
    console.error(erro);
    // Envia uma mensagem de erro genérica como resposta com status 500 (erro interno do servidor)
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    
    /*const post = {
      descricao: req.body.descricao,
      imgUrl: urlImagem,
      alt: req.body.alt
    };*/
    try {
      const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
      const descricaoImagemGeradaPeloGemini = await gerarDescricaoComGemini(imgBuffer);

      const post = {
        descricao: descricaoImagemGeradaPeloGemini,
        imgUrl: urlImagem,
        alt: req.body.alt
      };
      
      const postAtualizado = await atualizarPost(id,post);   
      res.status(200).json(postAtualizado);
    } catch (erro) {
      
      console.error(erro);
      
      res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function deletarNovoPost(req, res) {
  const id = req.params.id;

  try {
    const postDeletado = await deletarPost(id);
    res.status(200).json(postDeletado);
  } catch (erro) {
    
    console.error(erro);
    
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}