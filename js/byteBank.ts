let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null){
    elementoSaldo.textContent = saldo.toString();
}



const elementoFormulario = document.querySelector(".block-nova-transacao form")as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha os campos ");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor")as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data")as HTMLInputElement;

    let tipoTransicao = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber; 
    let data: Date = new Date(inputData.value);

    if (isNaN(valor) || valor <= 0) { 
        alert("Por favor, insira um valor numérico válido!");
        return;
    }

    if (tipoTransicao == "Depósito") {
        saldo += valor; 
    } else if (tipoTransicao == "Transferência" || tipoTransicao == "Pagamento de Boleto") {
        saldo -= valor; 
    } else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransicao: tipoTransicao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    elementoFormulario.reset(); 
});
