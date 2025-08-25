console.log('----->  Sistemas Modulos <-----')
function Pessoa(){
     this.idade = 0
     setInterval(()=>{
        this.idade++
        console.log(this.idade)
     }, 1000)
}
new Pessoa()




console.log('The End')