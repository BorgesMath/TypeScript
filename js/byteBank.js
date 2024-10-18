let saldo =3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (!elementoFormulario.checkValidity()){
        alert("Por favor, preencha os campos ");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransicao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    const novaTransacao = {
        tipoTransicao: tipoTransicao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
});