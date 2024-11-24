const slideset = document.querySelectorAll(".coursesslides");
const slideNum = document.querySelectorAll(".slideone");
const slideFront = document.querySelectorAll(".scroll1");
const slideBack = document.querySelectorAll(".scroll2");


slideset.forEach(
    function(Item, i){
        let slideSetDimension = Item.getBoundingClientRect();
        let slideWidth = slideSetDimension.width;

        slideFront[i].addEventListener('click', () =>{
            Item.scrollLeft += slideWidth;
        })

        slideBack[i].addEventListener('click', () =>{
            Item.scrollLeft -= slideWidth;
        } )
    }
)

//STEDENTS SECTION SLIDE ARROWS BELOW//

const fullSlide = document.querySelectorAll(".studentsinteretslides");
const nextSlide = document.querySelectorAll(".scroll3");
const prevSlide = document.querySelectorAll(".scroll4");
const prevSlide2 = document.querySelectorAll(".scroll5");





fullSlide.forEach(function(item, a) {
    const scrollDimension = item.getBoundingClientRect();
    const scrollWidth = scrollDimension.width;

    prevSlide2[a].addEventListener("click", ()=>{
        item.scrollLeft -= scrollWidth;
    })

    nextSlide[a].addEventListener("click", ()=>{
        item.scrollLeft += scrollWidth;
    })
})



const slides = document.querySelectorAll('.slide1');

slides.forEach(slide => {
    const video = slide.querySelector('video');
    const img = slide.querySelector('img'); // To hide the image when video plays

    // On mouseenter: Play the video and hide the image
    slide.addEventListener('mouseenter', () => {
        video.style.display = 'block'; // Show the video
        img.style.display = 'none'; // Hide the image
        video.play();
    });

    // On mouseleave: Pause the video, reset, and show the image
    slide.addEventListener('mouseleave', () => {
        video.style.display = 'none'; // Hide the video
        img.style.display = 'block'; // Show the image again
        video.pause();
        video.currentTime = 0; // Reset the video
    });
});
