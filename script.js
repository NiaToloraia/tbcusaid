let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// Auto-slide function
function autoSlides() {
    plusSlides(1);
  }
  

 setInterval(autoSlides, 10000);




 //accordion card 
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
      header.addEventListener('click', function() {
          const accordionContent = this.nextElementSibling;

          // Toggle active class on the header
          this.classList.toggle('active');

          // Toggle the accordion content
          if (accordionContent.style.display === 'block') {
              accordionContent.style.display = 'none';
          } else {
              accordionContent.style.display = 'block';
          }

          // Close other open accordion sections
          headers.forEach(otherHeader => {
              if (otherHeader !== header) {
                  otherHeader.classList.remove('active');
                  otherHeader.nextElementSibling.style.display = 'none';
              }
          });
      });
  });
});









// Vertical Scroll
//to close and open side text
const rules = document.querySelector('#rules');
const sideText = document.querySelector('#side-text');
const crossButton = document.getElementById("cross-Btn");
const closeBtn = document.querySelector('#close-Btn');

rules.addEventListener('click', () => {
  sideText.classList.toggle('active');
  rules.classList.toggle('active');
  

});


closeBtn.addEventListener('click', () => {
  sideText.classList.remove("active");
  rules.classList.remove('active');
});



crossButton.addEventListener('click', () => {
  sideText.classList.remove("active");
  rules.classList.remove('active');
});