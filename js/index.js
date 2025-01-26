//Testimonials
const testimonials = [
  {
    text: "Drivify made finding the perfect car so easy! Highly recommend it.",
    author: "Alex Johnson",
  },
  {
    text: "I love how simple and fast Drivify is. Found my dream car in minutes.",
    author: "Emily Davis",
  },
  {
    text: "Great experience using Drivify. The suggestions were spot-on.",
    author: "Michael Lee",
  },
  {
    text: "Drivify is a game-changer! The customizable filters are super helpful.",
    author: "Sophia Martinez",
  },
];

let currentIndex = 0;

const testimonialText = document.querySelector(".testimonial-text");
const testimonialAuthor = document.querySelector(".testimonial-author");
const nextButton = document.getElementById("nextTestimonial");

nextButton.addEventListener("click", () => {
  // Add fade-out class
  testimonialText.classList.add("fade-out");
  testimonialAuthor.classList.add("fade-out");

  // Wait for fade-out animation to complete
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;

    // Update testimonial content
    testimonialText.textContent = `"${testimonials[currentIndex].text}"`;
    testimonialAuthor.textContent = `- ${testimonials[currentIndex].author}`;

    // Add fade-in class
    testimonialText.classList.remove("fade-out");
    testimonialAuthor.classList.remove("fade-out");
    testimonialText.classList.add("fade-in");
    testimonialAuthor.classList.add("fade-in");

    // Remove fade-in class after animation
    setTimeout(() => {
      testimonialText.classList.remove("fade-in");
      testimonialAuthor.classList.remove("fade-in");
    }, 500); // Duration of fade-in animation
  }, 500); // Duration of fade-out animation
});
