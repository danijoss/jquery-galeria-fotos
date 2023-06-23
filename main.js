$(document).ready(function(){
    

    $('form').on('submit', function(e){         
        e.preventDefault() 

        const tarefaNova = $('#tarefa-nova').val()
        const novoItem = $('<li"></li>')
        $(`${tarefaNova}`).appendTo(novoItem)
        $(`
            <div>
                <li>
                    <a>${tarefaNova}</a>
                </li>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
    
        $('#tarefa-nova').val('')
        
        $('li').click(function(){ 
            $(this).addClass('concluido')
            
        })

    })
        
})

