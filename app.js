// const vdv = new Date();
// console.log(vdv);

// const myAge = 2000;
// const gvdfgvdf = new Date().getFullYear();
// const fg = new Date().getMonth();
// console.log(myAge - gvdfgvdf);

// const fgf = new Date().getDate();
// console.log(gvdfgvdf, fg, fgf);

const day = document.querySelector(".input-day");
const month = document.querySelector(".input-month");
const year = document.querySelector(".input-year");

//
//
//

// now genrating date / month / year
const dateTOday = new Date().getDate();
const dateMonth = new Date().getUTCMonth() + 1;
const dateYear = new Date().getFullYear();
console.log(dateTOday, dateMonth, dateYear);
console.log(dateMonth);
//

// ADDING VALUES IN SPAN AREA
const placeHolderYear = document.querySelector(".year-holder");
const placeHolderMonth = document.querySelector(".month-holder");
const placeHolderDay = document.querySelector(".days-holder");

//

// create functions
// const dateCheaker = function () {
//   if (+day.value >= 12 && !day) {
//     document.querySelector(".input-day").style.borderColor = "red";
//   }
// };

function validateForm() {
  let x = day.value;
  if (x == "") {
    // alert("Name must be filled out");
    document.querySelector(".input-day").style.borderColor = "red";
    document.querySelector(".error-msg-day").style.display = "flex";

    return false;
  } else {
    document.querySelector(".error-msg-day").style.display = "none";
    document.querySelector(".input-day").style.borderColor = "black";
    return true;
  }
}

const monthCheaker = function () {
  if (+month.value <= 12 && +month.value > 0) {
    document.querySelector(".input-month").style.borderColor = "black";
    document.querySelector(".error-msg-month").style.display = "none";
  } else {
    document.querySelector(".input-month").style.borderColor = "red";
    document.querySelector(".error-msg-month").style.display = "flex";
  }
};

const yearCheaker = function () {
  if (!year.value) {
    document.querySelector(".input-year").style.borderColor = "red";
    document.querySelector(".error-msg-year").style.display = "flex";
  } else {
    document.querySelector(".error-msg-year").style.display = "none";
    document.querySelector(".input-year").style.borderColor = "black";
  }
};
//

const genrateBtn = document.querySelector(".main-btn");
genrateBtn.addEventListener("click", function () {
  if (+day.value > 31 && +month.value >= 12) {
    console.log("kya kar raha hai bhai");
  }

  if (
    +day.value <= 31 &&
    +month.value <= 12 &&
    day.value &&
    month.value &&
    year.value
  ) {
    console.log("working");
    console.log(dateYear - Number(year.value));
    console.log(dateMonth - Number(month.value));
    placeHolderYear.textContent = dateYear - Number(year.value);
    placeHolderMonth.textContent = dateMonth - Number(month.value);
    placeHolderDay.textContent = dateTOday - Number(day.value);
  } else {
    console.log("not working");
    validateForm();
    monthCheaker();
    yearCheaker();
  }
  // console.log(day.value);
  // console.log(month.value);
  // console.log(year.value);

  //   console.log(dateYear - Number(year.value));
  //   console.log(dateMonth - Number(month.value));
  //   placeHolderYear.textContent = dateYear - Number(year.value);
  //   placeHolderMonth.textContent = dateMonth - Number(month.value);
  //   placeHolderDay.textContent = dateTOday - Number(day.value);

  if (+month.value >= 12) {
    console.log(dateMonth - Number(month.value));
  }
});
