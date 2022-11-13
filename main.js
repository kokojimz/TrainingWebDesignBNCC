"use strict";

// const x = prompt("Please input something");
// console.log(x);

const handleSubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const email = document.getElementById("email").value;
  // const message2 = document.querySelector("#message");

  if (!email.includes("@")) {
    alert("email format isnt correct");
    return;
  }

  console.log(name);
  console.log(message);
  console.log(email);
};

const slides = document.querySelectorAll(".slide");
let activeIdx = 0;
console.log(slides);

const handleSlider = function (prev) {
  slides[activeIdx].classList.add("move");

  setTimeout(() => {
    slides[activeIdx].classList.remove("show");
    slides[activeIdx].classList.remove("move");

    if (prev) {
      if (activeIdx === 0) {
        activeIdx = slides.length - 1;
        // console.log(activeIdx);
      } else {
        activeIdx = activeIdx - 1;
        // console.log(activeIdx);
      }
    } else {
      activeIdx++;
      if (activeIdx === slides.length) {
        activeIdx = 0;
      }
    }
    slides[activeIdx].classList.add("show");
  }, 500);
};

// const add = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(add(5, 2));

// let x;

// x = 5;
// x = '"this is my string"';

// const numbers = [1, 2, 3, 4, 5];

// // console.log(`My name is ${numbers[1]} ${x}`);

// // function printArray() {
// //   // const z = 99;
// //   console.log(x);
// // }

// // const printArray = function () {
// //   console.log(x);
// // };

// const printArray = () => {
//   console.log(x);
// };

// printArray();
