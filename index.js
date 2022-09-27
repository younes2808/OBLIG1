$('.knapper').click(function(){
    var contClass = $(this).data('div');
    $('.mat').hide().filter('.' + contClass).show()
    })