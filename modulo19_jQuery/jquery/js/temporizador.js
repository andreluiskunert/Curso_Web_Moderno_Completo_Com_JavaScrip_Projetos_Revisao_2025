 // ... Terça-feira, 17/03/2026_De noite_1ªparte
 (function ($){
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em Breve',
            horario:'22:20:59'
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

        return this
    }
 })(jQuery)