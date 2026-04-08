document.getElementById("formAdocao").addEventListener("submit", function (e) {
e.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let moradia = document.getElementById("moradia").value;
let quintal = document.querySelector('input[name="quintal"]:checked');
let cpf = document.getElementById("cpf").value;
let idade = document.getElementById("idade").value;
function idademin(idade){
    const min = 18;
    if (parseFloat(idade.value) < min) {
        idade.value = min;
    }
}
let cidade = document.getElementById("cidade").value;
let animal = document.getElementById("animal").value;
let adocao = document.getElementById("adocao").value;

document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " +nome;
});