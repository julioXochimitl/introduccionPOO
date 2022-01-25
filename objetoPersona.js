// var nomprePersona = prompt("Ingresa tu nombre");
// var edadPersona = prompt("Ingresa tu edad");

class person{
    constructor(nombre, edad){
        this.name = nombre;
        this.age = edad
    }
    show(){
        return(`${this.name}, ${this.age} años`);
    }
}

function getPersona(){
    let name = document.getElementById("nombrePersona").value;
    let age = document.getElementById("edadPersona").value;

    let persona1 = new person(name, age);
    document.getElementById("idPersona").innerHTML = `<ul><li>${persona1.show()}</li><ul>`
}