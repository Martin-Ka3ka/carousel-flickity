/*Mustache*/

var myTemplate = document.querySelector('#template').innerHTML;
Mustache.parse(myTemplate);
var allTemplates = '';
var carousel = document.querySelector('.main-carousel');

for (var i = 0; i < slides.length; i++) {
    
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

/*google maps*/

window.initMap = function () {

    var map = new google.maps.Map(
        document.getElementById('map'), {
            center: slides[0].coords,
            zoom: 10
        }
    );
    var markers = [];
    for (var i = 0; i < slides.length; i++) {
        markers[i] = new google.maps.Marker({
            position: slides[i].coords,
            map: map,
        });
        markers[i].addListener('click', function () {
            flkty.select(i)
        })

    }
    flkty.on("change", function (index) {
        map.panTo(slides[index].coords);
        map.setZoom(14)
    });
}
            


