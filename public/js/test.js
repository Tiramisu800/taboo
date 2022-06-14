// score variables
var tinkerBellScore = 0;
var vidiaScore = 0;
var rosettaScore = 0;
var fawnScore = 0;
var silvermistScore = 0;
var iredessaScore = 0;

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
q1a1.addEventListener('click', vidia);
q1a1.addEventListener('click', disableQ1);
q1a2.addEventListener('click', tinkerBell);
q1a2.addEventListener('click', disableQ1);
q1a3.addEventListener('click', fawn);
q1a3.addEventListener('click', disableQ1);
q1a4.addEventListener('click', rosetta);
q1a4.addEventListener('click', disableQ1);
q1a5.addEventListener('click', iredessa);
q1a5.addEventListener('click', disableQ1);
q1a6.addEventListener('click', tinkerBell);
q1a6.addEventListener('click', disableQ1);
q1a7.addEventListener('click', silvermist);
q1a7.addEventListener('click', disableQ1);

// click event listeners for question 2
q2a1.addEventListener('click', tinkerBell);
q2a1.addEventListener('click', disableQ2);
q2a2.addEventListener('click', tinkerBell);
q2a2.addEventListener('click', disableQ2);
q2a3.addEventListener('click', iredessa);
q2a3.addEventListener('click', disableQ2);
q2a4.addEventListener('click', silvermist);
q2a4.addEventListener('click', disableQ2);
q2a5.addEventListener('click', vidia);
q2a5.addEventListener('click', disableQ2);
q2a6.addEventListener('click', fawn);
q2a6.addEventListener('click', disableQ2);

// click event listeners for question 3
q3a1.addEventListener('click', fawn);
q3a1.addEventListener('click', disableQ3);
q3a2.addEventListener('click', vidia);
q3a2.addEventListener('click', disableQ3);
q3a3.addEventListener('click', iredessa);
q3a3.addEventListener('click', disableQ3);
q3a4.addEventListener('click', silvermist);
q3a4.addEventListener('click', disableQ3);
q3a5.addEventListener('click', tinkerBell);
q3a5.addEventListener('click', disableQ3);
q3a6.addEventListener('click', rosetta);
q3a6.addEventListener('click', disableQ3);

// click event listeners for question 4
q4a1.addEventListener('click', iredessa);
q4a1.addEventListener('click', disableQ4);
q4a2.addEventListener('click', silvermist);
q4a2.addEventListener('click', disableQ4);
q4a3.addEventListener('click', vidia);
q4a3.addEventListener('click', disableQ4);
q4a4.addEventListener('click', fawn);
q4a4.addEventListener('click', disableQ4);
q4a5.addEventListener('click', rosetta);
q4a5.addEventListener('click', disableQ4);
q4a6.addEventListener('click', tinkerBell);
q4a6.addEventListener('click', disableQ4);



restart.addEventListener('click', restartQuiz);

// score functions
function tinkerBell(){
    tinkerBellScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; tinkerBellScore = " + tinkerBellScore);

    doneAndResult();
}

function vidia(){
    vidiaScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; vidiaScore = " + vidiaScore);

    doneAndResult();
}

function rosetta(){
    rosettaScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; rosettaScore = " + rosettaScore);

    doneAndResult();
}

function fawn(){
    fawnScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; fawnScore = " + fawnScore);

    doneAndResult();
}

function silvermist(){
    silvermistScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; silvermistScore = " + silvermistScore);

    doneAndResult();
}

function iredessa(){
    iredessaScore += 1;
    questionsAnswered += 1;

    console.log("questionsAnswered = " + questionsAnswered + "; iredessaScore = " + iredessaScore);

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
        if (tinkerBellScore >= 2){
            result.innerHTML = '<a href = "/programmer">Programmer</a>';
        } else if (vidiaScore >= 2){
            result.innerHTML = '<a href = "/musician">Musician</a>';
        } else if (rosettaScore >= 2){
            result.innerHTML = '<a href = "/chief">Chief</a>';
        } else if (fawnScore >= 2){
            result.innerHTML = '<a href = "/astronaut">Astronaut</a>';
        } else if (iredessaScore >= 2){
            result.innerHTML = '<a href = "/chemist">Chemist</a>';
        } else if (silvermistScore >= 2){
            result.innerHTML = '<a href = "/interpreter">Interpreter</a>';
        }
    }
}

// restart function
function restartQuiz() {
    result.innerHTML = "...";
    questionsAnswered = 0;
    tinkerBellScore = 0;
    vidiaScore = 0;
    fawnScore = 0;
    rosettaScore = 0;
    silvermistScore = 0;
    iredessaScore = 0;

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
