function revealNote(index) {
  const note = document.getElementById(`note${index}`);
  if (note.classList.contains("hidden")) {
    note.classList.remove("hidden");
  } else {
    note.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll(".flower");
  const text = document.getElementById("petal-text");

  flowers.forEach(flower => {
    flower.addEventListener("click", () => {
      const message = flower.getAttribute("data-message");
      text.textContent = message;
    });
  });
});
