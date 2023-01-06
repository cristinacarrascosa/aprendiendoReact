//alert("hola mundo");

var nombre = "Cristina";
var edad = 43;
var profesion = "Programadora";

//document.write(nombre + " tiene " + edad + " años");


//datos.innerHTML = nombre + " tiene " + edad + " años";

// datos.innerHTML = `
//     <h1> Ejemplo de template </h1>
//     <h2>Nombre: ${nombre}</h2>
//     <h2>Edad: ${edad}</h2>
//     <h3>Profesión: ${profesion}</h3>
// `;

/* ESTRUCTURA DE CONTROL */
// if(edad >= 18){
//     datos.innerHTML += "<h2>Es mayor de edad</h2>";
// }else{
//     datos.innerHTML += "<h2>Es menor de edad</h2>";
// }

/* BUCLE FOR */
// for(var i = 0; i <= 10; i++){
//     datos.innerHTML += "<h2>For del 1 al 10: " + i + "</h2>";
// }


/* Uso de funciones */
function muestraMiNombre(nombre, edad){
   

    var misDatos = `
        <h1> Ejemplo de template </h1>
        <h2>Nombre: ${nombre}</h2>
        <h2>Edad: ${edad}</h2>
        <h3>Profesión: ${profesion}</h3>
    `;
    return misDatos;
}



function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Cristina", 43);
}

imprimir();

/* Arrays */
var nombres = ["Cristina", "Juan", "Pedro", "Luis", "Ana"];
//alert(nombres[0]);

// recorrer array
// document.write("<h1>Listado de nombres</h1>");
// for(var i = 0; i < nombres.length; i++){
//     document.write(nombres[i] + "<br/>");
// }

// recorrer array con forEach y arrow function
// nombres.forEach(function(nombre){
//     document.write(nombre + "<br/>");
// })

nombres.forEach((nombre) => {
    document.write(nombre + "<br/>");
});

/* Objetos json */

var coche = {
    modelo: "Mercedes Clase A",
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad)
    },
    propiedad1: "valor aleatorio"

};

document.write("<h1>" + coche.modelo + "</h1>");
coche.mostrarDatos();

/* Promesas representa un valor que puede estar disponible ahora, en el futuro o nunca
capturamos la respuesta, capturamos el dato de manera asíncrona */
var saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let saludo = "Hola muy buenas";
        saludo = false;

        if(saludo){
            resolve(saludo);
        }else{
            reject("No hay saludo disponible");
        }

    }, 2000);

});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});