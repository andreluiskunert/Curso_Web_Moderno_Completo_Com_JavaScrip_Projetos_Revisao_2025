console.log('-------> Funções Arrow #03: <--------')
 let comparaComThis = function(param) {
  console.log(this === param)
 }
 comparaComThis(global)
 //
 const obj = {}
 comparaComThis = comparaComThis.bind()
 comparaComThis(global)
 comparaComThis(obj)
 //---
 let comparaComThisArrow = param => console.log(this === param)
 comparaComThisArrow(global)
 comparaComThisArrow(module.exports)
  console.log('The End')
