console.clear();

const api = new Promise((resolve, reject) => {
  let condition = false; //simula uma operação no back end

  const soma = (x, y) => s + y;

  //aqui simula uma chamada demorada ao servidor
  setTimeout(() => {
    console.log("A promise está sendo executada");
    if (condition) {
      resolve("A promise foi resolvida com sucesso.");
    } else {
      reject("A promise foi rejeitada.");
    }
  }, 3000);
});

console.log();
console.log();
console.log(api); //chamada na api -retrorna uma promise
console.log(); 
console.log();

api
  .then((retorno) => { //fullfiled/resolve
    console.log(retorno);
  })
  .catch((erro) => { //rejected
    console.error(erro);
  });