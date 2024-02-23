const NumerodePlantilla = prompt('Ingrese en Numero de Plantilla ')
let NombredelaEmpresa = prompt('Ingrese el nombre de la empresa')
let Opcion = 0; 
const Plantilla = [];
const Empleado1 = {
    nombre: prompt('Ingrese Nombre del empleado'),
    sueldo: parseFloat(prompt('Ingrese el Sueldo Base del Empleado ')),
    adelanto : parseFloat(prompt('Ingrese el adelanto del empleado ')),
}

const Empleado2={
    nombre: prompt('Ingrese el Nombre del empleado'),
    sueldo: parseFloat(prompt('Ingrese el Sueldo Base del Empleado')),
    adelanto : parseFloat(prompt('Ingrese el adelanto del empleado')),
}
const Empleado3={
    nombre: prompt('Ingrese el Nombre del empleado'),
    sueldo: parseFloat(prompt('Ingrese el Sueldo Base del Empleado')),
    adelanto : parseFloat(prompt('Ingrese el adelanto del empleado')),
}


Plantilla.push(Empleado1,Empleado2,Empleado3);
console.log(NumerodePlantilla+"  "+NombredelaEmpresa)
console.log(Plantilla);