const newQuote = () => {
  let popQuote = {
    "begin":["Whoever fights monsters should see to it that in the process he does not become a monster.",
      "It is not a lack of love,",
      "Sometimes people don’t want",
      "To live is to suffer",
      "He who",
      "That which" ],
    "middle":["And if you gaze long enough into an abyss,",
      "but a lack of friendship",
      "to hear the truth",
      "to survive is to find",
      "has a why to live ",
      "does not kill us"],
    "end":[ "the abyss will gaze back into you.",
      "that makes unhappy marriages.",
      "because they don’t want their illusions destroyed.",
      "some meaning in the suffering.",
      "can bear almost any how.",
      "makes us stronger."]
  }
  
  let randomNumber = Math.floor(
    Math.random() * (popQuote.begin.length, popQuote.middle.length, popQuote.end.length)
  );
  document.getElementById(
    "quote-display"
  ).innerHTML = `${popQuote.begin[randomNumber]} ${popQuote.middle[randomNumber]} ${popQuote.end[randomNumber]}`;
};
