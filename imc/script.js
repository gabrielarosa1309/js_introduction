//IMC
//1.Pegar os valores 
//2.Calcular o IMC
//3.Gerar a classificação do IMC
//4.Organizar as informações
//5.Salvar os dados na lista 
//6.Ler a lista com os dados
//7.Renderizar o conteúdo no HTML (tabela)
//8.Botão de limpar os registros

const arrPessoas = []; //array vazio

function calcular(e) {
    e.preventDefault(); //capturar o evento de submit do formulário (para)

    //Pegar os dados do form
    //Validar se estão preenchidos

    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("É necessário preencher os números corretamente!")
        return; //aqui é colocado um return pq assim ele para a funçao e n prossegue com os próximos passos (cálculos de imc)
    }

    //Calcular imc
    const imc = calcularImc(altura, peso);
    const situacao = retornaSituacao(imc);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(situacao);

    //Gerar objeto
    const pessoa = { nome, altura, peso, imc, situacao }; //objeto literal

    arrPessoas.push(pessoa);

    //
    listarPessoas();
}

function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2);
}

function retornaSituacao(imc) {
    if (imc < 18.5) {
        return "Magreza severa"
    } else if (imc <= 24.99) {
        return "Peso normal"
    } else if (imc <= 29.99) {
        return "Sobrepeso"
    } else if (imc <= 34.99) {
        return "Obesidade I"
    } else if (imc <= 39.99) {
        return "Obesidade II"
    } else {
        return "MÓRBIDO!!!"
    }
}

function listarPessoas() {
    console.log(arrPessoas);

    let template = "";

    arrPessoas.forEach((p) => {
        template += `
            <tr>
                <td>${p.nome}</td>
                <td>${p.altura}</td>
                <td>${p.peso}</td>
                <td>${p.imc.toFixed(2)}</td>
                <td>${p.situacao}</td>
            </tr>`;
    });

    document.getElementById('corpo-tabela').innerHTML = template;
}

//escopo = visibilidade/abrangencia