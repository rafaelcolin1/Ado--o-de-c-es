document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let animal = document.getElementById("animal").value;
    let adocao = document.getElementById("adocao").value;

    let pet = document.querySelector('input[name="pet"]:checked');

    if (nome.length < 3) return alert("Nome Inválido");

    if (cpf.length == 0) return alert("CPF Inválido");

    if (telefone.length < 8) return alert("Telefone Inválido");

    if (idade < 18) {

        alert("Menor de Idade Não Pode Adotar");
    }

    if (cidade.length == 0) return alert("Cidade Inválido");

    if (animal > 8) {
        alert("Você não pode adotar esse animal, pois ficará tempo de mais sozinho");
    }


    if (adocao.length < 10) return alert("Motivo Inválido");

    if (quintal.value == "") return alert("Campo obrigatório");

    if (pet.value == "petnao") return alert("O animal poderá haver acompanhamento da ONG");

    if (pet.value == "") return alert("Campo obrigatório");


    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});