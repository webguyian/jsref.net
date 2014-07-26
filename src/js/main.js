(function(window, document){

  var scrollBtn = document.querySelector('.scroll-top');


  window.addEventListener('scroll', function(event) {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 600) {
      scrollBtn.classList.remove('hidden');
    } else {
      scrollBtn.classList.add('hidden');
    }

  }, false);

  smoothScroll.init({easing: 'easeOutQuad'});

}(window, document, undefined));