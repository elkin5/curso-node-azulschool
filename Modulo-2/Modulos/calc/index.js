// Este es mi modulo

// se define un objeto que puede ser exportado en este caso una funcion
const suma = (n1, n2) => n1 + n2
const resta = (n1, n2) => n1 - n2
const div = (n1, n2) => n1 / n2
const mult = (n1, n2) => n1 * n2

// En este objeto ponemos todo lo que deseamos exportar
// El export es un objeto al cual le debeoms poner nombre: valor
// pero javascript permite definir una clave valor a partir de un objeto donde el nombre sera el mismo
// que el valor de la variable
module.exports = {
  suma,
  resta,
  div,
  mult
}