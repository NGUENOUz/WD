const styleSwitherToggle=document.getElementById('style-swither-toggler');

styleSwitherToggle.addEventListener("click",()=>{
    document.getElementById("style-switcher").classList.toggle("open");
    
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// couleurs du theme

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style)=>{
        if (color===style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

// le darck mode 

const dayNight =document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark");
    document.querySelector(".aside").style.toggle(background="black");
})
window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else
    dayNight.querySelector("i").classList.add("fa-moon"); 
})


const icone=document.getElementById("icone");
icone.addEventListener('click',function(){

})
