//### 14. **Generar un ID único**
//- **Tarea**: Crea una función que genere un ID único basado en un contador interno.
//- **Tipo de función**: IIFE con closure
//- **Ejemplo**: `generarId()` → `1`, `generarId()` → `2`


const contador1 = (function() {
    let contador = 0;
    
    return function(){
        contador++;
        let idUnico = Math.floor(Math.random() * (2000 - 1000) + 1000)
        return idUnico;
    }
})();

console.log(contador1())
console.log(contador1())
console.log(contador1())
console.log(contador1())
console.log(contador1())
console.log(contador1())

