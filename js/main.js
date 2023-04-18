const robotron = document.querySelector('#robotron');

//outra forma de declarar funcao anonima: () => {}
robotron.addEventListener("click", function(evento){
    console.log("Cliquei no robô.");
});

function dizOi(nome){
    console.log('Oi ' + nome);
}

dizOi("Wagner");