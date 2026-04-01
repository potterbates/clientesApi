fetch("https://crudcrud.com/api/827bd77c2aff47af830c92de1b3247fb/tarefaCasa")
    .then(resposta => resposta.json())
    .then(dados => {
        dados.forEach(pessoa => {
            const item = document.createElement("div")

            const botao = document.createElement("button")
            botao.innerText = "Excluir"

            botao.onclick = () => { excluirPessoa(pessoa._id) }

            item.innerHTML = `${pessoa.nome}`
            item.appendChild(botao)

            document.body.appendChild(item)
        })
    })

function carregarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    fetch("https://crudcrud.com/api/827bd77c2aff47af830c92de1b3247fb/tarefaCasa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, email })
    })
        .then(resposta => resposta.json())
        .then(dados => {
            const item = document.createElement("div")
            item.innerHTML = `${dados.nome}`
            document.body.appendChild(item)
        })
}

function excluirPessoa(id) {
    fetch(`https://crudcrud.com/api/827bd77c2aff47af830c92de1b3247fb/tarefaCasa/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            alert("Pessoa excluída com sucesso!")
            location.reload()
        })
        .catch(() => {
            alert("Erro ao excluir pessoa.")
        })
}

