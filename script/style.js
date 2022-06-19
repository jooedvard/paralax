document.addEventListener("DOMContentLoaded", () => {
  onLanguagesClick();
  onListItemHover();
  onSlide();

  function onLanguagesClick() {
    const HUN = "icons/hungary.png";
    const UK = "icons/united-kingdom.png";
    const languages = document.querySelector(".change-language");
    const languages_image = languages.querySelector("img");
    let active = true;

    languages.onclick = () => {
      active ? (languages_image.src = UK) : (languages_image.src = HUN);
      active = !active;
    };
  }

  function onListItemHover() {
    const menu = document.querySelector(".menu");
    let list_items = menu.querySelectorAll(".list-item");
    list_items.forEach((element) => {
      let dropdown = element.querySelector(".dropdown");
      if (dropdown) {
        element.onmouseenter = () => {
          dropdown.style.display = "flex";
        };

        element.onmouseleave = () => {
          dropdown.style.display = "none";
        };
      }
    });
  }

  function onSlide() {
    let slider = document.querySelector(".slider");
    let slides = slider.querySelectorAll(".slide");
    let active = 0;

    hideAllSlide(slider);
    onBefore(slides, slider, active);
    onAfter(slides, slider, active);
    showSlide(slider,slides,active);

    
  }

  function showSlide(slider, slides, index) {
    slider.append(slides[index]);
    slides[index].style.opacity = "0";
    let span = slides[index].querySelector("span");
    let color = span.classList.value;
    setInterval(function(){slides[index].style.opacity = "1"},200);
    colorDots(index,color);
   
  }
  
  function colorDots(index,color){
    let dots = document.querySelector(".dots");
    let all_dots = dots.querySelectorAll(".dot");
    all_dots.forEach(dot=>{
      dot.className = '';
      dot.classList.add('dot');
    })
    all_dots[index].classList.add(color);
  }

  function hideAllSlide(slider) {
    slider.replaceChildren();
  }

  function onBefore(slides, slider, active) {
    let before = document.querySelector(".before");
    before.onclick = () => {
      active = checkActive(active-1, 0, slides.length-1);
      slider.replaceChildren();
      showSlide(slider,slides,active);
      
    };
  }

  function onAfter(slides, slider, active) {
    let after = document.querySelector(".after");
    after.onclick = () => {
      active = checkActive(active+1, 0, slides.length-1);
      slider.replaceChildren();
      showSlide(slider,slides,active);
    };
  }

  function checkActive(active, min, max){
    if(active < min ){
      active = max;
    }
    else if(active > max){
      active = min;
    }
    console.log( active);
    return active;
  }
});
