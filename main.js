
let btnClose = document.querySelector('.icon-close');
let btnHamurger = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');

btnHamurger.addEventListener('click',onbtnHamburgerClick);
btnClose.addEventListener('click',offbtnHamburgerClick);

function onbtnHamburgerClick() {
    menu.classList.remove('hidden');
};
function offbtnHamburgerClick() {
    menu.classList.add('hidden'); 
};


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



let presentIndex = 1;
lookSlides(presentIndex);

function plusSlides(n) {
  lookSlides(presentIndex += x);
}

function presentSlide(x) {
   lookSlides(presentIndex = x);
}

function lookSlides(x) {
  let i;
  let slip = document.getElementsByClassName("mineSlides");
  let points = document.getElementsByClassName("point");
      if (x > slip.length) {
        presentIndex = 1
      }
      if (x < 1) {
        presentIndex = slip.length
      }
      for (i = 0; i < slip.length; i++) {
        slip[i].style.display = "none";
      }
      for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(" active", "");
      }
    slip[presentIndex - 1].style.display = "block";
    points[presentIndex - 1].className += " active";
}



let newPage = document.querySelector('.cta-btn');
newPage.addEventListener('click',moveNextPage);
function moveNextPage() {
  window.location = 'index-cta.html';
}



let coursesLi = document.querySelectorAll('.course-left ul li');
let shown_1 = document.querySelector('.shown-1');
let shown_2 = document.querySelector('.shown-2');
let shown_3 = document.querySelector('.shown-3');
let shown_4 = document.querySelector('.shown-4');

// for (var i = 0; i < coursesLi.length; i++) {
//     coursesLi[i].onclick = function () {
//         this.classList.add('shown');
//     }
// }

coursesLi.forEach( (e, index) =>{
    e.addEventListener('click', function() {
      // console.log(e.innerHTML, index);
      if (index === 0) {
        e.classList.add('positive');
        shown_1.style.display = 'flex';
        shown_2.style.display = 'none';
        shown_3.style.display = 'none';
        shown_4.style.display = 'none';
        
        setTimeout(() => {
          e.classList.remove('positive');
        }, 1000);
        
       
      } else if(index === 1) {
        e.classList.add('positive');
        shown_2.style.display = 'flex';
        shown_1.style.display = "none";
        shown_3.style.display = "none";
        shown_4.style.display = "none";
        
        setTimeout(() => {
          e.classList.remove('positive');
        }, 1000);
      
      } else if(index === 2) {
        e.classList.add('positive');
        shown_3.style.display = "flex";
        shown_1.style.display = "none";
        shown_2.style.display = "none";
        shown_4.style.display = "none";
        
        setTimeout(() => {
          e.classList.remove('positive');
        }, 1000);
      
      } else if(index === 3) {
        e.classList.add('positive');
        shown_4.style.display = "flex";
        shown_1.style.display = "none";
        shown_2.style.display = "none";
        shown_3.style.display = "none";

        setTimeout(() => {
          e.classList.remove('positive');
        }, 1000);
        
      }
    });
})




