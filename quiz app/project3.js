console.log("hello");

const quizData= [
    {
        question: "My date of birth?",
        a: "21-sep-2003",
        b: "10-dec-2002",
        c: "5-feb-2003",
        d: "18-may-2004",
        correct: "a"
    },
    {
        question: "What is my favourite programing language?",
        a: "JAVA",
        b: "PYTHON",
        c: "JAVASCRIPT",
        d: "KOTLIN",
        correct: "b"
    },
    {
        question: "What i wanna become in future?",
        a: "Full-stack developer",
        b: "Data scientist engineer",
        c: "Devops engineer",
        d: "Andriod developer",
        correct: "c",
    },
    {
        question: "Where i want to live in future?",
        a: "Australia",
        b: "USA",
        c: "England",
        d: "Dubai",
        correct: "c",
    },
];
let quiz = document.getElementById("quiz");
let questionElm = document.getElementById("question");
let AnswerElm = document.querySelectorAll(".answer");
let msg = document.getElementById("msg");

let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

// making function for deselecting answer
 const deselectanswer = function(){
     AnswerElm.forEach((answer) => (answer.checked = false));
 }

 const getselected = function(){
     let answer;
    AnswerElm.forEach(function(AnswerElm){
        if(AnswerElm.checked) answer = AnswerElm.id;
        });
        
    return answer;
    
};

    
 
const loadquiz = function (){
    deselectanswer();
    const currentquizdata = quizData[currentQuiz];
    questionElm.innerHTML = currentquizdata.question;
    a_text.innerHTML = currentquizdata.a;
    b_text.innerHTML = currentquizdata.b;
    c_text.innerHTML = currentquizdata.c;
    d_text.innerHTML = currentquizdata.d;
    
};
loadquiz();
btn.addEventListener("click", function(){
    const answer = getselected();
     if (answer === quizData[currentQuiz].correct){ 
        score++;
        
    }
    if (answer != quizData[currentQuiz].correct){
      console.log('Error', "your marks have deducted");
    }
    currentQuiz++;
    
    if(currentQuiz < quizData.length){
        loadquiz();
    }

    
    else{
        quiz.innerHTML = `
    <h2 style = "text-align: center;">You answer ${score}/${currentQuiz} question correctly</h2> 
    <button onclick="history.go(0)" id= "btn">Play Again</button>
    `
     
}


});