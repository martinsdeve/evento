import { ConexaoAPI } from "./api.js";

async function listaFoto() {
    const listarFotosApi = await ConexaoAPI.api();
    const fotos_html = document.getElementById("lista_foto");

    listarFotosApi.forEach(fotos => {
        fotos_html.innerHTML += `
        <div class="foto" id="${fotos.id}">
            <h2 class="titulo_foto">${fotos.titulo}</h2>
            <img width="300" src="${fotos.url}">
            <button id="editar">Editar</button>
            <button id="excluir">Excluir</button>
        </div>`;
    });
    editar();
    deletar();
}


listaFoto();

function editar(){
    const editarFotos = document.querySelectorAll("#editar");
    editarFotos.forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.parentNode.id
        window.location.href = `../pages/editar_foto.html?id=${id}`;
        })
    })
    
}

function deletar(){
    const excluirFotos = document.querySelectorAll("#excluir");

    excluirFotos.forEach(btn => {
        btn.addEventListener("click", async () => {
            const id = btn.parentNode.id
            await ConexaoAPI.excluirFoto(id);
        })
    });
    
}
const barraDepesquisa = document.querySelector(".pesquisa");

barraDepesquisa.addEventListener('input', filtro);

async function filtro() {
    const todasAsFotos = document.querySelectorAll(".foto");

    if (barraDepesquisa.value.trim().length > 0) {
        todasAsFotos.forEach(foto => {
            let titulo = foto.querySelector(".titulo_foto").textContent.toLowerCase();
            let valorFiltro = barraDepesquisa.value.toLowerCase();

            if (!titulo.includes(valorFiltro)) {
                foto.style.display = 'none';
            } else {
                foto.style.display = 'block';
            }
        });
    } else {
        todasAsFotos.forEach(foto => {
            foto.style.display = 'block';
        });
    }
}