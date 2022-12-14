let contador = 0;
let input = document.getElementById('inputTarefas');
let btnAdicionar = document.getElementById('btn-adicionar');
let main = document.getElementById('campoLista');

function adicionarTarefa() {
    let valorInput = input.value;    

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novaTarefa = `<div id="${contador}" class="item">
        <div onclick="tarefaFeita(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>        
        </div>
        <div onclick="tarefaFeita(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletarTarefa(${contador})" class="delete">
            <i class="mdi mdi-delete"></i> Deletar </button>        
        </div>
    </div>`; 
    main.innerHTML += novaTarefa;

    input.value = "";
    input.focus();    

    }
}

function deletarTarefa(id){
    var tarefa = document.getElementById(id)
        tarefa.remove();
}

function tarefaFeita(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class');

    if(classe == "item") {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
    } else {
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}