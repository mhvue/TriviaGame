
//create array to hold questions and correct answers: 
var questions= [
    { question: "Who was Ross's second wife?",
      choices: ["Rachel", "Monica", "Carol", "Emily"],
      answer: "Emily",
      picture: "assets/images/Emily.png",
    },

    { question: "Monica asked Phoebe for a haircut. Who did Monica wanted it look like?",
      choices: ["Rachel Green", "Dudley Moore", "Demi Moore", "Shirley Moore"],
      answer: "Demi Moore",
      picture: "assets/images/DemiMoore.jpg",
      
    },

    { question: "Everyone stayed at a beach house that belonged to one of Phoebe's massage clients. What was wrong with it?",
      choices: ["It was being torn down", "It did not exist", "Nothing", "It was filled with sand"],
      answer: "It was filled with sand",
      picture: "assets/images/BeachHouse.png",
    
    },

    { question: "Which character got hit by a tranquilizer dart?",
      choices: ["Rachel", "Monica", "Ross", "Phoebe"],
      answer: "Phoebe",
      picture: "assets/images/Phoebe.tranquilizer.jpg",
    },

    { question: "Joey dated someone that Chandeler fell in love with. Who was she?",
      choices: ["Rachel", "Kathy", "Katie", "Kristen"],
      answer: "Kathy",
      picture: "assets/images/Kathy.jpg",
    },

    { question: "What is the name of the Department store Rachel worked for?",
      choices: ["Ralph Lauren", "Gucci", "Bloomingdales", "Macys"],
      answer: "Bloomingdales",
      picture: "assets/images/Bloomingdales.jpg",
    },

    { question: "Which Friend character struggled with on and off addiction to smoking?",
      choices: ["Monica", "Ross", "Chandler", "Phoebe"],
      answer: "Chandler",
      picture: "assets/images/Chandler.smoking.jpg",
    },

    { question: "What did Monica make to get over Richard?",
      choices: ["Lasagna", "Jam", "Cookies", "Soup"],
      answer: "Jam",
      picture: "assets/images/Jam.jpg",
    },

];


//testing on checking nested objects in array  
//var count =0;
//console.log(questions[0].question);
//console.log(questions[0].answer);
//console.log(questions[0].choices)
console.log(questions.length);



//create variable for score of correct answers and wrong answers to be displayed 

var userCorrect=0; 
var userIncorrect=0;
var unAnswered=0
var userGuess;

//variable for timer 
var timer=6;
var intervalId; 
var timerOn=false;
var count=0;


//function to start game
function startGame() {
   
    $("#question").html("<h2>" + questions[count].question + " </h2>").show();
    for (var i = 0; i < questions[count].choices.length; i++) {
        $("#choice" + i).html("<input type='submit' value='" + questions[count].choices[i] + "'> ");
     };
  $("#choices-container").show();
   userAnswers();



};
//startGame(); testing out this function by calling it


//this function lets the time goes down
function setTime () { 
    intervalId= setInterval(runTimer, 1000);
};


    
//function to run the timer so it goes down (hence --)
function runTimer () {
    timer--;
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");
    
//need this IF here b/c need to know when timer = 0 on what to do..
//if player taking too long to answer, show msg of Times up, 
//display correct answer
//go on the next page automatically
    if(timer === -1) { 
      unAnswered++;
      $("#question").hide();
      $("span").children().hide();
  
      var timeDiv = $("<div>"); // create a new div to hold msg for times up
      timeDiv.addClass("time-container");
      $("#timer").html(timeDiv); //def need this!
      $(".time-container").html("<h1 class='textUpdates'>  Uh Oh..Time ran out! <br>" + "Answer is: " + questions[count].answer + "</h1>"+ "<img src=' " + questions[count].picture + "' width='300px' > ");
      clearTimer();
      setTimeout(nextQuestion,3000);
      
     
    }

    //console.log(unAnswered);
};


//collect user's guess 
function userAnswers() {
  $("span").unbind("click").on("click", function (){ //had to unbind b/c another click event was making answers increment per question
    userGuess=$(this).children().val();
    //console.log(userGuess);
    //console.log("clicked!");

    var triviaAnswer= questions[count].answer;
   // console.log(triviaAnswer); 

//if answered correctly,show a msg of correct, after a few secs, go on the next page automatically 
  if (userGuess === triviaAnswer) {
    userCorrect++;
    $("span").children().hide();
    var correctDiv = $("<div>"); // create a new div to show correct answer to user
    correctDiv.addClass("msg-container");
    $("#messages").html(correctDiv); //def need this!
    $(".msg-container").html("<h1 class ='answerHeader'> " + userGuess + " is correct!</h1>" + "<img src=' " + questions[count].picture + "' width='300px'>");
    clearTimer();
    setTimeout(nextQuestion,3000);
    }
  
//if answered incorrectly, showed msg of incorrect and include answer the go on next question
  else{
      //console.log("wrong");
    userIncorrect++;
    $("span").children().hide();
    var wrongDiv = $("<div>"); //create new div to hold msg of incorrect to user
    wrongDiv.addClass("wrongMsg-container");
    $("#messages").append(wrongDiv); 
    $(".wrongMsg-container").html("<h1 class='answerHeader'><i> " + userGuess + " is incorrect!</i> Correct answer is: " + triviaAnswer + " </h1> <img src=' " + questions[count].picture + "' width='300px'>");
    clearTimer();
    setTimeout(nextQuestion,3000);
  }

  //console.log(userCorrect);
  //console.log(userIncorrect);
});
}

//userAnswers(); testing out this function by calling it

//function to go through each question 
function nextQuestion () {
    $(".msg-container").hide();
    $(".wrongMsg-container").hide();
    $("#span").children().show();
    $("#question").show();
    count++;
    timer=5;

    if (count === questions.length) {
      console.log("End");
      clearTimer();
      endScreen();
      restart();
    }else{
      setTime(); //def need this here for questions to continue on to next 
      $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");
      startGame(); //this needs to stay down (last) for it to work 
    };
};


//function to clear the timer 
function clearTimer () {
    clearInterval(intervalId);
    //once answer is clicked (rather wrong or correct,we need to reset timer)
};

//function restart game 
function restart () {
  $("#choices-container").hide();
 $("#question").hide();
 $("#timer").hide();

  $("#start").show(); //show button again and if click on start game
  $("#start").on("click", function (){
    count=0;
    startGame();
    //hide start button
    $("#start").hide();
  
    timer=6;
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");
   
    
    
 
  });
}

function endScreen () {
  timerOn=true;
  $("#scoreboard").html("<h1> Correct: " + userCorrect + "<br>" + "Incorrect: " + userIncorrect + "<br>"+ "Unanswered: " + unAnswered + "<br> Want to play again? If Yes, press Start! </h1>"); 

}
//console.log(endScreen());
//End screen:

//at the final screen, show correct answer and incorrect answers
 //at the final screen: offer to restart with click of button in which game would start automatically again 




//below here is how the game works or action of the game:
//welcome page with on click button to start the game 


$(document).ready(function () {
  $("#choices-container, #question, #timer").hide();

    
$("#start").one("click", function () {
  console.log("click");
    //hide start button
    $("#start").hide();
   $("#yellowFrame").fadeOut("slow");
   $("#choices-container, #question, #timer").show();
    setTimeout(startGame,1000);
    setTime();
    
});



});
