//Dom elements
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

seconds.value = 00;
minutes.value = 00;

const date = new Date();

start.addEventListener('click', incseconds);




function incseconds(){
    const set = setInterval(increment, 1000);
    
    start.disabled = true
    stop.disabled = false;

    stop.addEventListener('click', () => stopCount(set));
    reset.addEventListener('click', () => resetCount(set));
}


function increment(){
    seconds.value=seconds.value+1;

    if(seconds.value<10){
        seconds.innerHTML = "0" + seconds.value    
    } 
    else{
        seconds.innerHTML =  seconds.value;
    }
    if(seconds.value>59){
        seconds.value = 00;
        seconds.innerHTML = '00'
        minutes.value = minutes.value + 1;
        minutes.innerHTML = minutes.value ;
    }

}
 

function stopCount(set){
    start.disabled=false;
    stop.disabled=true;
    
    clearInterval(set);
    
    if(seconds.value === 00 && minutes.value === 00){
        stop.disabled = false;
    }

}

function resetCount(set){
    stop.disabled = false;
    start.disabled = false; 
    
    seconds.innerHTML ='00'
    minutes.innerHTML = '00';
    
    seconds.value = 00;
    minutes.value = 00;
    
    clearInterval(set);

}