async function api(){
    const conexao = await fetch("http://localhost:3000/fotos");
    const resposta = await conexao.json();
    return resposta;
}

async function FotosDaAPI(titulo,url){
    const conexao = await fetch("http://localhost:3000/fotos", {
        method: "POST", 
        headers : {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url

        })
    })
    const resposta = await conexao.json();
    return resposta;
}

    async function editarFoto(id, titulo, url){
        const conexao = await fetch(`http://localhost:3000/fotos/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                titulo: titulo,
                url: url
            })
    })
    const resposta = await conexao.json();
    return resposta;
    }    

   async function excluirFoto(id){
    const conexao = await fetch(`http://localhost:3000/fotos/${id}`, {
            method: "DELETE"
    })
    const resposta = await conexao.json();
    return resposta;
}

export const ConexaoAPI = {
    api,
    FotosDaAPI,
    excluirFoto,
    editarFoto

}