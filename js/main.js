const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

//outra forma de declarar funcao anonima: () => {}
//somar.addEventListener("click", function(){manipulaDados("somar")});


function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    } else{
        peca.value = parseInt(peca.value) + 1;
    }
};

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
};

/* Maneira não simplificada:

const imgRobo = document.querySelector("img");
let contadorCliqueImg = 0;

imgRobo.addEventListener("click", () => {
    contadorCliqueImg++;

    if (contadorCliqueImg === 7){
        contadorCliqueImg = 1;
    }

    if (contadorCliqueImg === 1){
        imgRobo.setAttribute("src", "img/Robotron 2000 - Vermelho.png")
    }
    if (contadorCliqueImg === 2){
        imgRobo.setAttribute("src", "img/Robotron 2000 - Azul.png")
    }
    if (contadorCliqueImg === 3){
        imgRobo.setAttribute("src", "img/Robotron 2000 - Amarelo.png")
    }
    if (contadorCliqueImg === 4){
        imgRobo.setAttribute("src", "img/Robotron 2000 - Branco.png")
    }
    if (contadorCliqueImg === 5){
        imgRobo.setAttribute("src", "img/Robotron 2000 - Preto.png")
    }
    if (contadorCliqueImg === 6){
        imgRobo.setAttribute("src", "img/Robotron 2000 - Rosa.png")
    }
})

----------------------------------------------------
Maneira simplificada: */

const imgRobo = document.querySelector("img");
let contadorCliqueImg = 0;
const imagens = [
  "img/Robotron 2000 - Vermelho.png",
  "img/Robotron 2000 - Azul.png",
  "img/Robotron 2000 - Amarelo.png",
  "img/Robotron 2000 - Branco.png",
  "img/Robotron 2000 - Preto.png",
  "img/Robotron 2000 - Rosa.png"
];

imgRobo.addEventListener("click", () => {
  contadorCliqueImg = (contadorCliqueImg + 1) % imagens.length;
  imgRobo.setAttribute("src", imagens[contadorCliqueImg]);
});