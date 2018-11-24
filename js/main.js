$(document).ready(function(){
  $('.ba-slider').slick({
   "slidesToShow": 1, "slidesToScroll": 1,
   infinite: true,
   "dots": true,
   arrows: false,
  	slide: 'span'
  });
});

$(document).ready(function(){
  $('.ba-test__slider2').slick({
   "slidesToShow": 1, "slidesToScroll": 1,
   infinite: true,
   "dots": true,
   arrows: false,
  	slide: 'span'
  });
  initMap();

});
  function initMap() {
  // The location of Uluru
  var uluru = {lat: 41.3947688, lng: 2.0787276};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: uluru});
 

  var marker = new google.maps.Marker({
            position: uluru,
            icon: "img/barca.svg",
            map: map
        })
}


var center;
function calculateCenter() {
  center = map.getCenter();
}
google.maps.event.addDomListener(map, 'idle', function() {
  calculateCenter();
});
google.maps.event.addDomListener(window, 'resize', function() {
  map.setCenter(center);
});


/*__________________________________________________________*/


var $grid = $('.grid').isotope({
 itemSelector: '.element-item',
 layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
 // show if number is greater than 50
 numberGreaterThan50: function() {
   var number = $(this).find('.first').text();
   return parseInt( number, 10 ) > 50;
 },
 // show if name ends with -ium
 ium: function() {
   var name = $(this).find('.name').text();
   return name.match( /ium$/ );
 }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'li', function() {
 var filterValue = $( this ).attr('data-filter');
 // use filterFn if matches value
 filterValue = filterFns[ filterValue ] || filterValue;
 $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
 var $buttonGroup = $( buttonGroup );
 $buttonGroup.on( 'click', 'li', function() {
   $buttonGroup.find('.is-checked').removeClass('is-checked');
   $( this ).addClass('is-checked');
 });
});