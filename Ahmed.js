let counters = document.querySelectorAll('.counter_ele h3');
let Section_ = document.querySelector('.Show_Counter');
let active = false; // is the counter active ? No

window.onscroll = function(){
    if(window.scrollY >= Section_.offsetTop){
        if(!active){
            counters.forEach((counters) => startCount(counters));
        }
        active = true;
    }
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },10)
}

