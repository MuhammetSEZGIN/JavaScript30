
var minuteHand = document.querySelector('.minute');
var hourHand = document.querySelector('.hour');
var secondHand= document.querySelector('.second');

function setTime(){
    const currentDate = new Date(); 
    const seconds = currentDate.getSeconds();
    secondsDegree = ((seconds / 60) * 360)+90;
    secondHand.style.transform= 'rotate(' + secondsDegree + 'deg)';
    
    const minutes = currentDate.getMinutes();
    minutesDegree = ((minutes / 60) * 360)+90;
    minuteHand.style.transform= 'rotate(' + minutesDegree + 'deg)';

    const hours = currentDate.getHours();
    hoursDegree= ((hours / 12) * 360)+90;  
    hourHand.style.transform= 'rotate(' + hoursDegree + 'deg)';
    console.log(bool);
    console.log(intervalId);
}
var bool = false;
var intervalId;
var button = document.querySelector('.start');
button.addEventListener('click', function(){
    bool = !bool;
    console.log('Button clicked');
    if(bool){
        button.innerHTML = 'Stop';
        intervalId = setInterval(setTime, 1000);
        
    }
    else{
        button.innerHTML = 'Start';
        clearInterval(intervalId);
    }
    
});

