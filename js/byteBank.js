let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha os campos ");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransicao = inputTipoTransacao.value;
    let valor = parseFloat(inputValor.value); // Convertendo para número
    let data = inputData.value;

    if (isNaN(valor) || valor <= 0) { // Verificando se o valor é um número válido
        alert("Por favor, insira um valor numérico válido!");
        return;
    }

    if (tipoTransicao == "Depósito") {
        saldo += valor; // Adicionando ao saldo
    } else if (tipoTransicao == "Transferência" || tipoTransicao == "Pagamento de Boleto") {
        saldo -= valor; // Subtraindo do saldo
    } else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransicao: tipoTransicao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    elementoFormulario.reset(); // Limpando o formulário após o envio
});
