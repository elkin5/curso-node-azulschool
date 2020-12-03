// Para instalar dependencias ya no es necesario escribir istall --save
// lo hace por defecto
// para instalar una dependencia de desarrollo lo instalamos global -g
// Con nodemon podemos actualizar cambios sin necesidad de reiniciar el servidor

// Aqui se realiza un import de un modulo instalado
const is = require('is-thirteen')

console.log(is(13))
