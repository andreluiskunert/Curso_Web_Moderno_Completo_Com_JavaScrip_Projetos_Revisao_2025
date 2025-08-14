console.log("Estrutura Break/Continue:  ")
console.log("Explica sobre assuntos...")
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Break:')
for (x in nums) {
    if(x == 5 ){
        break
    }
    console.log(`${x} = ${nums[x]}`)
    
}
console.log(' =====/// ====== ')
console.log('Continue:')
for (x in nums) {
    if(x == 5 ){
        continue
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log(' =====/// ====== ')
console.log('Rotulo Externo:')
externo: 
 for (a in nums) {
    for (b in nums) {
    if(a == 2 && b == 3) break externo 
    console.log(`Par = ${a}, ${b}`)
     }
}

console.log("The End")