// What we want to happen
// 1. User clicks start  button
// 2.5 min timer starts first question displays
// 3.user selects answer to first question  if user get 
// question right then they will be told they were right and will keep  5 min on timer or add 30 secs
// 4.If they are wrong they will be told they were wrong and will lose 30 seconds
// 5.once timer reaches 0 they will be done  and  they will have an opportunity to 
// add their name to the leaderboard or  retry 

// variables



// Document Query Selectors

startButton = document.querySelector("#start-button");
startButtonDiv = document.querySelector("#hide-start")
// Start quiz with button click
 startButton.addEventListener("click", function(){

    

    startQuiz()

    function startQuiz(){
       var quizForm = document.getElementById("display-quiz")
       var displaySetting = quizForm.style.display
   
       if(displaySetting == "block") {
           quizForm.style.display = "none"  
       }
       else{
           quizForm.style.display = "block"; 
           
           startButtonDiv.style.display ="none"
       }
       }

    //    takeQuiz()

    //    function takeQuiz (){
    //        var quizQuestions =[

    //         {
    //         question: "Which type of JavaScript language is ___",
    //         choices:["Object-Oriented","Object-Based","Assembly-language","High-level"],
    //         answer: "Object-Oriented"
    //         },

    //         {
    //         question:"Which one of the following also known as Conditional Expression:",
    //         choices:["Alternative to if-else", "Switch statement", ],
    //         answer:
    //         },

    //         {
    //         question:,
    //         choices:,
    //         answer:
    //         },

    //         {
    //         question:,
    //         choices:,
    //         answer:
    //         },

    //         {
    //         question:,
    //         choices:,
    //         answer:
    //         },
           
           
    //         ];

    //    }
 });

    
 