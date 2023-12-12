var elem = document.querySelector('.carrossel--banner');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  autoPlay: true,
  wrapAround: true,
  contain: true
});

var produto = document.querySelector('.carrosel--produtos');
var flkty2 = new Flickity( produto, {
  // options

  cellAlign: 'left',
  wrapAround: true,
  contain: true
});