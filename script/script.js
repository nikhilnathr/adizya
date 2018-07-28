/***************************************************

  
                STARTING ANIMATIONS

******************************************************/



/******************************** Lines **************************/ 

var i=0;
while(line = document.querySelectorAll('.lines path')[i]){
  var len = line.getTotalLength();

  // Clear any previous transition
  line.style.transition = line.style.WebkitTransition = 'none';

  // Set up the starting positions 
  line.style.strokeDashoffset = len; 
  line.style.strokeDasharray = len+ ' '+len;

  // Trigger a layout so styles are calculated & the browser 
  // picks up the starting position before animating
  line.getBoundingClientRect(); 
  // Define our transition
  line.style.transition = line.style.WebkitTransition = 'all 2s linear';
  // Go!
  line.style.strokeDashoffset = "0";
  i++;
}


/************************ Logo fade in ***************************/

var cont = document.querySelector('svg.content');
// Clear any previous transition
cont.style.transition = cont.style.WebkitTransition = 'none';

cont.style.transition = cont.style.WebkitTransition = 'opacity 1s ease-in-out 2s';
// Go!
cont.style.opacity = '1'; 



setTimeout(function(){
  var pat = document.querySelector('.text text');

  // Clear any previous transition
  pat.style.transition = pat.style.WebkitTransition = 'none';
  // Set up the starting positions 
  pat.style.strokeDasharray = "30"; 

  // Trigger a layout so styles are calculated & the browser 
  // picks up the starting position before animating
  pat.getBoundingClientRect(); 
  // Define our transition
  pat.style.transition = pat.style.WebkitTransition = 'all 2s ease-in-out';
  pat.style.opacity= 1;
  // Go!
  pat.style.strokeDasharray = "200";

}, 2200)

setTimeout(function(){
  document.querySelector('.animations .revolution').style.opacity = 1;
  document.querySelector('svg.fade circle').style.opacity = 1;
  document.querySelector('svg.fade circle').setAttribute("r", 220);
  document.querySelector(".lines").style.opacity = "0";
}, 3200)


/***********************************************************************

                            MENU STYLING
                            
************************************************************************/

var menuBtn = document.querySelector(".menu-btn"),
    navMenu = document.querySelector('.nav'),
    navOverlay = document.querySelector('.nav-overlay');

menuBtn.onclick = function(){
  navMenu.classList.toggle("active");
  navOverlay.style.display = "block";
  setTimeout(function(){
    navOverlay.style.opacity = "1";
  },100)
}

navOverlay.onclick = function(){
  navMenu.classList.remove("active");
  navOverlay.style.opacity = "0";
  setTimeout(function(){
    navOverlay.style.display = "none";
  }, 400);
}
