let currentposition = 0;
function moveSlider(){
    const slider = document.getElementById('sectionmain');
    const cardwidth = document.querySelector('.section1').offsetWidth + 20;
    currentposition -= cardwidth;
    slider.style.transform = `translateX(${currentposition}px)`;
}
