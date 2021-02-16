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
  fetch("https://favqs.com/api/qotd")
    .then((response) => response.json())
    .then((data) => {
      const info = data.quote;
      const author = info.author;
      const quote = info.body;

      quoteText.innerHTML = quote;
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
