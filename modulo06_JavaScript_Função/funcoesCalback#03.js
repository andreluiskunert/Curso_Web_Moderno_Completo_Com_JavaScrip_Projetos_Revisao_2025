console.log('-------> Funções Calback #02: <--------')
// exe.: de callback no Browser
document.getElementsByTagName('body')[0].onclick = function(e) {
  console.log('O evento ocorreu ')
}
console.log('The End')
