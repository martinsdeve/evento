import { ConexaoAPI } from "./api.js";

const formulario = document.getElementById("form_foto");

async function gerarFotos(eventoFoto) {
    eventoFoto.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const url = document.getElementById("url").value;

    await ConexaoAPI.FotosDaAPI(
        titulo,
        url
    );
    window.location.href = "index.html";
}

formulario.addEventListener("submit", gerarFotos);
