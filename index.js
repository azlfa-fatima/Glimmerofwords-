
  document.addEventListener("DOMContentLoaded", () => {
    const quotes = document.querySelectorAll(".carousel-wrapper blockquote");
    let current = 0;

    function rotateQuotes() {
      quotes.forEach((q, i) => {
        q.classList.remove("active");
        if (i === current) q.classList.add("active");
      });

      current = (current + 1) % quotes.length;
    }

    rotateQuotes(); // Show first
    setInterval(rotateQuotes, 4000); // Rotate every 4 seconds
  });


window.onload = function () {
    const popupShown = sessionStorage.getItem("popupShown");

    if (!popupShown) {
      setTimeout(function () {
        document.getElementById("popup").style.display = "block";
        sessionStorage.setItem("popupShown", "true");
      }, 2000); // 2 seconds delay
    }
  };

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }



  
document.addEventListener("DOMContentLoaded", () => {
  const quotes = document.querySelectorAll(".quote");
  const dots = document.querySelectorAll(".dot");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let current = 0;
  let interval = setInterval(showNext, 5000);

  function updateCarousel(index) {
    quotes.forEach(q => q.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    quotes[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function showNext() {
    current = (current + 1) % quotes.length;
    updateCarousel(current);
  }

  function showPrev() {
    current = (current - 1 + quotes.length) % quotes.length;
    updateCarousel(current);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNext, 5000);
  }

  next.addEventListener("click", () => {
    showNext();
    resetInterval();
  });

  prev.addEventListener("click", () => {
    showPrev();
    resetInterval();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      current = parseInt(dot.dataset.index);
      updateCarousel(current);
      resetInterval();
    });
  });
});






const phrases = [
  "best friends chasing sunsets",
  "getting lost to find yourself",
  "road trips and real conversations",
  "healing through adventure",
  "the courage to start over",
  "writing your own map",
  "choosing joy over fear",
  "the magic of everyday moments",
  "freedom before forever",
  "finding home in people, not places"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const speed = 100;
const pause = 2000;

function typeWriter() {
  const textElement = document.getElementById("typewriter-text");
  if (!textElement) return;

  const fullText = phrases[currentPhrase];

  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  textElement.textContent = fullText.substring(0, currentChar);

  if (!isDeleting && currentChar === fullText.length) {
    isDeleting = true;
    setTimeout(typeWriter, pause);
    return;
  }

  if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
