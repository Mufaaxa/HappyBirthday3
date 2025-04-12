function navigateTo(page) {
    window.location.href = page;
  }
  
  // Falling petals animation
  const petalContainer = document.getElementById("petal-container");
  const petalImages = ["peony.png", "rose.png", "lily.png"];
  
  function createPetal() {
    const img = document.createElement("img");
    img.src = petalImages[Math.floor(Math.random() * petalImages.length)];
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.top = "-50px";
    img.style.transition = `top ${6 + Math.random() * 5}s linear`;
    petalContainer.appendChild(img);
  
    setTimeout(() => {
      img.style.top = window.innerHeight + "px";
    }, 10);
  
    setTimeout(() => {
      petalContainer.removeChild(img);
    }, 12000);
  }
  
  setInterval(createPetal, 800);
  

  