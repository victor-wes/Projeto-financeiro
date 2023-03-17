var separacaoGastos = {
    dizimo: document.querySelector('#valorDiz'),
    despesas: document.querySelector('#valorDes'),
    investimento: document.querySelector('#valorInv'),
    planos: document.querySelector('#valorPMP'),
    lazer: document.querySelector('#valorLaz'),
    livre: document.querySelector('#valorLiv')
};

function calculoFinanceiro(){
    let salarioBase = document.querySelector('#salario').value

    let dizimo = (10 * salarioBase) / 100;


    function salario(){
        return salarioBase - dizimo;
    };

    function calculo(base){
        return (base * salario()) / 100;
    };

    let valorCalculado = {
        desp: calculoFinanceiro(60),
        inv: calculoFinanceiro(15),
        plan: calculoFinanceiro(10),
        laz: calculoFinanceiro(10),
        liv: calculoFinanceiro(5)
    };

    separacaoGastros.dizimo.innerHTML = dizimo;
    separacaoGastros.despesas.innerHTML = valorCalculado.desp;
    separacaoGastros.investimento.innerHTML = valorCalculado.inv;
    separacaoGastros.planos.innerHTML = valorCalculado.plan;
    separacaoGastros.lazer.innerHTML = valorCalculado.laz;
    separacaoGastros.livre.innerHTML = valorCalculado.liv;
}