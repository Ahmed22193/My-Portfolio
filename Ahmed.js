/* let counters = document.querySelectorAll('.counter_ele h3');
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
 */
/* function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },10)
} */


// send to my whatsapp 
const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    const whatsappMessage = `اسم: ${name}\nإيميل: ${email}\nموضوع: ${subject}\nرسالة: ${message}`;
    const whatsappLink = `https://wa.me/01096825124?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappLink, '_blank');
};
  
