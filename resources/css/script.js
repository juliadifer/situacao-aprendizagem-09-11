let listaData = [];

const form = document.getElementById('form');
const listaContainer = document.getElementById('lista');

form.onsubmit = function (e) {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const item = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value
    };

    if (id === "") {
        listaData.push(item);
    } else {
        listaData[id] = item;
    }

    form.reset();
    document.getElementById('id').value = "";
    atualizarLista();
};

function atualizarLista() {
    listaContainer.innerHTML = "";

    listaData.forEach(function (item, index) {
        const divItem = document.createElement('div');
        divItem.className = 'item';

        const spanNome = document.createElement('span');
        spanNome.textContent = item.nome;

        const spanCpf = document.createElement('span');
        spanCpf.textContent = item.cpf;

        const spanTelefone = document.createElement('span');
        spanTelefone.textContent = item.telefone;

        const spanAcoes = document.createElement('span');

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = function () { editar(index); };

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = function () { excluir(index); };

        spanAcoes.appendChild(btnEditar);
        spanAcoes.appendChild(document.createTextNode(' '));
        spanAcoes.appendChild(btnExcluir);

        divItem.appendChild(spanNome);
        divItem.appendChild(spanCpf);
        divItem.appendChild(spanTelefone);
        divItem.appendChild(spanAcoes);

        listaContainer.appendChild(divItem);
    });
}

function editar(index) {
    document.getElementById('id').value = index;
    document.getElementById('nome').value = listaData[index].nome;
    document.getElementById('cpf').value = listaData[index].cpf;
    document.getElementById('telefone').value = listaData[index].telefone;
}

function excluir(index) {
    listaData.splice(index, 1);
    atualizarLista();
}