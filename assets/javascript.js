// Variables
var inputBox = document.querySelector("#inputBox")
var submitButton = document.querySelector("#submitBtn")

var price1 = document.querySelector("#price1") // Apple
var price2 = document.querySelector("#price2") // Alphabet/Google
var price3 = document.querySelector("#price3") // Amazon
var price4 = document.querySelector("#price4") // Tesla
var price5 = document.querySelector("#price5") // Meta
var price6 = document.querySelector("#price6") // Microsoft
var price7 = document.querySelector("#price7") // Netflix
var price8 = document.querySelector("#price8") // JP Morgan
var price9 = document.querySelector("#price9") // Morgan Standley
var price10 = document.querySelector("#price10") // Nike
var price11 = document.querySelector("#price11") // Nvdia
var price12 = document.querySelector("#price12") // Paypal
var price13 = document.querySelector("#price13") // Pfzier

var ticker1 = document.querySelector("#ticker1") // Apple
var ticker2 = document.querySelector("#ticker2") // Alphabet/Google
var ticker3 = document.querySelector("#ticker3") // Amazon
var ticker4 = document.querySelector("#ticker4") // Tesla
var ticker5 = document.querySelector("#ticker5") // Meta
var ticker6 = document.querySelector("#ticker6") // Microsoft
var ticker7 = document.querySelector("#ticker7") // Netflix
var ticker8 = document.querySelector("#ticker8") // JP Morgan
var ticker9 = document.querySelector("#ticker9") // Morgan Standley
var ticker10 = document.querySelector("#ticker10") // Nike
var ticker11 = document.querySelector("#ticker11") // Nvdia
var ticker12 = document.querySelector("#ticker12") // Paypal
var ticker13 = document.querySelector("#ticker13") // Pfzier

var cardContainer = document.querySelector("#userSearch")

// A Function which calls the inputted company's profile and displays their name, ticker and logo
function profileCall(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

  var cardName = document.querySelector("#searchName")
        var cardTicker = document.querySelector("#searchTicker")
        var cardLogo = document.querySelector("#searchLogo")

        cardName.textContent = data.name;
        cardTicker.textContent = data.ticker;
        
        var cardImg = data.logo;
        cardLogo.setAttribute("src", cardImg)
      });
}

// A Function which calls the inputted company's stock price and displays their current price, change in price and the percentage of the price change
// It also features an if statement for the percentage and price change. Green for a positive change and red for a negative change.
function stockPrice(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (stockValue) {

 var cardCurrent = document.querySelector("#searchCurrentPrice")
 var cardChange = document.querySelector("#searchChange")
 var cardPerc = document.querySelector("#searchPercentage")

 cardCurrent.textContent = "$" + stockValue.c;
 cardChange.textContent = "$" + stockValue.d;
 cardPerc.textContent = stockValue.dp + "%";

 if (stockValue.d < 0) {
   cardChange.setAttribute("style", "color:red")
 } else {
   cardChange.setAttribute("style", "color:green")
 }

 if (stockValue.dp < 0) {
  cardPerc.setAttribute("style", "color:red")
} else {
  cardPerc.setAttribute("style", "color:green")
}
 
      });
}

// A function which gets the input and puts it into local storage
function getLocalStorage() {
  localStorage.setItem("inputBox", inputBox)
}

// Apple Ticker and Stock Price
function cardInfo1() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker1.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=AAPL&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price1.textContent = "$" + data.c;
  })
}

// Google Ticker and Stock Price
function cardInfo4() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=GOOG&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker2.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=GOOGL&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price2.textContent = "$" + data.c;
  })
}

// Amazon ticker and Stock Price
function cardInfo3() {
  fetch("https://finnhub.io/api/v1/stock/profile2?isin=US0231351067&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker3.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=AMZN&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price3.textContent = "$" + data.c;
  })
}

// Tesla ticker and Stock Price
function cardInfo2() {
  fetch("https://finnhub.io/api/v1/stock/profile2?isin=US88160R1014&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker4.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=TSLA&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price4.textContent = "$" + data.c;
  })
}


// Meta Ticker and Stock Price
function cardInfo5() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=FB&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker5.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=FB&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price5.textContent = "$" + data.c;
  })
}

// Microsoft Ticker and Stock Price
function cardInfo6() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=MFST&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker6.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=MSFT&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price6.textContent = "$" + data.c;
  })
}

// Netflix Ticker and Stock Price
function cardInfo7() {
  fetch("https://finnhub.io/api/v1/stock/profile2?isin=US64110L1061&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker7.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=NFLX&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price7.textContent = "$" + data.c;
  })
}

// JP Morgan Ticker and Stock Price
function cardInfo8() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=JPM&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker8.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=JPM&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price8.textContent = "$" + data.c;
  })
}

// Morgan Standley Ticker and Stock Price
function cardInfo9() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=MS&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker9.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=MS&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price9.textContent = "$" + data.c;
  })
}

// Nike Ticker and Stock Price
function cardInfo10() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=NKE&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker10.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=NKE&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price10.textContent = "$" + data.c;
  })
}

// Nivada Ticker and Stock Price
function cardInfo11() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=NVDA&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker11.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=NVDA&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    

    price11.textContent = "$" + data.c;
  })
}


// Paypal Ticker and Stock Price
function cardInfo12() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=PYPL&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker12.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=PYPL&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price12.textContent = "$" + data.c;
  })
}


// Pfizer Ticker and Stock Price
function cardInfo13() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=PFE&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    ticker13.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=PFE&token=c7sopu2ad3i9jn7riiig")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    

    price13.textContent = "$" + data.c;
  })
}

cardInfo1() // Apple
cardInfo2() // Alphabet/Google
cardInfo3() // Amazon
cardInfo4() // Tesla
cardInfo5() // Meta
cardInfo6() // Microsoft
cardInfo7() // Netflix
cardInfo8() // JP Morgan
cardInfo9() // Morgan Standley
cardInfo10() // Nike
cardInfo11() // NVDIA
cardInfo12() // Paypal
cardInfo13() // Pzifer


// A function which adds an event listener to the button when an input is been made. It will call two other functions which gets all the information for the cards.
submitButton.addEventListener("click", function () {
  var input = inputBox.value;

  fetch(("https://api.polygon.io/v3/reference/tickers?type=CS&search=" + input + "&active=true&sort=ticker&order=asc&limit=1&apiKey=MkOWSOfBprqN9JwzoYOPF7kn6gjM3gML")) 
.then(function (response) {
  return response.json();
})
.then(function (input) {
  var symbol = input.results[0]?.ticker
  
  var profileUrl = ("https://finnhub.io/api/v1/stock/profile2?symbol=" + symbol + "&token=c7sopu2ad3i9jn7riiig")

  profileCall(profileUrl); 

   var stockUrl = ("https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=c7sopu2ad3i9jn7riiig");

   stockPrice(stockUrl);
   
   cardContainer.setAttribute("style", "display:block;")

   // If No Recognised Company Is Entered
  var noCompanyText = document.querySelector('#noCompany')
  if (symbol == null) {
    noCompanyText.setAttribute("style", "display:block;")
  } else {
    noCompanyText.setAttribute("style", "display:none;")
    cardContainer.setAttribute("style", "display:block;")
  }
});
});