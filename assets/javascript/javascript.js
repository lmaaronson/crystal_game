// when game starts computer assigns 5 random numbers
var targetNumber = Math.floor(Math.random() * 50)        //one is the target numner
var blackCrystal = Math.floor(Math.random() * 10)        //one is for the black crystal
var greenCrystal = Math.floor(Math.random() * 20)        //one is for the green crystal
var purpleCrystal = Math.floor(Math.random() * 20)      //one is for the purple crystal
var redCrystal = Math.floor(Math.random() * 20)         //one is for the red crystal

var wins = 0    //wins = 0
var losese = 0  //loses = 0
//number to guess = var targetNumber
//yourScore = [empty array] filled by user clicks on crystals

//repeated loops for functions
//  funtion newGame
        //targetnumber random number assignment
        //red crystal random number assignment
        //green crystal random number assignment
        //purple crystal random number assignment
        //black crystal random number assignment
        //set html to reflect new game
        //yourScore = 0

        
//user then clicks a crystal function  (onClick handler)
    //add value of gem clicked to userTotal
    //update html to reflect new userTotal

                //if userTotal == target number
                    //wins increase by 1
                    //display wins score in the window
                    //new game starts (create function newGame)
                        //new value selected for target value
                        //each crystal gets a new value

                //if userTotal > target number
                    //lose increase by 1
                    //display losses in html window
                    //new game starts (create function newGame)
                        //new value selected for target value
                        //each crystal gets a new value

                //else userTotal < target number
                    //user gets another turn; do nothing

   