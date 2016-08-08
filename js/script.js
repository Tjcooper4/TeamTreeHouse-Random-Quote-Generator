// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Array of objects containing the quotes and associated information.
var storedQuotes = [
  { quote:'You can do anything but not everything',
    source: 'David Allen',
    year: '2009',
    citation: 'Making it all work'
  },

  { quote:'Color is to the eye what music is to the ear',
    source: 'Louis Comfort Tiffany',
    year: '1916',
    citation: 'biography dictated to Charles de Kay'
  },

  { quote:'There\'s a critical point, when you\'ve stayed single too long, that your brain switches \
     from \"No, don\'t say that to Eh, fuck it. Say it, see what happens.\"',
    source: 'Bill Burr',
    year: '2008',
    citation: 'Why Do I Do This?'
  },

  { quote:'Happiness is the feeling we experience when we are too busy to be miserable.',
    source: 'Tom Masson',
    year: '1901',
    citation: 'The Century Illustrated Monthly Magazine, Vol. 61'
  },

  { quote:'Only the mediocre are always at their best.',
    source: 'Jean Giraudoux',
    year: '1984',
    citation: 'The Beauty Principal'
  },

  { quote:'Imagination is the voice of daring. \
   If there is anything Godlike about God it is that. He dared to imagine everything.',
    source: 'Henry Miller',
    year: '1939',
    citation: 'Tropic of Capricorn'
  },

  { quote:'Everything that\’s difficult you should be able to laugh about.',
    source: 'Louis C.K.',
    year: '2010',
    citation: 'from Vulture.com'
  },

  { quote:'I saw a sheet lying on the floor, it must have been a ghost that had passed out... So I kicked it.',
    source: 'Mitch Hedberg',
    year: '2005',
    citation: 'Do You Believe in Gosh?'
  },

  { quote:'Don\'t cry over spilled milk. By this time tomorrow, it\'ll be free yogurt.',
    source: 'Stephen Colbert',
    year: '2009',
    citation: 'The Colbert Report'
  },

  { quote:'I would say laughter is the best medicine. \
   But it’s more than that. It’s an entire regime of antibiotics and steroids',
    source: 'David Allen',
    year: '2007',
    citation: 'Entertainment Weekly interview'
  },
];

// getRandomQuote function.
function getRandomQuote() {
  var i = Math.floor( Math.random() * storedQuotes.length); //Generate a random number for the i variable. Math.random is multiplied by the length of the storedQuotes array.
  return storedQuotes[i]; //Returns the randomly selected quote.
}

// printQuote function. Writes the quotations to the screen
function printQuote() {
  var quotes = getRandomQuote(); //Call the getRandomQuote function and store the result in a variable called quotes.
  document.getElementById("quote-box").innerHTML = '<p class="quote">' + quotes.quote + '</p> <p class="source">'+  quotes.source + '<span class="citation">' + quotes.citation + '</span> <span class="year">' + quotes.year + '</span> </p>';
} //Using .innerHTML to write the elements of the random quote to the "quote-box" div in index.html
