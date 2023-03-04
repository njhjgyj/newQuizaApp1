"use strict";


var quizObject = [

    {

        Questions1: " Q: What is the value of result? ",
        Questions2: " const array = [1, 2, 3]; ",
        Questions3: " const result = array[3]; ",
        Answers1: " a)    undefined  ",
        Answers2: " &#10003 ",    // correct
        Answers3: " &#10007 ",    // wrong
        Options: [
            " a) &nbsp;&nbsp; undefined  ",
            " b) &nbsp;&nbsp; null  ",
            " c) &nbsp;&nbsp; 3  ",
            " d) &nbsp;&nbsp; throw a SyntaxError  "
        ]

    },

    {

        Questions1: " Q: What is the value of result? ",
        Questions2: " const obj = Object.assign({name: 'JavaScript'}, {name: 'ECMAScript'}, {name: 'LiveScript'}); ",
        Questions3: " const result = obj.name; ",
        Answers1: " c)    LiveScript  ",
        Answers2: " &#10003 ",    // correct
        Answers3: " &#10007 ",    // wrong
        Options: [
            " a) &nbsp;&nbsp; ECMAScript ",
            " b) &nbsp;&nbsp; javascript  ",
            " c) &nbsp;&nbsp; LiveScript  ",
            " d) &nbsp;&nbsp; undefined  "
        ]
    },

    {

        Questions1: " Q: What is the value of result? ",
        Questions2: " const array = [1, 2, 3, 5]; ",
        Questions3: " const result = array.indexOf(3); ",
        Answers1: " d)    2  ",
        Answers2: " &#10003 ",    // correct
        Answers3: " &#10007 ",    // wrong
        Options: [
            " a) &nbsp;&nbsp; 3 ",
            " b) &nbsp;&nbsp; -1  ",
            " c) &nbsp;&nbsp; 5  ",
            " d) &nbsp;&nbsp; 2  "
        ]

    },

    {

        Questions1: " Q: Which of these is the same as ",
        Questions2: " result += value? ",
        Questions3: "  ",
        Answers1: " d)    result = result + value  ",
        Answers2: " &#10003 ",    // correct
        Answers3: " &#10007 ",    // wrong
        Options: [
            " a) &nbsp;&nbsp; result = value++  ",
            " b) &nbsp;&nbsp; result = value  ",
            " c) &nbsp;&nbsp; result = value + value  ",
            " d) &nbsp;&nbsp; result = result + value  "
        ]
    },

    {

        Questions1: ` Q: What is the value of result <br> const obj = {
            name: "Brendan"
        }; `,
        Questions2: " const s = JSON.parse(JSON.stringify(obj)); ",
        Questions3: " const result = s = = = obj; ",
        Answers1: " b)    false  ",
        Answers2: " &#10003 ",    // correct
        Answers3: " &#10007 ",    // wrong
        Options: [
            " a) &nbsp;&nbsp; true  ",
            " b) &nbsp;&nbsp; false  ",
            " c) &nbsp;&nbsp; throw a SyntaxError  ",
            " d) &nbsp;&nbsp; undefined  "
        ]

    },

];


var getInpId = document.getElementById("name-input-id");
var getBtnId = document.getElementById("start-quiz-button-id");
var getMainDivId1 = document.getElementById("first-main-div-id");
var getMainDivId2 = document.getElementById("second-main-div-fifth-div-id")
var getAnimationDiv = document.getElementById("animation-div");

var getH2QuestionId1 = document.getElementById("h2-question-id");

var getH4QuestionId2 = document.getElementById("h4-question-id1");

var getH4QuestionId3 = document.getElementById("h4-question-id2");

var getH4QuestionClass1 = document.getElementsByClassName("h4-questions-class");


var getOptionsClassForTimer = document.getElementsByClassName("div-class-for-options");

var getBoldTagClassForTimer = document.getElementsByClassName("bold-tag-for-check-class");

var getNxtBtnForTimer = document.getElementById("nxt-btn-id");

var getNxtBtnForNxtClick = document.getElementById("nxt-btn-id");

var getTimerId = document.getElementById("h3-timer-id2");

var time1;

var time2 = 20;

var count1 = 0;

var newTime1;

var newTime2 = 120;


function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


 getInpId.addEventListener("input", () => {

     if (getInpId.value.trim().length > 2) {
         getBtnId.disabled = false;
     } else {
         getBtnId.disabled = true;
     };

 });


// function inputFunc(input1) {

