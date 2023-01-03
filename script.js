const diceBtn = document.querySelector(".dice-btn");
const cardQuote = document.querySelector(".card-quote");
const cardHead = document.querySelector(".card-head");

const url = "https://api.adviceslip.com/advice";

function fetchData(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const { slip } = data;
      const id = slip.id;
      const advice = slip.advice;
      cardHead.textContent = `ADVICE #${id}`;
      cardQuote.textContent = advice;
    });
}

diceBtn.addEventListener("click", function clickHandler() {
  fetchData(url);
});
