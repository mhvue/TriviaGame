
//create array to hold questions and correct answers: 
var questions= [
    { question: "Who was Ross's second wife?",
      choices: ["Rachel", "Monica", "Carol", "Emily"],
      answer: "Emily"
    },

    { question: "Monica asked Phoebe for a haircut. Who did Monica wanted it look like? ",
      choices: ["Rachel Green", "Dudley Moore", "Demi Moore", "Shirley Moore"],
      answer: "Dudley Moore",
    },

    { question: "Everyone stayed at a beach house that belonged to one of Phoebe's massage clients. What was wrong with it?",
      choices: ["It was being torn down.", "It did not exist.", "Nothing.", "It was filled with sand."],
      answer: "It was filled with sand.",
    },

    { question: "Which character got hit by a tranquilizer dart?",
      choices: ["Rachel", "Monica", "Ross", "Phoebe"],
      answer: "Phoebe",
    },

    { question: "Joey dated someone that Chandeler fell in love with. Who is she?",
      choices: ["Rachel", "Kathy", "Katie", "Kristen"],
      answer: "Kathy",
    },

    { question: "What is the name of the Department store Rachel worked for?",
      choices: ["Ralph Lauren", "Gucci", "Bloomingdales", "Macys"],
      answer: "Bloomingdales",
    },

    { question: "Which Friend had an on and off addiction to smoking?",
      choices: ["Monica", "Ross", "Chandler", "Phoebe"],
      answer: "Chandler",
    },

    { question: "What did Monica make when she was trying to get over Richard?",
      choices: ["Lasagna", "Jam", "Cookies", "Soup"],
      answer: "Jam",
    },

];



//testing on checking nested objects in array  
//var count =0;
//console.log(questions[0].question);
//console.log(questions[0].answer);
//console.log(questions[0].choices)
//console.log(questions[0].choices.length);



//create variable for score of correct answers and wrong answers to be displayed 

var userCorrect=0; 
var userIncorrect=0;
var unanswered=0
var userGuess;

//variable for timer 
var timer=10;
var intervalId; 
var timerOn=false;
var count=0;


//function to start game
function startGame() {
    $("#question").html("<h2>" + questions[count].question + " </h2>");
    $("#choices-container").show();
    
    for (var i = 0; i < questions[count].choices.length; i++) {
        $("#choice" + i).html("<input type='submit' value='" + questions[count].choices[i] + "'> ");
     };

   userAnswers();
        


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

//what i'm thinking of doing: parseInt the answer number 
//collect user's guess 

function userAnswers() {
$("span").unbind("click").on("click", function (){
    userGuess=$(this).children().val();
    //console.log(userGuess);
 
    var triviaAnswer= questions[count].answer;
    console.log(triviaAnswer); 
   
    //console.log("clicked!");

//if answered correctly
//show a msg congratualing them
//after a few secs, go on the next page automatically 
  if (userGuess === triviaAnswer) {

    var correctDiv = $("<div>");
    correctDiv.addClass("msg-container");
    $("#messages").html(correctDiv);
    $(".msg-container").show();
    $(".msg-container").html("<h1> " + userGuess + " is correct!</h1>");

    setTimeout(nextQuestion, 5000);

    }

//if player taking too long to answer,
// show msg of Times up 
// display correct answer
//go on the next page automatically

  else{
      //console.log("wrong");
    var wrongDiv = $("<div>");
    wrongDiv.addClass("wrongMsg-container");
    $("#messages").html(wrongDiv);
    $(".wrongMsg-container").show();
    $(".wrongMsg-container").html("<h1> " + userGuess + " is incorrect!</h1>");
    setTimeout(nextQuestion, 5000);
      //with 5 sec, have a msg saying "wrong"
}
});
}
//userAnswers();

//function to go through each question 
function nextQuestion () {
    $(".msg-container").hide();
   // $(".wrongMsg-container").hide();
    count++;
    timer=10;
    setTime();
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");
    restart();

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





//below here is how the game works or action of the game:
//welcome page with on click button to start the game 


$(document).ready(function () {
    $("#choices").hide();
    
$("#start").on("click", function () {
    //hide start button
    $("#start").hide();
    

    setTimeout(startGame,1000);
    setTime();



//display for last screen to show final results  and button to restart game 
//at the final screen, show correct answer and incorrect answers
 //at the final screen: offer to restart with click of button in which game would start automatically again 



})});
