let contador = 0;
let input = document.getElementById('inputTarefas');
let button = document.getElementById('btn-adicionar');
let main = document.getElementById('campoLista');

function adicionarTarefa() {
    let valorInput = input.value;

    ++contador;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let novaTarefa = `<div id="${contador}" class="item">
        <div class="item-icone">
            <i class="mdi mdi-circle-outline"></i>        
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick= "deletarTarefa(${contador})" class="delete">
            <i class="mdi mdi-delete"></i> Deletar </button>        
        </div>
    </div>`; 
    main.innerHTML += novaTarefa;

    input.value = "";
    input.focus();    

    }
    function deletarTarefa(id){
    var tarefa = document.getElementById(id)
        tarefa.remove();
    }
}

