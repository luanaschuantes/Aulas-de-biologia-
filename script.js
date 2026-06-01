function cadastrarAluno(){

    let nome =
    document.getElementById("nome").value;

    let email =
    document.getElementById("email").value;

    let telefone =
    document.getElementById("telefone").value;

    if(
        nome === "" ||
        email === "" ||
        telefone === ""
    ){
        alert("Preencha todos os campos.");
        return;
    }

    let alunos =
    JSON.parse(
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

    alert("Cadastro realizado com sucesso!");

}
