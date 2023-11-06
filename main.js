$(document).ready(function (){

    $('form').on('submit',function(e) {
        e.preventDefault()

        const input_tarefa=$("#list").val()

        const novatarefa=(`<li >${input_tarefa}</li>`)

        $(novatarefa).appendTo(novatarefa)



        

        $(novatarefa).appendTo('ul')


        $('#list').val('')

    

    })
    
    $('ul').on('click',"li",function () {
        $(this).toggleClass('riscado')

    })

    

    


  


})