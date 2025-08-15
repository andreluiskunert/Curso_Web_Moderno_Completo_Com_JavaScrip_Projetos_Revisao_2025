console.log('-------> Parâmetro  Padrão <--------')
// 1ª estrategia: gerar valor padrão
console.log('Soma1:')
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // 0 = False
console.log('-----//----//--------')
console.log('soma2:')
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
       return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
console.log('-----//----//--------')
console.log('Soma3:')
function soma3(a = 1, b = 1, c = 1 ){
return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
console.log('The End')
