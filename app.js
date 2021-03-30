var general = function (id) {
  var audio = $('#' + id)[0];
  //var audio = new Audio(link);
  audio.volume = voice;
  audio.play();

  $('#display').text(id);
};

$('#part1').on('click', '.drum-pad', function (e) {
  id = $(this).text();
  general(id);

  e.preventDefault();
});

$(document).on('keypress', function (e) {
  var keyNum = e.which;
  if (keyNum > 90) {
    keyNum -= 32;
  }
  console.log(keyNum);

  bankOne.map((e) => {
    if (e.keyCode === keyNum) {
      console.log(e.keyTrigger);

      $(`#${e.keyTrigger}`).first().click();
    }
  });
});

$(document).ready(function () {
  bankOne.map((e) => {
    $(`#${e.keyTrigger}`).attr('src', `${e.url}`);
    $(`#${e.keyTrigger}`).parent().attr('id', `${e.id}`);
  });
});

var voice = 0.5;

$('.range').on('change', function (e) {
  voice = $('#customRange1').val() / 100;

  e.preventDefault();
});
