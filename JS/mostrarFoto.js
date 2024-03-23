import { ConexaoAPI } from "./api.js";

async function listaFoto() {
    const listarFotosApi = await ConexaoAPI.api();
    const fotos_html = document.getElementById("lista_foto");

    listarFotosApi.forEach(fotos => {
        fotos_html.innerHTML += `
        <div class="foto">
            <h2 class="titulo_foto">${fotos.titulo}</h2>
            <img width="300" src="${fotos.url}">
            <button >Adicionar</button>
            <button id="${fotos.url}">Excluir</button>
        </div>`;
    });
}
  const urlw = "http://localhost:3000/fotos";

   fetch(urlw, {
    method: "DELETE", 
    headers: {
        "Content-Type": "Application/json", 
    }, 
   })

.then(response => {
 if (!response.ok) {
    throw new Error('Erro na requisição');
 }
 return response.json(); 
})
.then(data => {
 console.log('Recurso deletado com sucesso:', data);
})
.catch(error => {
 console.error('Erro ao deletar o recurso:', error);
});



listaFoto();

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