// ◦•●◉✿✿◉●•◦ globals
let regex = /^[a-zA-Z\s]+$/;


// ◦•●◉✿✿◉●•◦ assign dom
let outputDiv = document.getElementById("outputDiv");
let inputBox = document.getElementById("userInput");
let clearButton = document.getElementById("clearButton");
clearButton.style.display = "none";
clearButton.addEventListener("click", clearInputs);
let flipButton = document.getElementById("flipButton");
flipButton.addEventListener('click', validateInput);


// ◦•●◉✿✿◉●•◦ flips the characters of an inputted string
function flipText(str) {
  let flippedChars = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  };

  let flipped = [...str]
    .map((char) => flippedChars[char.toLowerCase()] || char)
    .reverse()
    .join("");

  return flipped;
}

// ◦•●◉✿✿◉●•◦ checks user input - only letters & spaces allowed
function validateInput() {
  if (regex.test(inputBox.value)) {
    let flippedText = flipText(inputBox.value);
    outputDiv.innerText = flippedText;
    clearButton.style.display = "inline-block";

  } else {
    alert('Invalid input; letters & spaces only please.');
  }
};

// ◦•●◉✿✿◉●•◦ clears input box and output text
function clearInputs() {
  inputBox.value = "";
  outputDiv.innerText = "output will appear here:";
  clearButton.style.display = "none";
}