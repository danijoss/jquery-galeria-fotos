$(document).ready(function(){
    
    $('header button').click(function(){ //função jQuery equivalente ao addEventListener('click' function(){}) 
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){ 
        $('form').slideUp();
    })

    $('form').on('submit', function(e){         
        e.preventDefault() //versão do jQuery do codigo para impedir o reset do campo ao clicar submit
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000); //efeito de fade para aparecer a nova foto o parametro que vai dentro da funcao é tempo em milisegundos 
        $('#endereco-imagem-nova').val('')
    })

})