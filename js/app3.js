let a= parseFloat(prompt('Ingrese el Valor de a'))
let b= parseFloat(prompt('Ingrese el valor de b'))
let c= parseFloat(prompt('Ingrese el valor de c'))
let ac= 4*a*c;
const x1 =(b-Math.sqrt(Math.pow(2,b) -ac))/2*a
const  x2 =(b+Math.sqrt((b^2)-ac)/2*a)

console.log('El valor de x1: '+x1+'\n El valor de x2:'+x2);
