var separacaoGastos = {
    dizimo: document.querySelector('#valorDiz'),
    despesas: document.querySelector('#valorDes'),
    investimento: document.querySelector('#valorInv'),
    planos: document.querySelector('#valorPMP'),
    lazer: document.querySelector('#valorLaz'),
    livre: document.querySelector('#valorLiv')
};

function calculoFinanceiro() {
    let valorEntrada = document.querySelector('#entrada').value
    let valorSaida = document.querySelector('#saida').value

    let dizimo = (10 * valorEntrada) / 100;


    function salario() {
        return valorEntrada - dizimo;
    };

    function calculo(base) {
        return (base * salario()) / 100;
    };

    let valorCalculado = {
        desp: calculo(60),
        inv: calculo(15),
        plan: calculo(10),
        liv: calculo(5),
        laz: calculo(10)
    };

    separacaoGastos.dizimo.innerHTML = "R$ " + dizimo;
    separacaoGastos.despesas.innerHTML = "R$ " + valorCalculado.desp;
    separacaoGastos.investimento.innerHTML = "R$ " + valorCalculado.inv;
    separacaoGastos.planos.innerHTML = "R$ " + valorCalculado.plan;
    separacaoGastos.lazer.innerHTML = "R$ " + valorCalculado.laz;
    separacaoGastos.livre.innerHTML = "R$ " + valorCalculado.liv;
}