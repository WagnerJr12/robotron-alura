const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

//outra forma de declarar funcao anonima: () => {}
//somar.addEventListener("click", function(){manipulaDados("somar")});


function manipulaDados(operacao){
    if(operacao === '-'){
        braco.value = parseInt(braco.value) - 1;
    } else{
        braco.value = parseInt(braco.value) + 1;
    }
};