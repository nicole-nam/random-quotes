"use strict";

const btn = document.querySelector(".btn");
const quoteContainer = document.querySelector(".random__quote");
const quoteText = document.querySelector(".text");
const authorName = document.getElementById("authorName");
const twitter = document.querySelector(".share");

btn.addEventListener("click", function () {
  getRandomQuote();
});

const getRandomQuote = function () {
  fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then((response) => response.json())
    .then((data) => {
      const { quotes } = data;
      const text = quotes[0].text;
      const author = quotes[0].author;
      console.log(text);


      quoteText.innerHTML = text;
      authorName.innerHTML = author;
    });
};

twitter.addEventListener("click", function () {
  var tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    quoteText.innerHTML +
    " By " +
    authorName.innerHTML;
  window.open(tweetUrl);
});
