window.addEventListener("DOMContentLoaded", function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    for (let i = 0; i < 100; i++) {
      const shape = document.createElement("div");
      shape.className = "shape";
      shape.style.left = getRandomCoordinate(width) + "px";
      shape.style.top = getRandomCoordinate(height) + "px";
      document.body.appendChild(shape);
    }
  });
  
  function getRandomCoordinate(max) {
    const cmToPixel = 37.7952755906; // 1 centimeter = 37.7952755906 pixels
    return Math.floor(Math.random() * (max - cmToPixel));
  }
  