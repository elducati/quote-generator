//function displays quotes per category
function randomQuotePerCategory(
  quote,
  randomNietzsche,
  randomMorning,
  randomPopular
) {
  let category = document.getElementById("category").value;
  let numOfQuotes = document.getElementById("num-of-quotes").value;
  let statement = [];
  if (category == "Nietzsche") {
    const nietzscheQuoteBegin = quote.nietzscheQuote.begin;
    const nietzscheQuoteMiddle = quote.nietzscheQuote.middle;
    const nietzscheQuoteEnd = quote.nietzscheQuote.end;
    //randomly displays a quote when category is selected
    document.getElementById("quote-display").innerHTML = `"${nietzscheQuoteBegin[randomNietzsche]} ${nietzscheQuoteMiddle[randomNietzsche]} ${nietzscheQuoteEnd[randomNietzsche]}"`;
    document.getElementById("quote-heading").textContent = "Nietzsche Quotes";
    //call function to display quotes depending on number selected
    numNietzscheQuote(nietzscheQuoteBegin, nietzscheQuoteMiddle, nietzscheQuoteEnd);
  } else if (category == "Morning") {
    const morningQuoteBegin = quote.morningQuote.begin;
    const morningQuoteMiddle = quote.morningQuote.middle;
    const morningQuoteEnd = quote.morningQuote.end;
    //randomly displays a quote when category is selected
    document.getElementById(
      "quote-display"
    ).innerHTML = `"${morningQuoteBegin[randomMorning]} ${morningQuoteMiddle[randomMorning]} ${morningQuoteEnd[randomMorning]}"`;
    document.getElementById("quote-heading").textContent = "Morning Quotes";
    //call function to display quotes depending on number selected
    numMorningQuote(morningQuoteBegin, morningQuoteMiddle, morningQuoteEnd);
  } else if (category == "Popular") {
    const popQuoteBegin = quote.popQuote.begin;
    const popQuoteMiddle = quote.popQuote.middle;
    const popQuoteEnd = quote.popQuote.end;
    //randomly displays a quote when category is selected
    document.getElementById("quote-heading").textContent = "Popular Quotes";
    document.getElementById(
      "quote-display"
    ).innerHTML = `"${popQuoteBegin[randomPopular]} ${popQuoteMiddle[randomPopular]} ${popQuoteEnd[randomPopular]}"`;
    //call function to display quotes depending on number selected
    numPopularQuote(popQuoteBegin, popQuoteMiddle, popQuoteEnd);

  }
//functions to display quotes depending on the number selected and per category
  function numPopularQuote(popQuoteBegin, popQuoteMiddle, popQuoteEnd) {

    for (let i = 0; i <= numOfQuotes - 1; i++) {

      statement += `${i + 1}. "${popQuoteBegin[i]} ${popQuoteMiddle[i]} ${popQuoteEnd[i]}"<br/>`;
      document.getElementById("quote-display").innerHTML = statement;
    }

  }

  function numMorningQuote(morningQuoteBegin, morningQuoteMiddle, morningQuoteEnd) {
    for (let i = 0; i <= numOfQuotes - 1; i++) {

      statement += `${i + 1}. "${morningQuoteBegin[i]} ${morningQuoteMiddle[i]} ${morningQuoteEnd[i]}"<br/>`;
      document.getElementById("quote-display").innerHTML = statement;
    }
  }

  function numNietzscheQuote(nietzscheQuoteBegin, nietzscheQuoteMiddle, nietzscheQuoteEnd) {
    for (let i = 0; i <= numOfQuotes - 1; i++) {

      statement += `${i + 1}. "${nietzscheQuoteBegin[i]} ${nietzscheQuoteMiddle[i]} ${nietzscheQuoteEnd[i]}"<br/>`;
      document.getElementById("quote-display").innerHTML = statement;
    }
  }
}
 //use math.random to get a random number between 0 and 1 then multiply by the length of each section of the object
function newFunctionQuote(quote) {
  const morningQuoteBeginLength = quote.morningQuote.begin.length;
  const morningQuoteMiddleLength = quote.morningQuote.middle.length;
  const morningQuoteEndLength = quote.morningQuote.end.length;
  
  const mathDotRandomMorning =
    Math.random() *
    (morningQuoteBeginLength, morningQuoteMiddleLength, morningQuoteEndLength); 
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
  //return the random number generated for each section of the object 'quote'
  return { morning, popular, nietzsche };
}

//round off the result to the nearest integer value that is less than or equal to the random number
function newFunctionRandom(morning, popular, nietzsche) {
  let randomPopular = Math.floor(morning);
  let randomMorning = Math.floor(popular);
  let randomNietzsche = Math.floor(nietzsche);
  return { randomNietzsche, randomMorning, randomPopular };
}


