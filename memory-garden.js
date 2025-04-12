function showMemory(id) {
    const memories = document.querySelectorAll('.memory');
    memories.forEach(m => m.classList.add('hidden'));
  
    const selected = document.getElementById('memory' + id);
    selected.classList.remove('hidden');
  }

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
  