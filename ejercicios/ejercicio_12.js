//### 12. **Multiplicar elementos de un arreglo**
//- **Tarea**: Crea una función que multiplique todos los números de un arreglo.
//- **Tipo de función**: Función de orden superior
//- **Ejemplo**: `multiplicarArreglo([2, 3, 4])` → `24`

const multiplicarArreglo = (array) => {
    let resultado = 1;
    for(let i = 0; i < array.length; i++){
        resultado = resultado * array[i];
        
    }
    return resultado;
    
};

console.log(multiplicarArreglo([2,3,4]))
