var Q = function () {
  $('#Q')[0].play();
  $('#display').text('Q');
};

$('#Q')
  .parent()
  .on('click', function (e) {
    console.log('sdfsdf');
    Q();
    e.preventDefault();
  });

$(document).on('keydown', function (e) {
  console.log(e.which);
  if (e.which === 81) {
    Q();
  }
});