// if (input1.value.trim().length > 2) {
//         getBtnId.disabled = false;
//      } else {
//          getBtnId.disabled = true;
//      };

// };




var elem = document.documentElement;

 getBtnId.addEventListener("click", () => {

     getMainDivId1.style.display = "none";
    // getAnimationDiv.style.display = "block";
     getAnimAndRefDiv.style.display = "flex";

     alert("Note: Every time you reset your page then you need to wate upto 2 minutes ");

     setInterval(() => {

         timeForRef--;

         getrefDivId.innerHTML = timeForRef;

     }, 1000);

     setTimeout(() => {

         getAnimAndRefDiv.style.display = "none";
         getMainDivId2.style.display = "block";

         forTime();

         forSetTimeOutAndClearInterval();

    // }, 12100);
     }, 120000);


    // Used like so
     shuffle(quizObject);


     forQuestionsAndAnswers();


     sessionStorage.setItem(" User Name ", getInpId.value.trim());
     console.log(sessionStorage.getItem(" User Name "));

     if (elem.requestFullscreen) {

         elem.requestFullscreen();

     } else if (elem.webkitRequestFullscreen) { /* Safari */

         elem.webkitRequestFullscreen();

     } else if (elem.msRequestFullscreen) { /* IE11 */

         elem.msRequestFullscreen();

     };

 });




// function btnForStartQuiz() {

// getMainDivId1.style.display = "none";
    // getAnimationDiv.style.display = "block";
//      getAnimAndRefDiv.style.display = "flex";

//      alert("Note: Every time you reset your page then you need to wate upto 2 minutes ");

//      setInterval(() => {

//          timeForRef--;

//          getrefDivId.innerHTML = timeForRef;

     }, 1000);
// 
//      setTimeout(() => {

//          getAnimAndRefDiv.style.display = "none";
//          getMainDivId2.style.display = "block";

//          forTime();

//          forSetTimeOutAndClearInterval();

    // }, 12100);
//      }, 120000);


    // Used like so
//      shuffle(quizObject);


//      forQuestionsAndAnswers();


//      sessionStorage.setItem(" User Name ", getInpId.value.trim());
//      console.log(sessionStorage.getItem(" User Name "));

//      if (elem.requestFullscreen) {

//          elem.requestFullscreen();

//      } else if (elem.webkitRequestFullscreen) { /* Safari */

//          elem.webkitRequestFullscreen();

//      } else if (elem.msRequestFullscreen) { /* IE11 */

//          elem.msRequestFullscreen();

//      };

//  });

// };





var getAnimAndRefDiv = document.getElementById("div-for-animation-and-refresh-id");

var getrefDivId = document.getElementById("refresh-div-id");

var timeForRef = 120;

function forRefresh() {

    // if (window.performance.navigation.type == 1 && sessionStorage.key(1) && count1 == 0) {

    //     console.log("The page is reload");
    
    //     getMainDivId1.style.display = "none";
    //     getAnimationDiv.style.display = "block";
    
    //     setTimeoutForIfUserResfreshPage = setTimeout(() => {
    
    //         getAnimationDiv.style.display = "none";
    //         getMainDivId2.style.display = "block";
    
    //         alert(" Welcome back " + sessionStorage.getItem(" User Name "));
    
    //         shuffle(quizObject);
    
    //         forTime();
    
    //         forSetTimeOutAndClearInterval();
    
    //         forQuestionsAndAnswers();
    
    //     }, 12100);
    
    
    //     window.onbeforeunload = function () {
    
    //         return "Are you sure you want reload that page";
    
    //     };
    
    // }





    if (window.performance.navigation.type == 1 && sessionStorage.key(1) && count1 == 0) {

        console.log("The page is reload");
    
        getMainDivId1.style.display = "none";
        // getAnimationDiv.style.display = "block";
        getAnimAndRefDiv.style.display = "flex";

        setInterval(() => {
            
            timeForRef--;

            getrefDivId.innerHTML = timeForRef;

        }, 1000);
    
        setTimeoutForIfUserResfreshPage = setTimeout(() => {
    
            getAnimAndRefDiv.style.display = "none";
            getMainDivId2.style.display = "block";
    
            alert(" Welcome back " + sessionStorage.getItem(" User Name "));
    
            shuffle(quizObject);
    
            forTime();
    
            forSetTimeOutAndClearInterval();
    
            forQuestionsAndAnswers();

        // }, 12100);
        }, 120000);
    
    
        window.onbeforeunload = function () {
    
            return "Are you sure you want reload that page";
    
        };
    
    }

};




