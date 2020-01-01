

// once clicked, here's what's being display:
    //question pops up 
    //with 45 sec to answer.
    //how many correct so far (which should be 0 to start with or blank)
/*$("#timer").html(timer)
$("#question").html(questions.question) //function of question here
$("#choices").html(quesitons.choices) // options of answers */

//create array to hold questions and correct answers: 
var questions= [
    { question: "Who was Ross's second wife?",
      choices: ["Rachel", "Monica", "Carol", "Emily"],
      answer: 3,
    },

    { question: "Monica asked Phoebe for a haircut. Who did Monica wanted it look like but what did she get instead? ",
      choices: ["Rachel Green", "Dudely Moore", "Demi Moore", "Shirley Moore"],
      answer: 2,
    },

    { question: "Everyone stayed at a beach house that belonged to one of Phoebe's massage clients. What was wrong with it?",
      choices: ["It was in the middle of being torn down", "It didn't exist", "Nothing. It's fine", "It was filled with sand"],
      answer: 3,
    },

    { question: "Which character got hit by a tranquilizer dart?",
      choices: ["Rachel", "Monica", "Chandler", "Ross", "Phoebe"],
      answer: 5,
    },

    { question: "Joey dated someone that Chandeler fell in love with. Who is she?",
      choices: ["Rachel", "Kathy", "Katie", "Kristen"],
      answer: 1,
    },

];


/*var count =0;
for(var i = 0; 0 < questions.length; i++){
console.log(questions[i].question);
}*/


//for(var i =0; i< questions[count].choices.length; i++){
    //console.log(questions[0].choices[0]);}

//console.log(questions[count].choices[count]);



//create variable for score of correct answers and wrong answers to be displayed 

var correct=""; // with strings means i'm going to add some kind of value later 
var incorrect="";
var unanswered="";
var userGuess;
//var name =0 means i'm starting with starting and the number will go up or down 
//var of null = can be similar to blank string in meaning we are going to add value later 

//variable for timer 
var timer=10;
var intervalId; 
var timerOn=false;
var count=0;

//create object or var? that holds messages so we can call it later: 
    //show msg of Correct answers
    //show that answer is wrong 
    //show time is UP


//function to start game
function startGame() {
    $("#question").html("<h2>" + questions[count].question + " </h2>");
    $("#options").show();
    $("#choice1").html(questions[count].choices[0]);
    $("#choice2").html(questions[count].choices[1]);
    $("#choice3").html(questions[count].choices[2]);
    $("#choice4").html(questions[count].choices[3]);
        //console.log(questions[0].choices[1]);*/
};
//startGame();


function setTime () { 
    clearInterval(intervalId);
    intervalId= setInterval(runTimer, 1000);
    }


    
//function to run the timer
function runTimer () {
    timer--;
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");

    //show seconds are ticking DOWN and once hit 0: 
    if(timer === 0) {
    //alert("Time's Up!");
    clearTimer();
    nextQuestion();

    }
}

//function to go through each question 
function nextQuestion () {
    count++;
    startGame();

    //needs something to make the next question start 
}


//function to clear the timer 
function clearTimer () {
    clearInterval(intervalId);
    //once answer is clicked (rather wrong or correct,we need to reset timer)
}

//function restart game 
function restart () {
    startGame();
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");
}


//display for last screen to show final results  and button to restart game 
    //at the final screen, show correct answer and incorrect answers
    //at the final screen: offer to restart with click of button in which game would start automatically again 


//below here is how the game works or action of the game:

//function for the selected answers w/ if statements of the game
//call start game then go through the IF statements to determine outcome of user 
//welcome page with on click button to start the game 


$(document).ready(function () {
    $("#options").hide();
    
$("#start").on("click", function () {
    //hide start button
    $("#start").hide();

    setTimeout(startGame,1000);
    setTime();





/*
else if(userGuess = answer) {
    alert("Correct! Good Job!");
    }
    else {
    alert ("Sorry. Wrong answer!");
    }
//if answered correctly
    //show a msg congratualing them
    //after a few secs, go on the next page automatically 

//if answered incorrectly
    // show a msg saying it is wrong 
    //after a few sec, go on to next page automattically 

//if player taking too long to answer,
    // show msg of Times up 
    // display correct answer
    //go on the next page automatically*/


});
    
});