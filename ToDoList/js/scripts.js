// check off specific todos 

$('ul').on('click', 'li',  function () {
    $(this).toggleClass('completed');
})

//click on X to delete todo
$('ul').on('click', 'span',  function (event) {
    $(this).parent().fadeOut('400', function () {
        $(this).remove();
    });
    event.stopPropagation();
})

// add event listener to input

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing value
        var ToDoText = $(this).val();
        $(this).val('');
        //create new li then add to ul
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' +  ToDoText + '</li > ')
    };
        
})

$('.fa-plus').click(function () {
    $("input[type='text']").fadeToggle();

})