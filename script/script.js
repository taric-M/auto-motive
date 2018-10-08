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


const items = document.getElementsByClassName('button_view');
for(let i = 0; i < items.length; i++ ) {
    items[i].onclick = el=>{
        if(findBig()) {
            el.currentTarget.parentElement.setAttribute("class", "gelery_item");
            el.target.innerHTML = 'ПЕРЕГЛЯНУТИ';
        }else{
            el.target.parentElement.setAttribute("class", "big_size");
            el.target.innerHTML = 'ЗАКРИТИ';
        }
    
}
}

const findBig = () =>{
  for(let i = 0; i < items.length; i++ ) {
    if(items[i].innerHTML == 'ЗАКРИТИ'){
        return true;
    }
}  
}
