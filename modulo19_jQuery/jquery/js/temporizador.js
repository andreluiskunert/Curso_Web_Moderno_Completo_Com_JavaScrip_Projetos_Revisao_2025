 // ... Terça-feira, 17/03/2026_De noite_1ªparte
 (function ($){
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em Breve',
            horario:'22:14:59'
        }, opcoes)
        const horaDezena = $ ('<span class="digito>').html('0')
        const horaUnidade = $ ('<span class="digito>').html('0')  
        const minutoDezena = $ ('<span class="digito>').html('0')
         const minutoUnidade = $ ('<span class="digito>').html('0')
         const segundoDezena = $ ('<span class="digito>').html('0')
         const segundoUnidade = $ ('<span class="digito>').html('0')

        return this
    }
 })(jQuery)