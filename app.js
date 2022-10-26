let filme1 = 'imagens/filme01.jpg'
let filme2 = 'imagens/filme02.jpg'
let filme3 = 'imagens/filme03.jpg'
let filme4 = 'imagens/filme halloween.jpg'
let filme5 = 'imagens/filme vingadores-ultimato.jpg'
let filme6 = 'imagens/resgate.jpg'
document.querySelector(".container").innerHTML += "<img src='" + filme1 + "'>"
document.querySelector(".container").innerHTML += "<img src='" + filme2 + "'>"
document.querySelector(".container").innerHTML += "<img src='" + filme3 + "'>"
document.querySelector(".container").innerHTML += "<img src='" + filme4 + "'>"
document.querySelector(".container").innerHTML += "<img src='" + filme5 + "'>"
document.querySelector(".container").innerHTML += "<img src='" + filme6 + "'>"
var arrayfilmes = ["imagens/filme01.jpg", "imagens/filme02.jpg", "imagens/filme03.jpg", "imagens/filme halloween.jpg","imagens/filme vingadores-ultimato.jpg"];
var resultado = arrayfilmes.push("imagens/resgate.jpg");
console.log(resultado);
saída:
[ 'imagens/filme01.jpg', 'imagens/filme02.jpg', 'imagens/filme03.jpg', 'imagens/filme halloween.jpg','imagens/filme vingadores-ultimato.jpg','imagens/resgate.jpg ' ]
6

arrayfilmes.push("Silvia");
console.log(arrayfilmes);
saída:
[ 'imagens/filme01.jpg', 'imagens/filme02.jpg', 'imagens/filme03.jpg', 'imagens/filme halloween.jpg','imagens/filme vingadores-ultimato.jpg','imagens/resgate.jpg ' ]
