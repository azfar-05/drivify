const carousel = document.querySelector('.carousel');
let index = 0;

function moveToNext() {
    index++;
    if (index >= carousel.children.length) {
        index = 0;  // Reset to the first item
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Automatically move every 3 seconds
setInterval(moveToNext, 3000);

// Optional: Add manual navigation buttons for user interaction (if needed)
