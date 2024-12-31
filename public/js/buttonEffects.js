document.querySelectorAll(".button").forEach((button) => {
    let div = document.createElement("div"),
      letters = button.textContent.trim().split("");
  
    letters.forEach((letter, index, array) => {
      let element = document.createElement("span"),
        part = index >= array.length / 2 ? -1 : 1,
        position =
          index >= array.length / 2
            ? array.length / 2 - index + (array.length / 2 - 1)
            : index,
        move = position / (array.length / 2),
        rotate = 1 - move;
  
      element.innerHTML = !letter.trim() ? "&nbsp;" : letter;
      element.style.setProperty("--move", move);
      element.style.setProperty("--rotate", rotate);
      element.style.setProperty("--part", part);
  
      div.appendChild(element);
    });
  
    button.innerHTML = div.outerHTML;
  
    button.addEventListener("mouseenter", () => {
      if (!button.classList.contains("out")) button.classList.add("in");
    });
  
    button.addEventListener("mouseleave", () => {
      if (button.classList.contains("in")) {
        button.classList.add("out");
        setTimeout(() => button.classList.remove("in", "out"), 950);
      }
    });
  });
  
  document.querySelector("#btn-projects").addEventListener("click", () => {
    document.querySelector("#proyectos").scrollIntoView({ behavior: "smooth" });
  });
  