function cadastrar() {
    let txtNome = document.getElementById("txtNome").value;
    if (txtNome == "" || txtNome == null) return alert("Por favor digite seu nome completo!!");

    let idAluno = document.getElementById("idAluno").value;
    if (idAluno == "" || idAluno == null) return alert("Por favor digite seu R.A(número de matricula!!)");

    let nota1 = document.getElementById("nota1").value;
    if (nota1 == "" || nota1 == null) return alert("Por favor digite sua primeira nota!!");

    let nota2 = document.getElementById("nota2").value;
    if (nota2 == "" || nota2 == null) return alert("Por favor digite sua segunda nota!!");

    let tabCadast = JSON.parse(localStorage.getItem("tabCadast"));
    if (tabCadast === null) tabCadast = [];

    let aluno = {
        nome: txtNome,
        id: idAluno,
        nota1: nota1,
        nota2: nota2

    };

    let containsId = tabCadast.some(elem => aluno.id === elem.id);

    if (!containsId) {
        tabCadast.push(aluno);
        localStorage.setItem("tabCadast", JSON.stringify(tabCadast));
        alert("Cadastrado realizado com sucesso!");
    } else {
        alert("Já existe um aluno cadastrado com esse R.A(número de matricula)!");
    }
}

function listar() {
    let alunos = JSON.parse(localStorage.getItem("tabCadast"))
    if (alunos == null) return document.write(`Não existe usuarios cadastrados`)

    document.write("<table border='1' cellpadding='10' align='center'><th>Nome</th><th>R.A</th><th>Nota (1º bim)</th><th>Nota (2º bim)</th><th>Total</th><th>Situação</th>")
    alunos.map(
        (element) => {

            let total = eval(parseFloat(element.nota1)+parseFloat(element.nota2));
            let situacao = total >= 60 ? "Aprovado" : "Reprovado";

            document.write(
                `<tr>
                <td>
                    ${element.nome}
                </td>
                <td>
                    ${element.id}
                </td>
                <td>
                    ${parseFloat(element.nota1).toFixed(1)}
                </td>
                <td>
                    ${parseFloat(element.nota2).toFixed(1)}
                </td>
                <td>
                    ${total.toFixed(1)}
                </td>
                <td>
                    ${situacao}
                </td>
                </th>`)
        });
}