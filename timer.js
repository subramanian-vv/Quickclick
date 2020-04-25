var status = 0;
var time = 0;

// Starting the timer
function start() {
status = 1;
document.getElementById('b').disabled = true;
document.getElementById('main').style.visibility = "visible";
document.getElementById('b').style.visibility = "hidden";
timer();
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
}

// Restarting the game
function restart () {
    status = 1;
    time = 0;
    document.getElementById('restart').style.visibility = "hidden";
    document.getElementById('main').style.visibility = "visible";

// Main working code
var count=1;
var arr=document.getElementsByClassName('number');
var x = 0;
var nextToClick=1;

var numberArray = [];
while(numberArray.length<20) {
var randomNumber = Math.ceil(Math.random()*20);
if(numberArray.length == 0) {
    numberArray.push(randomNumber);
}
else if(numberArray.indexOf(randomNumber) == -1) {
    numberArray.push(randomNumber);
}
}
for(var i=0;i<numberArray.length;i++)
{
    arr[i].innerHTML = numberArray[i];
}

function check(ar,a,b)
{
ar[a].addEventListener("click", function(){
    if(b <= ar.length && nextToClick <= 20)
    {
        if(ar[a].innerHTML==nextToClick)
        {
        ar[a].innerHTML=nextToClick+20;
        nextToClick++;
        }
    }   
    else {
        if(ar[a].innerHTML==nextToClick)
        {
        ar[a].innerHTML=" ";
        if(nextToClick==40)
        {
            stop();   
        }
        nextToClick++;
        }
    }
});
}

while(x<arr.length) 
{
    if(arr[x].innerHTML==count)
    {
      check(arr,x,count);
    count++;
    x=0;
    }
    else
    x++;
}
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