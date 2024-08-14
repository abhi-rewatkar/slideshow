// Array of random movie images
const images = [
    "https://example.com/movie1.jpg",
    "https://example.com/movie2.jpg",
    "https://example.com/movie3.jpg",
    "https://example.com/movie4.jpg",
    "https://example.com/movie5.jpg"
];

// Get the slideshow image element
const slideshow = document.getElementById('slideshow');

// Set the first image as the default
let currentIndex = 0;
slideshow.src = images[currentIndex];

// Function to update the slideshow image
function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
    slideshow.src = images[currentIndex];
}

// Set the interval for the slideshow
setInterval(updateSlideshow, 2000); // Change image every 2000ms (2 seconds)
