let bar_menus =document.querySelector('.bar-menus');
let menus_android =document.querySelector('.menus-android');
let options =document.querySelector('.option-android');
let bar_close=document.getElementById('bar_close');
menus_android.addEventListener('click',()=>{
    console.log("clique effectuer")

    
   bar_close.classList.toggle("active_close");
    options.classList.toggle("retour");  

    bar_menus.classList.toggle("trait_cacher");
})

// Animation des barres de progression au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    var progressBars = document.querySelectorAll(".progress");
    
    progressBars.forEach(function(bar) {
      var value = bar.dataset.value;
      bar.style.width = value;
    });
  });