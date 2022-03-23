 const quizQuestions =[
            
            {
                question: "Which type of language is JavaScript ___",
                choices:["Object-Oriented","Object-Based","Assembly-language","High-level"],
                answer: "Object-Oriented"
            },
        
            {
                question:"Who is the creater of Javascript?",
                choices:["Brendan Eich" , " Bill Gates", "Hakon Wium Lie " ,"Jack Ma"],
                answer: ["Brendam Eich"]
            },
            
            {
                question:"What is Javascript used for?",
                choices: ["To structure a website", "To style a website", "To make a website interactive", "Neither"],
                answer:  "To make a website interactive"
            },
            
            {
                question: "What pair of symbols comes after the word 'function' in a javascript function",
                choices:["()", "{}","[]","//"],
                answer: "()"
            },
            
            {
                question:"What is the syntax for declaring a var",
                choices: [,"Var = ", " Let Var = ", "Variable = ","Both A and B"],
                answer: "Var = "
            },
            
            
        ];

var questionNumber =[quizQuestions[0], quizQuestions[1], quizQuestions[2], quizQuestions[3], quizQuestions[4]] ;


// questions variables
var question = document.getElementById("quiz-question")
//answer variables
var answer1 = document.querySelector("#answer-1")
var answer2 = document.querySelector("#answer-2")
var answer3 = document.querySelector("#answer-3")
var answer4 = document.querySelector("#answer-4")
// answer button events
// Document Query Selectors

startButton = document.querySelector("#start-button");
startButtonDiv = document.querySelector("#hide-start")

// Start quiz with button click
startButton.addEventListener("click", startQuiz(questionNumber,quizQuestions));



// start button funtionality
function startQuiz(quizQuestions, questionNumber){
    var quizForm = document.getElementById("display-quiz");
    var displaySetting = quizForm.style.display;
    
    
    if(displaySetting == "block") {
        quizForm.style.display = "none" ; 
    }
    else{
        takeQuiz(quizQuestions, questionNumber)
        quizForm.style.display = "block"; 
        
        startButtonDiv.style.display ="none";
        
    }
    // timer clock
    
    var clock = setInterval(function(){ myTimer() }, 1000);
    var timerAmount = 60;
    
    function myTimer() {
        if(timerAmount == 0)
        {
            myStopFunction();
        }
        
        document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(timerAmount,2);
        timerAmount = timerAmount  - 1;
        
    }
    
    function myStopFunction() {
        clearInterval(clock);
    }
    
    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    // quiz questions
    
    function takeQuiz (quizQuestions, questionNumber){
       
        
       
    //    console.log(answer1.textContent)
       //    for (let i = questionNumber; i< questionNumber.length; 1++){
           changeQuestion()
           function changeQuestion (){
               
           
        if(questionNumber >=questionNumber.length){

             clearInterval(clock);
       }
       else{

        for(let i= questionNumber[0]; i = questionNumber.length; i++){

           var currentQuestion = questionNumber[0]
        answer1.textContent = currentQuestion.choices[0];
        answer2.textContent = currentQuestion.choices[1];
        answer3.textContent = currentQuestion.choices[2];
        answer4.textContent = currentQuestion.choices[3];
        question.textContent = currentQuestion.question;

       }

    //    console.log(quizQuestions[2])
    //    }
    //    document.getElementById("quiz-question").innerHTML +=   answer1.textContent
    }
        // return
        // console.log(quizQuestions)
        // checkAnswers()
        // function checkAnswers(event) {
        //     if(event.target==true){

        //         console.log("alert")
        //         answer1.addEventListener("click", checkAnswers );
        //         answer2.addEventListener("click", checkAnswers);
        //         answer3.addEventListener("click", checkAnswers );
        //         answer4.addEventListener("click", checkAnswers );

                

        //             alert("it works")
                   
                

                   
                    
        //         }
                
                
        //     }
            
  
 
        
        
    
    }
}
}