
$(function(){

    // determine which navigation item to dispay the arrow underneath
    var selectedMap = {
        '/home': '#nav-home',
        '/bio': '#nav-bio',
        '/video': '#nav-video',
        '/music': '#nav-music',
        '/contact': '#nav-contact'
    }
    
    $('#headernav li').removeClass('selected')
    
    for(var stem in selectedMap) {
        if(window.location.pathname.indexOf(stem) == 0) {
            var selector = selectedMap[stem]
            $(selector).addClass('selected')
        }
    }
})
