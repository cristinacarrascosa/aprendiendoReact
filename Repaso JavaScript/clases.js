class Coche{

    constructor(marca, modelo, color, velocidad, combustible){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.combustible = combustible;
    }

    acelerar(){
        this.velocidad += 10;
    }

    reducir(){
        this.velocidad -= 10;
    }


}
class autobus extends Coche{

    contructor(marca, modelo, color, velocidad, combustible, numPlazas){
        //super(marca, modelo, color, velocidad, combustible);
        
    }
        
    

    mostraCapacidad(){
       
        return "El autobus tiene "+autobus.numPlazas+" plazas";
    }
}


var coche1 = new Coche("Mercedes", "Clase A", "Rojo", 200, "Diesel");
var coche2 = new Coche("Audi", "A3", "Azul", 180, "Gasolina");
var coche3 = new Coche("BMW", "Serie3", "Azul", 220, "Diesel");
var coche4 = new Coche("Seat", "Ibiza", "Blanco", 190, "Gasolina");

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
console.log(coche1);

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");
/*herencia*/

var autobus1 = new autobus("Mercedes", "Clase A", "Rojo", 200, "Diesel", 50);

console.log(autobus1.mostraCapacidad);




