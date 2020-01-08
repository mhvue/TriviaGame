
//create array to hold questions and correct answers: 
var questions= [
    { question: "Who was Ross's second wife?",
      choices: ["Rachel", "Monica", "Carol", "Emily"],
      answer: "Emily",
      picture: "assets/images/Emily.png",
    },

    { question: "Monica asked Phoebe for a haircut. Who did Monica wanted it look like? ",
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

    { question: "Joey dated someone that Chandeler fell in love with. Who is she?",
      choices: ["Rachel", "Kathy", "Katie", "Kristen"],
      answer: "Kathy",
      picture: "assets/images/Kathy.jpg",
    },

    { question: "What is the name of the Department store Rachel worked for?",
      choices: ["Ralph Lauren", "Gucci", "Bloomingdales", "Macys"],
      answer: "Bloomingdales",
      picture: "assets/images/Bloomingdales.jpg",
    },

    { question: "Which Friend had an on and off addiction to smoking?",
      choices: ["Monica", "Ross", "Chandler", "Phoebe"],
      answer: "Chandler",
      picture: "assets/images/Chandler.smoking.jpg",
    },

    { question: "What did Monica make when she was trying to get over Richard?",
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
//console.log(questions[0].choices.length);



//create variable for score of correct answers and wrong answers to be displayed 

var userCorrect=0; 
var userIncorrect=0;
var unanswered=0
var userGuess;

//variable for timer 
var timer=11;
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
    intervalId= setInterval(runTimer, 1000);
   
}


    
//function to run the timer
function runTimer () {
    timer--;
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");

    //show seconds are ticking DOWN and once hit 0: 
    if(timer === -1) { // -1 so it shows 0
        //this is not working below:
      var timeDiv = $("<div>"); // create a new div to hold msg for times up
       timeDiv.addClass("time-container");
       $("#timer").append(timeDiv); //def need this!
       $(".time-container").html("<h1> "+ "Uh Oh.. Time ran out! </h1>");
   // alert("Time's Up!");
    clearTimer();
    nextQuestion();
    
    }

} 

//collect user's guess and check with answer in array
function userAnswers() {
$("span").unbind("click").on("click", function (){ //had to unbind b/c another click event was making answers increment per question
    userGuess=$(this).children().val();
    //console.log(userGuess);
    //console.log("clicked!");

    var triviaAnswer= questions[count].answer;
   // console.log(triviaAnswer); 
  

//if answered correctly,show a msg congratualing them,after a few secs, go on the next page automatically 
  if (userGuess === triviaAnswer) {
    $("span").children().hide();
    var correctDiv = $("<div>"); // create a new div to show correct answer to user
    correctDiv.addClass("msg-container");
    $("#messages").html(correctDiv); //def need this!
    $(".msg-container").html("<h1> " + userGuess + " is correct!</h1>" + "<img src=' " + questions[count].picture + "' width='300px'>");
    clearTimer();
    setTimeout(nextQuestion,2000);
   // $("span").hide();
    }

//if player taking too long to answer, show msg of Times up, 
//display correct answer
//go on the next page automaticall

  else{
      //console.log("wrong");
    //var wrongDiv = $("<div>"); //create new div to hold msg of incorrect to user
   // wrongDiv.addClass("wrongMsg-container");
   // $("#messages").append(wrongDiv); 
   // $(".wrongMsg-container").html("<h1><i> " + userGuess + " is incorrect!</i> Correct answer is: " + triviaAnswer + " </h1> <img src=' " + questions[count].picture + "' width='300px'>");
    //clearTimer();
   // setTimeout(nextQuestion,2000);
}
});
}
//userAnswers();

//function to go through each question 
function nextQuestion () {
    $(".msg-container").hide();//def need this to hide answer from previous question
    $(".wrongMsg-container").hide();
    $("#span").children().show();
    count++;
    timer=10;
    setTime(); //def need this here to questions to continue on to next 
    $("#timer").html("<h2> Time: " + timer + " seconds. </h2>");
    startGame(); //this needs to stay down here for to work 

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


//End screen:
//display for last screen to show final results  and button to restart game 
//at the final screen, show correct answer and incorrect answers
 //at the final screen: offer to restart with click of button in which game would start automatically again 



})});
