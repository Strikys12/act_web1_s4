
//### 13. **Reemplazar espacios por guiones**
//- **Tarea**: Crea una función que reemplace los espacios en una cadena por guiones.
//- **Tipo de función**: Expresión de función
//- **Ejemplo**: `reemplazarEspacios("Hola Mundo")` → `Hola-Mundo`


const reemplazarEspacios = function (cadena) {
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {

            nuevaCadena += "-";

        } else {
            nuevaCadena += cadena[i];
        }


    }
    return nuevaCadena

}

console.log(reemplazarEspacios("hola amigos"))