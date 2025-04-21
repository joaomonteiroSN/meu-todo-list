function criarTarefa() {
    overlay.classList.add("active")
    modal.classList.add("active")
}

function fecharModal() {
    overlay.classList.remove("active")
    modal.classList.remove("active")
}

// Para fazer:
// criar tarefas
// deletar tarefa
// listar tarefas - ok
// buscar tarefas

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
                        <box-icon type='solid' name='trash-alt' animation='flashing-hover'></box-icon>
                    </div>
                </li>
        `
        })
        
    })
}
listarTarefas();