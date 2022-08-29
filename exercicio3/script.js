let a = prompt("Qual será o valor da variável a?");
let b = prompt("Qual será o valor da variável b?");

let velhaA = a

a=b;
b=velhaA;

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)