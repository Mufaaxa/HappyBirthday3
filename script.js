const countdownDate = new Date("April 15, 2025 00:00:00").getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(countdown);
    window.location.href = "main.html"; // Redirect to main page
  } else {
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
  }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const petalImages = [
    "peony-petal.png",
    "lily-petal.png",
    "rose-petal.png"
  ];

  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    const img = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.backgroundImage = `url(${img})`;
    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 10000);
  }

  setInterval(createPetal, 500);
});
