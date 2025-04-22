function abrirModal() {
    overlay.classList.add("active")
    modal.classList.add("active")
}

function fecharModal() {
    overlay.classList.remove("active")
    modal.classList.remove("active")
}

// Para fazer:
// listar tarefas - ok
// criar tarefas - ok
// deletar tarefa - ok
// buscar tarefas - pendente

function listarTarefas() {
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
        console.log(res)
        res.map(tarefa => {
            listField.innerHTML += `
            <li>
                    <h3>${tarefa.titulo}</h3>
                    <p>${tarefa.descricao}</p>
                    <div>
                        <box-icon type='solid' name='trash-alt' animation='flashing-hover' onclick="deletarTarefa(${tarefa.id})"></box-icon>
                    </div>
                </li>
        `
        })
        
    })
}
listarTarefas();

function criarTarefa() {
    event.preventDefault()
    fetch("http://localhost:3000/tarefas" , {
        method:"POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo.value,
            descricao: descricao.value
        })
    })
    .then(res => json)
    .then(res => {
        console.log(res)
        fecharModal()
        listarTarefas()
    })
}

function deletarTarefa(id) {
    fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "DELETE"
    })
    .then(res => json())
    .then(res => {
        listarTarefas();
    })
}