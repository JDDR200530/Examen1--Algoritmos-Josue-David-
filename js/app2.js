function Aprovado(calificacion) {
if (calificacion > 65){
    console.log('Aprovado');
}
else if (calificacion <65){
    console.log('Reprovado');
}
}
const listado = [];
    const alumno1= {
        nombre: prompt('Ingrese el nombre del alumno'),
        edad: parseInt(prompt('Ingrese la edad del Alumno')),
        calificacion: parseFloat(prompt('Ingrese la calificacion del alumno ')),
    }
    const alummo2= {
        nombre: prompt('Ingrese el nombre del alumno'),
        edad: parseInt(prompt('Ingrese la edad del Alumno')),
        calificacion: parseFloat(prompt('Ingrese la calificacion del alumno ')),
    }

    const alumno3 = {
        nombre: prompt('Ingrese el nombre del alumno'),
        edad: parseInt(prompt('Ingrese la edad del Alumno')),
        calificacion: parseFloat(prompt('Ingrese la calificacion del alumno ')),
    }
    listado.push(alumno1,alummo2,alumno3)
    console.log(listado);