var getResultDivForIfUserMinimizeScreen = document.getElementById("third-main-div-eighth-div");

var setTimeoutForIfUserResfreshPage;

console.log(window.performance.navigation);    //PerformanceNavigation {type: 1, redirectCount: 0}

forRefresh();


function forTime() {

    time1 = setInterval(() => {

        time2--

        getTimerId.innerHTML = time2;
    }, 1000)

};


var setTimeOut1;

function forSetTimeOutAndClearInterval() {

    setTimeOut1 = setTimeout(() => {

        clearInterval(time1);

        alert(" You did not select any options correct answer is \n\n " + quizObject[count1].Answers1);

        for (let i = 0; i < getOptionsClassForTimer.length; i++) {

            getOptionsClassForTimer[i].classList.add("removeEvent");

        };

        getNxtBtnForTimer.style.display = "block";

    }, 20000);

};

var getBoldTagClassForOptions = document.getElementsByClassName("bold-tag-for-option-class");


function forQuestionsAndAnswers() {

    getH2QuestionId1.innerHTML = quizObject[count1].Questions1;
    getH4QuestionId2.innerHTML = quizObject[count1].Questions2;
    getH4QuestionId3.innerHTML = quizObject[count1].Questions3;

    for (let i = 0; i < getBoldTagClassForOptions.length; i++) {

        getBoldTagClassForOptions[i].innerHTML = quizObject[count1].Options[i];
        getBoldTagClassForOptions[i].innerHTML = quizObject[count1].Options[i];
        getBoldTagClassForOptions[i].innerHTML = quizObject[count1].Options[i];
        getBoldTagClassForOptions[i].innerHTML = quizObject[count1].Options[i];

    };

};



var setTimeOut2;
var setTimeOut3;
var setTimeOut4;
var setTimeOut5;

var score = 0;

var getResultDiv = document.getElementById("third-main-div-eighth-div");
var getH4TagForResult = document.getElementById("h4-id1-for-result");
var getH2TagForResult = document.getElementById("h2-id1-for-result");

var getH3TimerIdForAnimation = document.getElementById("h3-timer-id1");

var getResetBtn = document.getElementById("btn-id1-for-reload");


function forNxtClick() {
    getNxtBtnForNxtClick.addEventListener("click", () => {

        count1++;


        console.log(" This is count1 " + count1);

        getH3TimerIdForAnimation.style.animationDuration = "5s";
        getH3TimerIdForAnimation.style.animationIterationCount = "infinite";

        if (count1 < quizObject.length) {

            forQuestionsAndAnswers();

        } else {

            getResultDiv.style.display = "flex";

            getMainDivId2.style.display = "none";

            // getResetBtn.disabled = true;

            getH4TagForResult.innerHTML = " You complete that quiz and you score " + score + " out of " + quizObject.length + " ";

            if (score < 3) {

                getH2TagForResult.innerHTML = " You failed ";

            }

            else if (score == 5) {

                getH2TagForResult.innerHTML = " Congratulations ";

            };

            localStorage.setItem(" Score ", score);

            console.log("This is localstorage score", localStorage.getItem(" Score "));

        };


        time2 = 20;

        forQuestionsAndAnswers();

        getNxtBtn.style.display = "none";

        for (let k = 0; k < getOptionsClass.length; k++) {

            getOptionsClass[k].classList.remove("removeEvent");

        };


        setTimeout(() => {

            clearTimeout(setTimeOut1);

        }, 2000);


        if (elem.requestFullscreen) {

            elem.requestFullscreen();

        } else if (elem.webkitRequestFullscreen) { /* Safari */

            elem.webkitRequestFullscreen();

        } else if (elem.msRequestFullscreen) { /* IE11 */

            elem.msRequestFullscreen();

        }


        if (count1 == 1) {

            forTime();

            setTimeOut2 = setTimeout(() => {

                clearInterval(time1);

                alert(" You did not select any options correct answer is \n\n " + quizObject[count1].Answers1);

                for (let i = 0; i < getOptionsClassForTimer.length; i++) {

                    getOptionsClassForTimer[i].classList.add("removeEvent");

                };

                getNxtBtnForTimer.style.display = "block";

            }, 20000);


        } else if (count1 == 2) {

            forTime();

            setTimeOut3 = setTimeout(() => {

                clearInterval(time1);

                alert(" You did not select any options correct answer is \n\n " + quizObject[count1].Answers1);

                for (let i = 0; i < getOptionsClassForTimer.length; i++) {

                    getOptionsClassForTimer[i].classList.add("removeEvent");

                };

                getNxtBtnForTimer.style.display = "block";

                setTimeout(() => {

                    clearTimeout(setTimeOut2);

                }, 2000);

            }, 20000);

        } else if (count1 == 3) {

            forTime();

            setTimeOut4 = setTimeout(() => {

                clearInterval(time1);

                alert(" You did not select any options correct answer is \n\n " + quizObject[count1].Answers1);

                for (let i = 0; i < getOptionsClassForTimer.length; i++) {

                    getOptionsClassForTimer[i].classList.add("removeEvent");

                };

                getNxtBtnForTimer.style.display = "block";

                setTimeout(() => {

                    clearTimeout(setTimeOut3);

                }, 2000);

            }, 20000);

        } else if (count1 == 4) {

            forTime();

            setTimeOut5 = setTimeout(() => {

                clearInterval(time1);

                alert(" You did not select any options correct answer is \n\n " + quizObject[count1].Answers1);

                for (let i = 0; i < getOptionsClassForTimer.length; i++) {

                    getOptionsClassForTimer[i].classList.add("removeEvent");

                };

                getNxtBtnForTimer.style.display = "block";

                setTimeout(() => {

                    clearTimeout(setTimeOut4);

                }, 2000);


                setTimeout(() => {

                    clearTimeout(setTimeOut5);

                }, 20000);

            }, 20000);



        };

        for (let i = 0; i < getOptionsClass.length; i++) {

            // getOptionsClass[i].style.backgroundColor = "rgb(102, 153, 153)";

            getOptionsClass[i].lastChild.previousSibling.style.visibility = "hidden";
            getOptionsClass[i].style.backgroundColor = "inherit";

        };



    });

};

