// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
}
const passo2 = (ctx, next) =>{
    ctx.valor2 = 'mid2'
}
const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middleawares) =>{
    const execPasso = indice =>{
        middleawares && indice < middleawares.length && middleawares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
} 
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)