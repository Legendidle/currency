var elIntro = document.querySelector(".intro");
var elForm = document.querySelector(".intro__form");
var elSelect = document.querySelector(".intro__select");
var elInput = document.querySelector(".intro__input");
var elDollar =("10800");
var elEuro = ("11600");
var elRuble = ("190");
var elAnswer = document.createElement("p");


elIntro.appendChild(elAnswer);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var selectValue = Number(elSelect.value);
  var ticketValue = (1000);
  var museumValue = (200);
  var hotelValue = (10000);


  var elSoum = (inputValue/selectValue).toFixed(2); 

  if (inputValue<=0) {elAnswer.textContent = "Please, enter currency that does exest!"; 
  return;
} else if (isNaN(inputValue)) {elAnswer.textContent =  "Please, enter your money!";
  return;
} else if (isNaN(selectValue)) {elAnswer.textContent = "Please, choose your rent!";
  return;
} else if (selectValue = elDollar) {if(elSoum >= ticketValue) {   elAnswer.textContent = "you can get a ticket!";}
else {elAnswer.textContent = "You can do anything with your money!";}
  return;
} else if (selectValue = elEuro) {if(elSoum >= museumValue){elAnswer.textContent = "you can go ti museum!";}
else {elAnswer.textContent = "You can do anything with your money!";}
  return;
} else if (selectValue = elRuble) {if(elSoum >= hotelValue) {elAnswer.textContent = "You can rent a room at the hotel!";}
else {elAnswer.textContent = "You can do anything with your money!";}
  return;
} else {elAnswer.textContent = "You can do anything with your money!";
  return;
}
}
)
