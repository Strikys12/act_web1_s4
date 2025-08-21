//### 11. **Verificar si un número es par**
//- **Tarea**: Crea una función que determine si un número es par.
//- **Tipo de función**: Declaración de función
//- **Ejemplo**: `esPar(4)` → `true`

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(esPar(11))