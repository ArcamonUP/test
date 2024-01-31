let slideIndex = 1;
let slideTimer;

showSlides();

function plusSlides(n) {
  clearInterval(slideTimer); // Réinitialiser le timer
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  clearInterval(slideTimer); // Réinitialiser le timer
  slideIndex -= n;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Définir le nouveau timer après chaque changement de diapositive
  slideTimer = setTimeout(function() {
    slideIndex++;
    showSlides();
  }, 6000);
}