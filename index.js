whole();

function whole() {
var count=1;
var arr=document.getElementsByClassName('number');
var x = 0;
var nextToClick=1;

// Getting numbers from 1 to 20 at random positions
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
    colorChange();
}

// Adding event listener
function check(ar,a,b)
{
ar[a].addEventListener("click", function(){
    if(b <= ar.length && nextToClick <= 20)
    {
        if(ar[a].innerHTML==nextToClick)
        {
        ar[a].innerHTML=nextToClick+20;
        ar[a].style.background='#0000FF'
        nextToClick++;
        }
    }   
    else {
        if(ar[a].innerHTML==nextToClick)
        {
        ar[a].innerHTML=" ";
        ar[a].style.background='#FFFFFF'
        if(nextToClick==40)
        {
            stop();
            
        }
        nextToClick++;
        }
    }
});
}

// Loop to check for the order of click
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

function colorChange() {
    if(arr[i].innerHTML<=5)
    {
        arr[i].style.background='#B0E0E6'
    }
    else if(arr[i].innerHTML<=10)
    {
        arr[i].style.background='#87CEFA'
    }
    else if(arr[i].innerHTML<=15)
    {
        arr[i].style.background='#00BFFF'
    }
    else if(arr[i].innerHTML<=20)
    {
        arr[i].style.background='#1E90FF'
    }
    else
    {
        arr[i].style.background='#0000FF'
    }
}
}