// You can modify the updateGallery function to animate the zoom-in and zoom-out effect before the rotation. 
// You can use scale to shrink the image (zoom-in effect) and then enlarge it back (zoom-out effect). 
// You can use the transition property to animate these transformations.

// In this code, when the updateGallery function is called, the image first shrinks to 80% of its original size (scale(0.8)) while rotating. 
// This transition takes 1 second (transition: "transform 1s"). After 1 second, the image enlarges back to its original size (scale(1)). 
// The rotation continues after the zoom-in and zoom-out effect. This cycle repeats every 4 seconds (setTimeout(updateGallery, 4000)).


const imageContainerEl = document.querySelector(".image-container")

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer)
    updateGallery()
});
nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer)
    updateGallery()
});

function updateGallery() {
    imageContainerEl.style.transform =
        `perspective(1000px) scale(0.8) rotateY(${x}deg)`;
    imageContainerEl.style.transition = "transform 1s";

    setTimeout(() => {
        imageContainerEl.style.transform =
            `perspective(1000px) scale(1) rotateY(${x}deg)`;
    }, 1000);

    timer = setTimeout(() => {
        x = x - 45
        updateGallery()
    }, 4000)
}

updateGallery()


// const imageContainerEl = document.querySelector(".image-container")

// const prevEl = document.getElementById("prev");
// const nextEl = document.getElementById("next");
// let x = 0;
// let timer;
// prevEl.addEventListener("click", () => {
//     x = x + 45;
//     clearTimeout(timer)
//     updateGallery()
// });
// nextEl.addEventListener("click", () => {
//     x = x - 45;
//     clearTimeout(timer)
//     updateGallery()
// });

// function updateGallery() {
//     imageContainerEl.style.transform =
//         `perspective(1000px) rotateY(${x}deg)`;
//     timer = setTimeout(() => {
//         x = x - 45
//         updateGallery()
//     }, 3000)
// }

// updateGallery()