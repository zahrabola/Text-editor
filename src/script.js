/* Referces */

let optbutton = document.querySelectorAll(".opt-btn");
let advoptbutton = document.querySelectorAll(".adv-opt-btn");
let fontname = document.getElementById("FontName");
let fontsizeref = document.getElementById("FontSize");
let textarea = document.getElementById("text-input");
let linkbtn = document.getElementById("linktext");
let alignbtn = document.querySelectorAll(".align");
let spacingbtn = document.querySelectorAll(".spacing");
let formatbtn = document.querySelectorAll(".format");
let scriptbtn = document.querySelectorAll(".script");
////font style options
let FontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

/// initial settings = 1
/// object initializer value of an object
//function calls for highlighting buttons
//No highlights for link, unlink,lists,
// undo,redo since they are one time operations
const initializer = () => {
  highlighter(alignbtn, true);
  highlighter(spacingbtn, true);
  highlighter(formatbtn, false);
  highlighter(scriptbtn, true);
};

// clicked buuton highlight = 2
//The code is used to highlight the clicked button.
// If currently clicked button is already active,
//then remove highlight from other buttons.
const highlighter = (className, Removeneeds) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //Removeneeds  = true means only one button
      //should be highlight and other would be normal
      if (Removeneeds) {
        let activeAlready = false;
        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          activeAlready = true;
        }
        // remove highlight from inactive buttons
        removeHighlighter(className);
        if (!activeAlready) {
          //higlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};
const removeHighlighter = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};
window.onload = initializer();