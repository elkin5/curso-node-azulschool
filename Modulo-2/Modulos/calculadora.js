// Estamos importamos el modulo
// generalmente un modulo se guarda en una carpeta diferente y se accede a el mediante el index
// si requerimos usar el modulo unicamente tendriamos que importar la carpeta
// si no encuentra una carpeta que corresponde entonces busca en node_modules
// podria imprtar todas las funciones del modulo con const mimidulo = require...
// y se usaria como un objeti completo aunque tambien puedo importar solo lo que necesito
const {suma,resta} = require('./calc')

console.log(suma(56,2))