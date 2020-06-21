
const newQuote = () => {
//declare a variable "quote" of type object
//"quote" is an object comprising more objects
    let quote = {
        "popQuote": {
            "begin": ["The greatest glory in living",
                "The way to get started",
                "Your time is limited,",
                "If life were predictable",
                "If you look at what you have in life,",
                "If you set your goals ridiculously high"],
            "middle": ["lies not in never falling,",
                "is to quit talking",
                "so don't waste it living someone else's life.",
                "it would cease to be life,",
                "you'll always have more. If you look at what you don't have in life, ",
                "and it's a failure,"],
            "end": ["but in rising every time we fall.",
                "and begin doing.",
                "Don't be trapped by dogma – which is living with the results of other people's thinking.",
                "and be without flavor.",
                " you'll never have enough.",
                "you will fail above everyone else's success."]
        },
        "morningQuote": {
            "begin": ["Write it on your heart",
                "I get up every morning ",
                "Today’s goals: Coffee and kindness.",
                "An early-morning walk",
                "I wake up every morning at nine",
                "Every morning, I wake up saying,"],
            "middle": ["that every day",
                "and it’s going to be a great day.",
                "Maybe two coffees, ",
                "is a blessing ",
                "and grab for the morning paper.",
                "‘I’m still alive, a miracle.’"],
            "end": ["is the best day in the year.",
                "You never know when it’s going to be over, so I refuse to have a bad day.",
                "and then kindness.",
                "for the whole day.",
                "Then I look at the obituary page. If my name is not on it, I get up.",
                "And so I keep on pushing."]
        },
        "nietzscheQuote": {
            "begin": ["Whoever fights monsters should see to it that in the process he does not become a monster.",
                "It is not a lack of love,",
                "Sometimes people don’t want",
                "To live is to suffer",
                "He who",
                "That which"],
            "middle": ["And if you gaze long enough into an abyss,",
                "but a lack of friendship",
                "to hear the truth",
                "to survive is to find",
                "has a why to live ",
                "does not kill us"],
            "end": ["the abyss will gaze back into you.",
                "that makes unhappy marriages.",
                "because they don’t want their illusions destroyed.",
                "some meaning in the suffering.",
                "can bear almost any how.",
                "makes us stronger."]
        }

    }
    //use math.random to get a random number between 0 and 1 then multiply by the length of each section of the object 
    let morning = Math.random() * (quote.morningQuote.begin.length, quote.morningQuote.middle.length, quote.morningQuote.end.length);
    let popular = Math.random() * (quote.popQuote.begin.length, quote.popQuote.middle.length, quote.popQuote.end.length);
    let nietzsche = Math.random() * (quote.nietzscheQuote.begin.length, quote.nietzscheQuote.middle.length, quote.nietzscheQuote.end.length);
    
    //round off the result to the nearest integer value that is less than or equal to the random number
    let randomPopular = Math.floor(morning);
    let randomMorning = Math.floor(popular);
    let randomNietzsche = Math.floor(nietzsche);

    
    //display the random quote per category in the html page onchange event in the dropdown list.
    let select = document.getElementById("select").value;
    if (select == "Nietzsche"){
        document.getElementById("quote-display-1").innerHTML = `${quote.nietzscheQuote.begin[randomNietzsche]} ${quote.nietzscheQuote.middle[randomNietzsche]} ${quote.nietzscheQuote.end[randomNietzsche]}`;
        document.getElementById("quote-display").hidden = true;
        document.getElementById("quote-display-2").hidden = true;
        document.getElementById("quote-display-1").hidden = false;
        
    }
    else if(select == "Morning"){
        document.getElementById("quote-display-2").innerHTML = `${quote.morningQuote.begin[randomMorning]} ${quote.morningQuote.middle[randomMorning]} ${quote.morningQuote.end[randomMorning]}`;
        document.getElementById("quote-display-1").hidden = true;
        document.getElementById("quote-display").hidden = true;
        document.getElementById("quote-display-2").hidden = false;
    }
    else if(select == "Popular"){
        document.getElementById("quote-display").innerHTML = `${quote.popQuote.begin[randomPopular]} ${quote.popQuote.middle[randomPopular]} ${quote.popQuote.end[randomPopular]}`;
        document.getElementById("quote-display").hidden = false;
        document.getElementById("quote-display-1").hidden = true;
        document.getElementById("quote-display-2").hidden = true;
    }
}

