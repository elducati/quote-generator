const newQuote = () => {
  let begin = ["To live is to suffer", "He who", "That which"];
  let middle = [
    "to survive is to find",
    "has a why to live ",
    "does not kill us",
  ];
  let end = [
    "some meaning in the suffering.",
    "can bear almost any how.",
    "makes us stronger.",
  ];

  let randomNumber =
    Math.floor(Math.random() * (begin.length, middle.length, end.length));
  document.getElementById(
    "quote-display"
  ).innerHTML = `${begin[randomNumber]} ${middle[randomNumber]} ${end[randomNumber]}`;
};
newQuote();