forNxtClick();


var getOptionsClass = document.getElementsByClassName("div-class-for-options");

var getBoldTagClass = document.getElementsByClassName("bold-tag-for-check-class");

var getNxtBtn = document.getElementById("nxt-btn-id");

function optionsFunction(optionsSelect) {

    // console.log(" this is optionsFunction " + optionsSelect.lastChild.nextSibling.textContent);
    console.log(" this is optionsFunction " + optionsSelect.lastChild.previousSibling.textContent);

    for (let i = 0; i < getOptionsClass.length; i++) {

        getOptionsClass[i].classList.add("removeEvent");

        // console.log(getOptionsClass[i].firstChild.nextSibling.textContent);
        // console.log(getOptionsClass[i].lastChild.previousSibling.textContent);

    };

    getH3TimerIdForAnimation.style.animationDuration = "0.2s";
    getH3TimerIdForAnimation.style.animationIterationCount = "0.2s";

    getNxtBtn.style.display = "block";

    clearInterval(time1);

    clearTimeout(setTimeOut1);
    clearTimeout(setTimeOut2);
    clearTimeout(setTimeOut3);
    clearTimeout(setTimeOut4);
    clearTimeout(setTimeOut5);

    if (optionsSelect.firstChild.nextSibling.textContent == quizObject[count1].Answers1) {

        score++;

        console.log(" This is score " + score);

    } else {
        console.log(" This is score " + score);
    };

    optionsSelect.lastChild.previousSibling.style.visibility = "visible";

    optionsSelect.lastChild.previousSibling.style.backgroundColor = "rgba(255, 0, 0, 0.934)";

    optionsSelect.lastChild.previousSibling.innerHTML = quizObject[count1].Answers3;

    optionsSelect.style.backgroundColor = "rgba(156, 156, 156, 0.685";

};


function foo3() {

    for (let i = 0; i < getBoldTagClassForOptions.length; i++) {

        if (getBoldTagClassForOptions[i].textContent == quizObject[count1].Answers1) {

            getOptionsClass[i].style.backgroundColor = "green";

            getBoldTagClass[i].style.visibility = "visible";

            getBoldTagClass[i].innerHTML = quizObject[count1].Answers2;

            getBoldTagClass[i].style.backgroundColor = "rgba(0, 128, 0, 0.934)";

            getOptionsClass[i].style.backgroundColor = "rgba(156, 156, 156, 0.685";


        };

    };


};

for (var k = 0; k < getOptionsClass.length; k++) {

    getOptionsClass[k].addEventListener("click", foo3);

};


function foo5() {

    alert(" Hey " + sessionStorage.getItem(" User Name ") + " Wait up to 2 Minutes ");

    location.reload();

};
