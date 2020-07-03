
function randomQuotePerCategory(
  quote,
  randomNietzsche,
  randomMorning,
  randomPopular
) {
  let select = document.getElementById("select").value;
  let select1 = document.getElementById("select-1").value;
  let statement = [];
  if (select == "Nietzsche") {
    const nietzscheQuoteBegin = quote.nietzscheQuote.begin;
    const nietzscheQuoteMiddle = quote.nietzscheQuote.middle;
    const nietzscheQuoteEnd = quote.nietzscheQuote.end;
    document.getElementById("quote-display").innerHTML = `${nietzscheQuoteBegin[randomNietzsche]} ${nietzscheQuoteMiddle[randomNietzsche]} ${nietzscheQuoteEnd[randomNietzsche]}`;
    document.getElementById("popQ").textContent = "Nietzsche Quotes";
    for (let i = 0; i <= select1 - 1; i++) {

      statement += `"=>${nietzscheQuoteBegin[i]} ${nietzscheQuoteMiddle[i]} ${nietzscheQuoteEnd[i]}"\n`;
      if (select1 == 1) {
        document.getElementById("quote-display").innerHTML = statement;

      }
      else if (select1 == 2) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 3) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 4) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 5) {
        document.getElementById("quote-display").innerHTML = statement;
      }
    }
  } else if (select == "Morning") {
    const morningQuoteBegin = quote.morningQuote.begin;
    const morningQuoteMiddle = quote.morningQuote.middle;
    const morningQuoteEnd = quote.morningQuote.end;
    document.getElementById(
      "quote-display"
    ).innerHTML = `${morningQuoteBegin[randomMorning]} ${morningQuoteMiddle[randomMorning]} ${morningQuoteEnd[randomMorning]}`;
    document.getElementById("popQ").textContent = "Morning Quotes";
    for (let i = 0; i <= select1 - 1; i++) {

      statement += `"=>${morningQuoteBegin[i]} ${morningQuoteMiddle[i]} ${morningQuoteEnd[i]}"\n`;
      if (select1 == 1) {
        document.getElementById("quote-display").innerHTML = statement;

      }
      else if (select1 == 2) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 3) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 4) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 5) {
        document.getElementById("quote-display").innerHTML = statement;
      }
    }
  } else if (select == "Popular") {
    const popQuoteBegin = quote.popQuote.begin;
    const popQuoteMiddle = quote.popQuote.middle;
    const popQuoteEnd = quote.popQuote.end;
    document.getElementById(
      "quote-display"
    ).innerHTML = `${popQuoteBegin[randomPopular]} ${popQuoteMiddle[randomPopular]} ${popQuoteEnd[randomPopular]}`;
    document.getElementById("popQ").textContent = "Popular Quotes";

    for (let i = 0; i <= select1 - 1; i++) {

      statement += `"=>${popQuoteBegin[i]} ${popQuoteMiddle[i]} ${popQuoteEnd[i]}"\n`;
      if (select1 == 1) {
        document.getElementById("quote-display").innerHTML = statement;

      }
      else if (select1 == 2) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 3) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 4) {
        document.getElementById("quote-display").innerHTML = statement;
      }
      else if (select1 == 5) {
        document.getElementById("quote-display").innerHTML = statement;
      }
    }
  }

}


function newFunctionRandom(morning, popular, nietzsche) {
  let randomPopular = Math.floor(morning);
  let randomMorning = Math.floor(popular);
  let randomNietzsche = Math.floor(nietzsche);
  return { randomNietzsche, randomMorning, randomPopular };
}

function newFunctionQuote(quote) {
  const morningQuoteBeginLength = quote.morningQuote.begin.length;
  const morningQuoteMiddleLength = quote.morningQuote.middle.length;
  const morningQuoteEndLength = quote.morningQuote.end.length;
  const mathDotRandomMorning =
    Math.random() *
    (morningQuoteBeginLength, morningQuoteMiddleLength, morningQuoteEndLength);
  //use math.random to get a random number between 0 and 1 then multiply by the length of each section of the object
  let morning = mathDotRandomMorning;
  const popQuoteBeginLength = quote.popQuote.begin.length;
  const popQuoteMiddleLength = quote.popQuote.middle.length;
  const popQuoteEndLength = quote.popQuote.end.length;
  const mathDotRandomPop =
    Math.random() *
    (popQuoteBeginLength, popQuoteMiddleLength, popQuoteEndLength);
  let popular = mathDotRandomPop;
  const nietzscheQuoteBeginLength = quote.nietzscheQuote.begin.length;
  const nietzscheQuoteMiddleLength = quote.nietzscheQuote.middle.length;
  const nietzscheQuoteEndLength = quote.nietzscheQuote.end.length;
  const mathDotRandomNietzsche =
    Math.random() *
    (nietzscheQuoteBeginLength,
      nietzscheQuoteMiddleLength,
      nietzscheQuoteEndLength);
  let nietzsche = mathDotRandomNietzsche;
  return { morning, popular, nietzsche };
}
