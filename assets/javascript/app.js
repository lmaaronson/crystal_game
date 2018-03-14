//loads the four crystals
var myArray = ["http://www.freeclipart.pw/uploads/2017/05/minion-clipart-15.jpeg", "http://worldartsme.com/images/despicable-me-minions-clipart-1.jpg","https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest?cb=20151224154354", "http://howtodrawdat.com/wp-content/uploads/2014/01/1st-pic-Stuart-Minion-as-a-Girl.png"]

for (var i = 0; i < myArray.length; i++) {  //this sets up the array to appea
  console.log(myArray[i])
  var crystals = $('<img>')
  crystals.attr('src', myArray[i])
  crystals.addClass('crystals')
  crystals.attr('crystalValue', Math.floor(Math.random() * 10))
  $('#load-crystals').append(crystals)
}

// random number between 0-50
var targetNumber = Math.floor(Math.random() * 50)
var userTotal = 0
var wins = 0
var losses = 0

// grab the dom element then replace
// document.getElementById('target-number').innerHTML = targetNumber

// grab the dom element then replace

$('#target-number').html(targetNumber)


function reset (){
  console.log ("reset happened")
  targetNumber = Math.floor(Math.random() * 50)
  $('#target-number').html(targetNumber)
  userTotal = 0
  $('#user-total').html(userTotal)
  $('#load-crystals').empty()
  for (var i = 0; i < myArray.length; i++) {  //this sets up the array to appea
    console.log(myArray[i])
    var crystals = $('<img>')
    crystals.attr('src', myArray[i])
    crystals.addClass('crystals')
    crystals.attr('crystalValue', Math.floor(Math.random() * 10))
    $('#load-crystals').append(crystals)
  }
}
  


$(document).on('click', ".crystals", function(){
  userTotal = userTotal + parseInt($(this).attr('crystalValue'))
  $('#user-total').html(userTotal)

  if (targetNumber == userTotal){
    wins ++;
    $('#wins').text(wins);
    reset()
  
  } else {
   
  if (targetNumber < userTotal) {
      losses ++;
    $('#losses').text(losses);
    reset()
} 
}  
})
  


  