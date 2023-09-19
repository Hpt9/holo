var body = document.querySelector("body");
var rowf = document.querySelector(".rowf").children;
var rowl1 = document.querySelector(".rowl1").children;
var rowl2 = document.querySelector(".rowl2").children;
var rowl3 = document.querySelector(".rowl3").children;
var rown = document.querySelector(".rown").children;
var lastr = document.querySelector(".last-row").children;
var double = document.querySelectorAll(".double");
var arr_keys = document.querySelectorAll(".arr");
var double_childed = [...rown, ...double];
var all_buttons = [...rowl1, ...rowl2, ...rowl3, ...rowf];
var caps_activated = false;
body.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
  for (let i = 0; i < all_buttons.length; i++) {
    if (e.key.toLowerCase() === all_buttons[i].innerText.toLowerCase()) {
      if (e.key.toLowerCase() === "shift" && e.location === 1) {
        document.querySelector(".shift").style.background = "red";
      } else if (e.key.toLowerCase() === "shift" && e.location === 2) {
        document.querySelector(".lshift").style.background = "red";
      } else {
        all_buttons[i].style.background = "red";
      }
    }
    if (
      e.key.toLowerCase().substring(0, 3) ===all_buttons[i].innerText.toLowerCase()) {all_buttons[i].style.background = "red";}
  }
  for (let j = 0; j < double_childed.length; j++) {
    for (let k = 0; k < double_childed[j].children.length; k++) {
      if (e.key === double_childed[j].children[k].innerText) {
        double_childed[j].children[k].parentElement.style.background = "red";
      }
    }
  }
  for (i of arr_keys) {
    if (e.key.toLowerCase() === i.classList[0]) {
      i.parentElement.style.background = "red";
    }
  }
  if (e.key.toLowerCase() === "backspace") {
    document.querySelector(".delete").style.background = "red";
  }
  if (e.key.toLowerCase() === "enter") {
    document.querySelector(".return").style.background = "red";
  }
  if (e.key.toLowerCase() === "capslock") {
    document.querySelector(".caps-lock").style.background = "red";
    if (e.getModifierState("CapsLock")) {
      document.querySelector(".green-dot").style.background = "#2BD35A";
      document.querySelector(".green-dot").style.boxShadow =
        "0px 0px 30px #2BD35A";
    } else {
      document.querySelector(".green-dot").style.background = "gray";
    }
  }
  if (e.key.toLowerCase() === "tab") {
    document.querySelector(".tab").style.background = "red";
  }
  if (e.key.toLowerCase() === "meta") {
    document.querySelectorAll(".command")[0].style.background = "red";
    document.querySelectorAll(".command")[1].style.background = "red";
  }
  if (e.key.toLowerCase() === "alt" && e.location === 1) {
    document.querySelectorAll(".opt")[0].style.background = "red";
  } else if (e.key.toLowerCase() === "alt" && e.location === 2) {
    document.querySelectorAll(".opt")[1].style.background = "red";
  }
  if (e.key.toLowerCase() === "control") {
    document.querySelector(".control").style.background = "red";
  }
  if (e.key.toLowerCase() === " ") {
    document.querySelector(".space").style.background = "red";
  }
});
body.addEventListener("keyup", (e) => {
  e.preventDefault();
  for (let i = 1; i < all_buttons.length; i++) {
    if (e.key.toLowerCase() === all_buttons[i].innerHTML.toLowerCase()) {
      all_buttons[i].style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
    }
    if (
      e.key.toLowerCase().substring(0, 3) ===all_buttons[i].innerText.toLowerCase()
    ) {
      all_buttons[i].style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
    }
  }
  if (e.key.toLowerCase() === "backspace") {
    document.querySelector(".delete").style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  if (e.key.toLowerCase() === "enter") {
    document.querySelector(".return").style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  if (e.key.toLowerCase() === "capslock") {
    document.querySelector(".caps-lock").style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  if (e.key.toLowerCase() === "tab") {
    document.querySelector(".tab").style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  for (let j = 0; j < double_childed.length; j++) {
    for (let k = 0; k < double_childed[j].children.length; k++) {
      if (e.key === double_childed[j].children[k].innerText) {
        double_childed[j].children[k].parentElement.style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
      }
    }
  }
  if (e.key.toLowerCase() === "meta") {
    document.querySelectorAll(".command")[0].style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
    document.querySelectorAll(".command")[1].style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  if (e.key.toLowerCase() === "alt") {
    document.querySelectorAll(".opt")[0].style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
    document.querySelectorAll(".opt")[1].style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  if (e.key.toLowerCase() === "control") {
    document.querySelector(".control").style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  if (e.key.toLowerCase() === " ") {
    document.querySelector(".space").style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
  }
  for (i of arr_keys) {
    if (e.key.toLowerCase() === i.classList[0]) {
      i.parentElement.style.background ="linear-gradient(135deg, #1A1C28 0%, #05060B 100%)";
    }
  }
});