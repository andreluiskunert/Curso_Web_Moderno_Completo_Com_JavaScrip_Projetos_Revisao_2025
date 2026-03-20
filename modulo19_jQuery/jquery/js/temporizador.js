 // ... Terça-feira, 17/03/2026_De noite_1ªparte
 (function ($){
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em Breve',
            horario:'22:09:55'
        }, opcoes)
        const horaDezena = $ ('<span class="digito">').html('0')
        const horaUnidade = $ ('<span class="digito">').html('0')  
        const minutoDezena = $ ('<span class="digito">').html('0')
         const minutoUnidade = $ ('<span class="digito">').html('0')
         const segundoDezena = $ ('<span class="digito">').html('0')
         const segundoUnidade = $ ('<span class="digito">').html('0')
 //...> Quarta-feira, 18/03/2026_De noite_2ª parte
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
         const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)
         $(this).addClass('temporizador')
         $(this).append(horaDezena, horaUnidade, separadorHora, separadorMinuto, minutoDezena, 
            minutoUnidade,separadorMinuto, segundoDezena, segundoUnidade, mensagem)
//   Quinta-feira, 19/03/2026
      const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
      const horarioAlvo = regex.exec(opcoesFinais.horario)
     return this
     let temporizador = setInterval(() => {
        const agora = new Date()
        const alvo = new Date()
        alvo.setHours(horarioAlvo[1])
        alvo.setMinutes(horarioAlvo[2])
        alvo.setSeconds(horarioAlvo[3])
        const diferenciEmMili = alvo.getTime() - agora.getTime()
        if (diferenciEmMili >=0){
            const diferenca = regex.exec(new Date(diferenciEmMili).toISOString)    
            console.log(diferenca)  
            horaDezena.html(diferenca[1][0])
            horaUnidade.html(diferenca[1][1])
            minutoDezena.html(diferenca[2][0] )
            segundoDezena.html(diferenca[3][0] )
            segundoUnidade.html(diferenca[3][1] )
       }

     }, 1000)
    }
 })(jQuery)