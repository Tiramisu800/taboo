// score variables
var programmerScore = 0;
var musicianScore = 0;
var chiefScore = 0;
var astronautScore = 0;
var interpreterScore = 0;
var doctorScore = 0;

var questionsAnswered = 0;

// variables for question 1 elements
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");
var q1a7 = document.getElementById("q1a7");

// variables for question 2 elements
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

// variables for question 3 elements
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

// variables for question 4 elements
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var q4a6 = document.getElementById("q4a6");


// variables for the end of the quiz
var result = document.getElementById("result");
var restart = document.getElementById("restart");

// click event listeners for question 1
q1a1.addEventListener('click', musician);
q1a1.addEventListener('click', disableQ1);
q1a2.addEventListener('click', programmer);
q1a2.addEventListener('click', disableQ1);
q1a3.addEventListener('click', astronaut);
q1a3.addEventListener('click', disableQ1);
q1a4.addEventListener('click', chief);
q1a4.addEventListener('click', disableQ1);
q1a5.addEventListener('click', doctor);
q1a5.addEventListener('click', disableQ1);
q1a6.addEventListener('click', programmer);
q1a6.addEventListener('click', disableQ1);
q1a7.addEventListener('click', interpreter);
q1a7.addEventListener('click', disableQ1);

// click event listeners for question 2
q2a1.addEventListener('click', doctor);
q2a1.addEventListener('click', disableQ2);
q2a2.addEventListener('click', programmer);
q2a2.addEventListener('click', disableQ2);
q2a3.addEventListener('click', programmer);
q2a3.addEventListener('click', disableQ2);
q2a4.addEventListener('click', astronaut);
q2a4.addEventListener('click', disableQ2);
q2a5.addEventListener('click', interpreter);
q2a5.addEventListener('click', disableQ2);
q2a6.addEventListener('click', musician);
q2a6.addEventListener('click', disableQ2);

// click event listeners for question 3
q3a1.addEventListener('click', doctor);
q3a1.addEventListener('click', disableQ3);
q3a2.addEventListener('click', musician);
q3a2.addEventListener('click', disableQ3);
q3a3.addEventListener('click', programmer);
q3a3.addEventListener('click', disableQ3);
q3a4.addEventListener('click', interpreter);
q3a4.addEventListener('click', disableQ3);
q3a5.addEventListener('click', programmer);
q3a5.addEventListener('click', disableQ3);
q3a6.addEventListener('click', chief);
q3a6.addEventListener('click', disableQ3);

// click event listeners for question 4
q4a1.addEventListener('click', doctor);
q4a1.addEventListener('click', disableQ4);
q4a2.addEventListener('click', interpreter);
q4a2.addEventListener('click', disableQ4);
q4a3.addEventListener('click', musician);
q4a3.addEventListener('click', disableQ4);
q4a4.addEventListener('click', astronaut);
q4a4.addEventListener('click', disableQ4);
q4a5.addEventListener('click', chief);
q4a5.addEventListener('click', disableQ4);
q4a6.addEventListener('click', programmer);
q4a6.addEventListener('click', disableQ4);



restart.addEventListener('click', restartQuiz);

// score functions
function programmer(){
    programmerScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; programmerScore = " + programmerScore);

    doneAndResult();
}

function musician(){
    musicianScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; musicianScore = " + musicianScore);

    doneAndResult();
}

function chief(){
    chiefScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; chiefScore = " + chiefScore);

    doneAndResult();
}

function astronaut(){
    astronautScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; astronautScore = " + astronautScore);

    doneAndResult();
}

function interpreter(){
    interpreterScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; interpreterScore = " + interpreterScore);

    doneAndResult();
}

function doctor(){
    doctorScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; doctorScore = " + doctorScore);

    doneAndResult();
}

// disable answers functions
function disableQ1(){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q1a3.disabled = true;
    q1a4.disabled = true;
    q1a5.disabled = true;
    q1a6.disabled = true;
    q1a7.disabled = true;
}

function disableQ2(){
    q2a1.disabled = true;
    q2a2.disabled = true;
    q2a3.disabled = true;
    q2a4.disabled = true;
    q2a5.disabled = true;
    q2a6.disabled = true;
}

function disableQ3(){
    q3a1.disabled = true;
    q3a2.disabled = true;
    q3a3.disabled = true;
    q3a4.disabled = true;
    q3a5.disabled = true;
    q3a6.disabled = true;
}

function disableQ4(){
    q4a1.disabled = true;
    q4a2.disabled = true;
    q4a3.disabled = true;
    q4a4.disabled = true;
    q4a5.disabled = true;
    q4a6.disabled = true;
}



// finishing function
function doneAndResult(){
    if (questionsAnswered == 4){
        console.log("The quiz is done!");
        if (programmerScore >= 2){
            result.innerHTML = '<a href = "/programmer">Programmer</a>';
        } else if (musicianScore >= 2){
            result.innerHTML = '<a href = "/musician">Musician</a>';
        } else if (chiefScore >= 2){
            result.innerHTML = '<a href = "/chief">Chief</a>';
        } else if (astronautScore >= 2){
            result.innerHTML = '<a href = "/astronaut">Astronaut</a>';
        } else if (doctorScore >= 2){
            result.innerHTML = '<a href = "/chemist">Doctor</a>';
        } else if (interpreterScore >= 2){
            result.innerHTML = '<a href = "/interpreter">Interpreter</a>';
        }
    }
}

// restart function
function restartQuiz() {
    result.innerHTML = "...";
    questionsAnswered = 0;
    programmerScore = 0;
    musicianScore = 0;
    astronautScore = 0;
    chiefScore = 0;
    interpreterScore = 0;
    doctorScore = 0;

    q1a1.disabled = false;
    q1a2.disabled = false;
    q1a3.disabled = false;
    q1a4.disabled = false;
    q1a5.disabled = false;
    q1a6.disabled = false;
    q1a7.disabled = false;

    q2a1.disabled = false;
    q2a2.disabled = false;
    q2a3.disabled = false;
    q2a4.disabled = false;
    q2a5.disabled = false;
    q2a6.disabled = false;

    q3a1.disabled = false;
    q3a2.disabled = false;
    q3a3.disabled = false;
    q3a4.disabled = false;
    q3a5.disabled = false;
    q3a6.disabled = false;

    q4a1.disabled = false;
    q4a2.disabled = false;
    q4a3.disabled = false;
    q4a4.disabled = false;
    q4a5.disabled = false;
    q4a6.disabled = false;
}
