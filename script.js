document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.querySelector(".btn-primary");
  
    generateButton.addEventListener("click", function () {
      generateBoxes();
    });
  
    function generateBoxes() {
      const numBlocks = parseInt(document.querySelector(".form-control").value);
  
      const existingBoxes = document.querySelectorAll(".box");
      existingBoxes.forEach((box) => box.remove());
  
      const boxSize = (Math.min(window.innerWidth, window.innerHeight) * 1) / numBlocks;
  
      for (let i = 0; i < numBlocks; i++) {
        const box = document.createElement("div");
        box.className = "box";
        document.body.appendChild(box);
  
        const xPos = i * boxSize;
        const yPos = i * boxSize;
  
        box.style.width = `${boxSize*2.18}px`;
        box.style.height = `${boxSize*0.85}px`;
        box.style.left = `${xPos*2.18}px`;
        box.style.bottom = `${yPos*0.85}px`;
      }
    }
  });
  