/*Mustache*/

var myTemplate = document.querySelector('#template').innerHTML;
 Mustache.parse(myTemplate);
 var allTemplates = '';
 var carousel = document.querySelector('.main-carousel');

 for (var i = 0; i < slides.length; i++) {
     console.log(slides);
    allTemplates += Mustache.render(myTemplate, slides[i]);
 }
 carousel.innerHTML = allTemplates;

/*Flickity*/

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    hash: true,
});


var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

var restart = document.querySelector('.restart');

restart.addEventListener('click', function () {
    var flkty = new Flickity('.main-carousel');
    flkty.select(0);
})
