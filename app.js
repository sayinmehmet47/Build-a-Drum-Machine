var general = function (id) {
 
let link=$(`#${id}`).find("source").attr("src")

  var audio = new Audio(link);
  audio.play();
 
  $('#display').text(id);
};



$("#part1").on('click','.drum-pad', function(e) {
 
 
  id=$(this).text()
  general(id)

  console.log(id)

e.preventDefault()
});




$(document).on('keydown', function (e) {
  const key=e.key.toUpperCase()
  general(key)
  
 
});


//Assigning the src(link) to elements

$(document).ready(function(){

bankOne.map(e=>{

$(`#${e.keyTrigger}`).find("source").attr("src",`${e.url}`)

})

})




