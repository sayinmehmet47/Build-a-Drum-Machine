var general = function (id) {
  if (!power) {
    return;
  }

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

//keyboard

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
//assigning the audio

$(document).ready(function () {
  bankOne.map((e) => {
    $(`#${e.keyTrigger}`).attr('src', `${e.url}`);
    $(`#${e.keyTrigger}`).parent().attr('id', `${e.id}`);
  });
});

//voice control
var voice = 0.5;

$('.range').on('change', function (e) {
  voice = $('#customRange1').val() / 100;

  $('#display').text(Math.ceil(voice * 100));

  e.preventDefault();
});

//power
var power = true;
$('#switch').on('change', function (e) {
  power = $('#flexSwitchCheckChecked').is(':checked');

  console.log(power);

  e.preventDefault();
});
//banks

var bank;
$('#switch1').on('change', function (e) {
  bank = $('#flexSwitchCheckChecked1').is(':checked');

  console.log(bank);
  if (bank) {
    bankTwo.map((e) => {
      $(`#${e.keyTrigger}`).attr('src', `${e.url}`);
      $(`#${e.keyTrigger}`).parent().attr('id', `${e.id}`);
    });

    $('#display').text("bank-2");

  } else {
    bankOne.map((e) => {
      $(`#${e.keyTrigger}`).attr('src', `${e.url}`);
      $(`#${e.keyTrigger}`).parent().attr('id', `${e.id}`);
    });
    $('#display').text("bank-1");

  }

  console.log(bank);

  e.preventDefault();
});
