console.log('-------> Funções Arrow #01: <--------')
let dobro = function (a) {
    return 2 * a 
}
dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))
ola = () => 'Ola'
ola = _ => 'Ola' // Param
console.log(ola())
  console.log('The End')
