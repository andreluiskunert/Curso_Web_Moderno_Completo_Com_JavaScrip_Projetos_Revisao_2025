// não aceita repetição / não indexada
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('flamengo').add('corinthians')
times.add('flamengo')
times.add('vasco')
console.log(times)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
//
const nomes = ['Ana', 'Paula','Ana','Julia']
const nomeSet = new Set(nomes)
console.log(nomeSet)
