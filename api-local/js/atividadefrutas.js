const arrayFrutas = [];

function cadastrar(e) {
    e.preventDefault();

    const fruta = document.getElementById('fruta').value.trim();

    const frutinha = { fruta }
    
    if (frutinha.length == 0) {
        alert("É necessário preencher com o nome da fruta!")
        return;
    }

    arrayFrutas.push(frutinha);
    arrayFrutas.sort();
    listarFrutas();
    
    alert("Fruta cadastrada")
}

function listarFrutas() {
    console.log(arrayFrutas);
    
    let template = "";
    
    arrayFrutas.forEach((f) => {
        template += `
        <ul>
            <li>${f.fruta}</li>
        </ul>`
    });
    

    document.getElementById('tabela-frutas').innerHTML = template;
}