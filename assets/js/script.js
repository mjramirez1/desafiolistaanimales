// Se crea la clase Padre o "super clase"
class Propietario {
    constructor(nombre, direccion, telefono) { //funcion constructora
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    datosPropietario() { 
        return `El nombre del dueño es: ${this._nombre}, con domicilio en "${this._direccion}" y su número de contacto es: ${this._telefono}. <br> `
    }
}
// Se crea la clase hija de Propietario
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    setTipo(tipo) {
        this._tipo = tipo
    }
    getTipo() {
        return this._tipo
    }
    datosTipoAnimal() {
        return `El tipo de animal es un: ${this._tipo}. `
    }
}
// Se crea la clase nieta de Propietario, hija de Animal
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    setNombre(nombreMascota) {
        this._nombreMascota = nombreMascota
    }
    getNombre() {
        return this._nombreMascota
    }
    setEnfermedad(enfermedad) {
        this._enfermedad = enfermedad
    }
    getEnfermedad() {
        return this._enfermedad
    }
    datosMascota() {
        return `El nombre de la mascota es "${this._nombreMascota}", y la enfermedad es "${this._enfermedad}". `
    }
}
// Se seleccionan los elementos del formulario a trabajar
let formulario = document.querySelector('#formulario')

// Se crea el evento para el formulario
let fichaMedica = (event) => {
    event.preventDefault()
    let nombre = document.querySelector("#propietario").value
    let direccion = document.querySelector('#direccion').value
    let telefono = document.querySelector('#telefono').value
    let tipo = document.querySelector('#tipo').value
    let nombreMascota = document.querySelector('#nombreMascota').value
    let enfermedad = document.querySelector('#enfermedad').value
    let resultado = document.querySelector('#resultado')

    if (tipo === "gato"){
        const gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = `${gato.datosPropietario()}${gato.datosTipoAnimal()} ${gato.datosMascota()}` 
    } else if  (tipo === "perro"){
        const perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = `${perro.datosPropietario()}${perro.datosTipoAnimal()} ${perro.datosMascota()}`

    } else{
        const conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
        resultado.innerHTML = `${conejo.datosPropietario()}${conejo.datosTipoAnimal()} ${conejo.datosMascota()}` 
    }
}
formulario.addEventListener('submit', fichaMedica)

