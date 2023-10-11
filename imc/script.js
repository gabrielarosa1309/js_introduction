//IMC
//1.Pegar os valores 
//2.Calcular o IMC
//3.Gerar a classificação do IMC
//4.Organizar as informações
//5.Salvar os dados na lista 
//6.Ler a lista com os dados
//7.Renderizar o conteúdo no HTML (tabela)
//8.Botão de limpar os registros

function calcular() {
    event.preventDefault();
    
    //Pegar os dados do form
    //Validar se estão preenchidos

    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if(isNaN(altura) || isNaN(peso) || nome.length == 0){
        alert ("É necessário preencher os números corretamente!")
        return;
    } 

    //Calcular imc
    const imc = calcularImc(altura, peso);
    const situacao = retornaSituacao(imc);

    console.log(nome);
    console.log(altura);
    console.log(peso);  
    console.log(imc);
}

function calcularImc(altura, peso){
    return peso / Math.pow(altura, 2);
}

function retornaSituacao(imc){
    if (imc < 18.5) {
        resultadoImc = "Magreza severa"
    } else if (imc <= 24.99) {
        resultadoImc = "Peso normal"
    } else if (imc <= 29.99) {
        resultadoImc = "Sobrepeso"
    } else if (imc <= 34.99) {
        resultadoImc = "Obesidade I"
    } else if (imc <= 39.99) {
        resultadoImc = "Obesidade II"
    } else {
        return "MÓRBIDO!!!"
    }
}