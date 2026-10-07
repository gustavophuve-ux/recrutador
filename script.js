

const form = document.getElementById("loginForm");

const mensagem = document.getElementById("mensagem");

const cpf = document.getElementById("cpf");

const telefone = document.getElementById("telefone");

const clienteBtn = document.getElementById("clienteBtn");

const desenvolvedorBtn = document.getElementById("desenvolvedorBtn");

const tipoSelecionado = document.getElementById("tipoSelecionado");


// TIPO DE USUÁRIO

let tipoUsuario = "";

function selecionarTipo(tipo) {

    tipoUsuario = tipo;

    // Remove a seleção dos dois botões
    clienteBtn.classList.remove("selecionado");

    desenvolvedorBtn.classList.remove("selecionado");


    // Seleciona o botão escolhido
    if (tipo === "Cliente") {

        clienteBtn.classList.add("selecionado");

    } else {

        desenvolvedorBtn.classList.add("selecionado");

    }


    // Mostra o tipo selecionado
    tipoSelecionado.textContent =
        "Tipo selecionado: " + tipo;
}


// MÁSCARA DO CPF

cpf.addEventListener("input", function() {

    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    cpf.value = valor;

});


// MÁSCARA DO TELEFONE

telefone.addEventListener("input", function() {

    let valor = telefone.value.replace(/\D/g, "");

    if (valor.length <= 10) {

        valor = valor.replace(
            /(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    } else {

        valor = valor.replace(
            /(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

    }

    telefone.value = valor;

});


// ENVIO DO FORMULÁRIO

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Verifica se escolheu Cliente ou Desenvolvedor

    if (tipoUsuario === "") {

        mensagem.style.color = "red";

        mensagem.textContent =
            "Por favor, selecione Cliente ou Desenvolvedor.";

        return;
    }


    const nome =
        document.getElementById("nome").value;

    const email =
        document.getElementById("email").value;

    const nascimento =
        document.getElementById("nascimento").value;


    mensagem.style.color = "#0b3d91";

    mensagem.textContent =
        `Cadastro realizado como ${tipoUsuario}, ${nome}!`;


    // Mostra os dados no console
    console.log("Tipo:", tipoUsuario);
    console.log("Nome:", nome);
    console.log("Nascimento:", nascimento);
    console.log("E-mail:", email);
    console.log("CPF:", cpf.value);
    console.log("Telefone:", telefone.value);

});