//Tarea: Crea una función que salude a una persona por su nombre.
//  Si no se proporciona un nombre, usa "Invitado".
//Tipo de función: Expresión de función
//Ejemplo: saludar() → ¡Hola, Invitado!


const saludo = function(nombre = "invitado"){
    return `¡Hola, ${nombre}!`
    
}

console.log(saludo("David"));
