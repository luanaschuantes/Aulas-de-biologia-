// ====================================
// BIO MENTORIA - SCRIPT PRINCIPAL
// ====================================


// CADASTRAR ALUNO
function cadastrarAluno() {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (!nome || !email || !telefone) {
        alert("Preencha todos os campos.");
        return;
    }

    let alunos = JSON.parse(
        localStorage.getItem("alunos")
    ) || [];

    alunos.push({
        nome,
        email,
        telefone
    });

    localStorage.setItem(
        "alunos",
        JSON.stringify(alunos)
    );

    alert("Aluno cadastrado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";

    atualizarContador();
}


// CARREGAR ALUNOS
function carregarAlunos() {

    const tabela =
    document.getElementById("listaAlunos");

    if (!tabela) return;

    const alunos = JSON.parse(
        localStorage.getItem("alunos")
    ) || [];

    tabela.innerHTML = "";

    if (alunos.length === 0) {

        tabela.innerHTML = `
            <tr>
                <td colspan="3">
                    Nenhum aluno cadastrado.
                </td>
            </tr>
        `;

        return;
    }

    alunos.forEach(aluno => {

        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.email}</td>
                <td>${aluno.telefone}</td>
            </tr>
        `;

    });

}


// PESQUISAR ALUNO
function pesquisarAluno() {

    const campo =
    document.getElementById("pesquisa");

    if (!campo) return;

    const texto =
    campo.value.toLowerCase();

    const tabela =
    document.getElementById("listaAlunos");

    let alunos = JSON.parse(
        localStorage.getItem("alunos")
    ) || [];

    let resultado = alunos.filter(aluno =>
        aluno.nome.toLowerCase()
        .includes(texto)
    );

    tabela.innerHTML = "";

    resultado.forEach(aluno => {

        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.email}</td>
                <td>${aluno.telefone}</td>
            </tr>
        `;

    });

}


// CONTADOR DE ALUNOS
function atualizarContador() {

    const contador =
    document.getElementById("contador");

    if (!contador) return;

    let alunos = JSON.parse(
        localStorage.getItem("alunos")
    ) || [];

    contador.innerHTML =
    "Total de alunos cadastrados: "
    + alunos.length;

}


// LIMPAR TODOS OS ALUNOS
function limparAlunos() {

    let resposta = confirm(
        "Deseja remover todos os alunos?"
    );

    if (!resposta) return;

    localStorage.removeItem("alunos");

    carregarAlunos();

    atualizarContador();

    alert("Todos os alunos foram removidos.");

}


// FORMULÁRIO DE CONTATO
function enviarMensagem() {

    const nome =
    document.getElementById("nomeContato");

    const mensagem =
    document.getElementById("mensagemContato");

    if (!nome || !mensagem) return;

    if (
        nome.value.trim() === "" ||
        mensagem.value.trim() === ""
    ) {

        alert("Preencha todos os campos.");
        return;

    }

    alert(
        "Mensagem enviada com sucesso!"
    );

    nome.value = "";
    mensagem.value = "";

}


// MOSTRAR DATA ATUAL
function mostrarData() {

    const local =
    document.getElementById("dataAtual");

    if (!local) return;

    const hoje = new Date();

    local.innerHTML =
    hoje.toLocaleDateString("pt-BR");

}


// EXECUTA AUTOMATICAMENTE
window.onload = function() {

    carregarAlunos();

    atualizarContador();

    mostrarData();

};
