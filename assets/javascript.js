var inputBox = document.querySelector("#inputBox")
var submitButton = document.querySelector("#submitBtn")

var price1 = document.querySelector("#price1")
var price2 = document.querySelector("#price2")
var price3 = document.querySelector("#price3")
var price4 = document.querySelector("#price4")
var price5 = document.querySelector("#price5")

var price6 = document.querySelector("#price6")
var price7 = document.querySelector("#price7")
var price8 = document.querySelector("#price8")
var price9 = document.querySelector("#price9")
var price10 = document.querySelector("#price10")
var price11 = document.querySelector("#price11")
var price12 = document.querySelector("#price12")
var price13 = document.querySelector("#price13")

var ticker1 = document.querySelector("#ticker1") 
var ticker2 = document.querySelector("#ticker2") 
var ticker3 = document.querySelector("#ticker3") 
var ticker4 = document.querySelector("#ticker4") 
var ticker5 = document.querySelector("#ticker5") 
var ticker6 = document.querySelector("#ticker6") 
var ticker7 = document.querySelector("#ticker7")  
var ticker8 = document.querySelector("#ticker8") 
var ticker9 = document.querySelector("#ticker9") 
var ticker10 = document.querySelector("#ticker10") 
var ticker11 = document.querySelector("#ticker11") 
var ticker12 = document.querySelector("#ticker12")  
var ticker13 = document.querySelector("#ticker13") 

var cardContainer = document.querySelector("#userSearch")

function profileCall(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        

        var name = data.name;
        var ticker = data.ticker;
        var logo = data.logo;

var cardName = document.querySelector("#searchName")
        var cardTicker = document.querySelector("#searchTicker")
        var cardLogo = document.querySelector("#searchLogo")

        cardName.textContent = data.name;
        cardTicker.textContent = data.ticker;
        
        var cardImg = data.logo;
        cardLogo.setAttribute("src", cardImg)
      });
}

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

function getLocalStorage(event) {
  event.preventDefault();

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

cardInfo1()
cardInfo2()
cardInfo3()
cardInfo4()
cardInfo5()
cardInfo6()
cardInfo7()
cardInfo8()
cardInfo9()
cardInfo10()
cardInfo11()
cardInfo12()
cardInfo13()

submitButton.addEventListener("click", function () {
  var input = inputBox.value;

  fetch(("https://api.polygon.io/v3/reference/tickers?type=CS&search=" + input + "&active=true&sort=ticker&order=asc&limit=1&apiKey=MkOWSOfBprqN9JwzoYOPF7kn6gjM3gML")) 
.then(function (response) {
  return response.json();
})
.then(function (input) {
  var symbol = input.results[0].ticker
  
  var profileUrl = ("https://finnhub.io/api/v1/stock/profile2?symbol=" + symbol + "&token=c7sopu2ad3i9jn7riiig")

  profileCall(profileUrl); 

   var stockUrl = ("https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=c7sopu2ad3i9jn7riiig");

   stockPrice(stockUrl);

  cardContainer.setAttribute("style", "display:block;")
});
});