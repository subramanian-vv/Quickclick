var status = 0;
var time = 0;
var bestScores=[];
var scores = document.querySelectorAll('.scores td');

// Starting the timer
function start() {
status = 1;
document.getElementById('b').disabled = true;
document.getElementById('main').style.visibility = "visible";
document.getElementById('b').style.visibility = "hidden";
timer();
//populationStorage();
}

// Stopping the timer
function stop() {
status = 0;
--time;
document.getElementById('b').disabled = false;
// Comparing the time with the best time
var comp = (document.getElementById('change').innerHTML).localeCompare(document.getElementById('change1').innerHTML);
if(document.getElementById('change1').innerHTML == " 0:00:00 ")
{
document.getElementById('change1').innerHTML = document.getElementById('change').innerHTML;
}
else if(comp == -1)
{
    document.getElementById('change1').innerHTML = document.getElementById('change').innerHTML;
}
document.getElementById('restart').style.visibility = "visible";
document.getElementById('main').style.visibility = "hidden";
// populationStorage();
}

// Restarting the game
function restart () {
    status = 1;
    time = 0;
    document.getElementById('restart').style.visibility = "hidden";
    document.getElementById('main').style.visibility = "visible";
    //populationStorage();
// Main working code
    whole();
    timer();
}

// Setting the timer
function timer() {
    if(status==1)
    {
        setTimeout(function() {
            time++;
            var min = Math.floor(time/100/60);
            var sec = Math.floor(time/100);
            var mSec = time % 100;

            if(sec>=60)
            {
                sec = sec % 60;
            }
            if(sec < 10)
            {
                sec = "0" + sec;
            }
            if(mSec < 10)
            {
                mSec = "0" + mSec;
            }
            
            document.getElementById('change').innerHTML = min + ":" + sec + ":" + mSec;
            timer();
        }, 10);
    }

}

function populationStorage() {
//localStorage.setItem("highScore",document.getElementById('change1').innerHTML);
//document.getElementById('change1').innerHTML = localStorage.getItem("highScore");
if(bestScores.length<=4)
{
    bestScores.push(document.getElementById('change').innerHTML);
    bestScores.sort();
}
localStorage.setItem("highScores", JSON.stringify(bestScores));
var best = JSON.parse(localStorage.getItem("highScores"));

var scoreCount=0;
best.forEach(function() {
    scores[scoreCount].innerHTML=best[scoreCount];
    scoreCount++;
});
}