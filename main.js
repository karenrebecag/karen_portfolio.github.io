//Contact Section on the main page! 

//This is the typewrite effect, it's on main->contact and it writes "Take Your Visuals to the Next Level. Message Me"
let app = document.getElementById('typewriter');
const card = document.querySelector('.card');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #A648CB;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #A648CB;">Take your visuals to the next level. Message Me</span>')
  .pauseFor(50)
  .deleteChars(50)
  .start();

  let slideIndex = 0;
  showSlides();
  
  //Below Contact Section, carousel for the reviews section"

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Cambiar imagen cada 2 segundos
  };


