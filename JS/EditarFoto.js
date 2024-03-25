import { ConexaoAPI } from "./api.js";

function obterIdUrl() {
    const parametroUrl = new URLSearchParams(window.location.search);

    return parametroUrl.get('id');
}

const id = obterIdUrl();


const formulario = document.querySelector('#form_foto');

async function editarFoto(eventoFoto) {
    eventoFoto.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const url = document.querySelector('#url').value;


    await ConexaoAPI.editarFoto(id, titulo, url);

    window.location.href = "../index.html"
}


formulario.addEventListener('submit', editarFoto);
