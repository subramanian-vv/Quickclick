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
    console.log(b);
    if(b <= ar.length && nextToClick <= 20)
    {
        if(ar[a].innerHTML==nextToClick)
        {
        console.log(nextToClick);
        ar[a].innerHTML=nextToClick+20;
        nextToClick++;
        }
    }   
    else {
        if(ar[a].innerHTML==nextToClick)
        {
        console.log(ar[a].innerHTML);
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
    //arr[x].innerHTML = Math.ceil(Math.random()*20);
    //arr.sort(function() { return (Math.ceil(Math.random())-0.5); });
    if(arr[x].innerHTML==count)
    {
      check(arr,x,count);
    console.log(count);
    count++;
    x=0;
    }
    else
    x++;
}





