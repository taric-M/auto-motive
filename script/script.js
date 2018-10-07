 $(function() {
    $('.buttonUp').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });
});

window.onsubmit=function(e){
  window.open('order.html');
}