//create array to hold questions, options, and answers: 
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


//checking nested objects in array  
//var count =0;
//console.log(questions[0].question);
//console.log(questions[0].answer);
//console.log(questions[0].choices)
//console.log(questions.length);



//variable for correct, incorrect, unaswered, and user's guess 
var userCorrect=0; 
var userIncorrect=0;
var unAnswered=0
var userGuess;

//variable for timer 
var timer=31;
var intervalId; 
var timerOn=false;
var count=0;


//Functions: 

//function to start game
function startGame() {
  timerOn=true;
  
  $("#question").html("<h1>" + questions[count].question + " </h1>").show();

  for (var i = 0; i < questions[count].choices.length; i++) {
    $("#choice" + i).html("<input type='submit' value='" + questions[count].choices[i] + "'> ");
  };

  userAnswers();
  $("#choices-container, #timer").show();
};

//this function lets the time actually go down per sec 
function setTime () { 
    intervalId= setInterval(runTimer, 1000);
};

//function to run the timer
function runTimer () {
    timer--;
    $("#timer").html("<h1 class='timeHeader'> Time: " + timer + " seconds. </h1>");
    
//need this IF here b/c need to know what to do when timer = 0
    if(timer === -1) { 
      unAnswered++;
      $("#question, #choices-container").hide();
      $("span").children().hide();
      
      var timeDiv = $("<div>"); // create a new div to hold msg for when times =0
      timeDiv.addClass("time-container");
      $("#timer").html(timeDiv); 
      $(".time-container").html("<h1 id='timeUpHeader'>  Uh Oh..Time ran out! <br></h1>" + "<h1 id= 'timeUpAnswerText'>Answer is: " + questions[count].answer + "</h1>"+ "<img id='timeUpImg' src=' " + questions[count].picture + "' width='300px' > ");
      clearTimer();
      setTimeout(nextQuestion,4000);
    }
};

//collect user's guess and compared to answer 
function userAnswers() {
  $("span").unbind("click").on("click", function (){ //had to unbind click event was making answers increment per question
    userGuess=$(this).children().val();
    //console.log(userGuess);
    //console.log("clicked!");

    var triviaAnswer= questions[count].answer;
   // console.log(triviaAnswer); 

//if answered correctly,show a msg of correct, after a few secs, go on the next page automatically 
  if (userGuess === triviaAnswer) {
    userCorrect++;
    $("span").children().hide();
    $("#question, #choices-container, #timer").hide();
    var correctDiv = $("<div>"); // create a new div to show correct answer to user
    correctDiv.addClass("msg-container");
    $("#messages").html(correctDiv);
    $(".msg-container").html("<h1 class ='answerHeader'> " + userGuess + " is correct!</h1>" + "<img class='answerImg' src=' " + questions[count].picture + "'>");
    clearTimer();
    setTimeout(nextQuestion,4000);
    }
  
//if answered incorrectly, showed msg of incorrect and include answer the go on next question
  else{
    userIncorrect++;
    $("span").children().hide();
    $("#question, #choices-container, #timer").hide();
    var wrongDiv = $("<div>"); //create new div to hold msg of incorrect to user
    wrongDiv.addClass("wrongMsg-container");
    $("#messages").html(wrongDiv); 
    $(".wrongMsg-container").html("<h1 class='answerHeader'><i> " + userGuess + " is incorrect!</i> Correct answer is: " + triviaAnswer + " </h1> <img class='answerImg' src=' " + questions[count].picture + "'>");
    clearTimer(); 
    setTimeout(nextQuestion,4000);
  }
  //console.log(userCorrect);
  //console.log(userIncorrect);
});
}


//function to go through each question 
function nextQuestion () {
    $(".msg-container, .wrongMsg-container").hide();
    $("#span").children().show();
    $("#question, #timer").show();
    count++;
    timer=30;

    if (count === questions.length) {
      clearTimer();
      endScreen();
      restart();
    }
    else{
      setTime(); //def need this here for questions to continue on to next 
      $("#timer").html("<h1 class='timeHeader'> Time: " + timer + " seconds. </h2>");
      startGame(); //this needs to stay down (last) for it to work 
    };
};


//function to clear the timer 
function clearTimer () {
    clearInterval(intervalId);
};

//function restart game 
function restart () {
  timerOn=false;
  $("#startButton").show();
  $("#startButton").on("click", function () {
    $("#scoreboard").hide();
    $("#startButton").hide();
    timer=30;
    setTime();
    $("#timer").html("<h1 class='timeHeader'> Time: " + timer + " seconds. </h2>");
    //$("#friendsThemeSong")[0].currentTime=0; //obtained from Medium.com about adding audio but not working 
    $("#friendsThemeSong")[0].play(); 

    count=0;
    startGame(); 
  });
  userCorrect = 0;
  userIncorrect = 0;
  unAnswered = 0;
};

function endScreen () {
  timerOn=false;
  $("#choices-container, #question, #timer").hide();
  $("#scoreboard").html("<h1 id='endText'> <u>Results: </u> <br><br> Correct: " + userCorrect + "<br>" + "Incorrect: " + userIncorrect + "<br>"+ "Unanswered: " + unAnswered + "<br> Press Start to play again! </h1>").show();
  $("#friendsThemeSong")[0].pause();
};


//click button to start the game 

$(document).ready(function () {
  $("#choices-container, #question, #timer").hide();
  
    
$("#startButton").one("click", function () {// .one for so click is not "adding" on to each other (per advice from friend)
  //console.log("click");
  //hide start button
  $("#startButton").hide();
  $("#friendsThemeSong")[0].play();
  $("#yellowFrame").fadeOut("slow");
  setTimeout(startGame, 1000);
  setTime();

});

});
