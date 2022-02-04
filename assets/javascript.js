var inputBox = document.querySelector("#inputBox")

var submitButton = document.querySelector("#submitBtn")

var price1 = document.querySelector("#price1")
var price2 = document.querySelector("#price2")
var price3 = document.querySelector("#price3")
var price4 = document.querySelector("#price4")
var price5 = document.querySelector("#price5")

var ticker1 = document.querySelector("#ticker1") // Apple
var ticker2 = document.querySelector("#ticker2") // Tesla 
var ticker3 = document.querySelector("#ticker3") // Amazon
var ticker4 = document.querySelector("#ticker4") // Google
var ticker5 = document.querySelector("#ticker5") // Netflix

function profileCall(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var name = data[0].name;
        var ticker = data[0].ticker;
        var logo = data[0].logo;

        console.log(name);
        console.log(ticker)
        console.log(logo)
      });
}

// Apple Ticker and Stock Price
function cardInfo1() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    ticker1.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=AAPL&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    price1.textContent = "$" + data.c;
  })
}

// Tesla ticker and Stock Price
function cardInfo2() {
  fetch("https://finnhub.io/api/v1/stock/profile2?isin=US88160R1014&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    ticker2.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=TSLA&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

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
    console.log(data);

    ticker3.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=AMZN&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    price3.textContent = "$" + data.c;
  })
}

// Google Ticker and Stock Price
function cardInfo4() {
  fetch("https://finnhub.io/api/v1/stock/profile2?symbol=GOOG&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    ticker4.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=GOOGL&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    price4.textContent = "$" + data.c;
  })
}

// Netflix Ticker and Stock Price
function cardInfo5() {
  fetch("https://finnhub.io/api/v1/stock/profile2?isin=US64110L1061&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    ticker5.textContent = data.ticker;
  })

  fetch("https://finnhub.io/api/v1/quote?symbol=NFLX&token=c7sopmqad3i9jn7rii60")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    price5.textContent = "$" + data.c;
  })
}

function stockPrice(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var Current = data.c; // Current Price
        var change = data.d; // Change 
        var percentage = data.dp; // Percentage in Change
        var high = data.h; // High Price of the day
        var low = data.l; // Low Pric of the day
        var open = data.o; // Open price of the day
        var previous = data.pc; // Previous close price

        console.log(Current)
        console.log(change)
        console.log(percentage)
        console.log(high)
        console.log(low)
        console.log(open)
        console.log(previous)
      });
}

function getLocalStorage(event) {
  event.preventDefault();

  localStorage.setItem("inputBox", inputBox)
}

  submitButton.addEventListener("click", function () {
    var input = inputBox.value;

    fetch(("https://eodhistoricaldata.com/api/search/" + input + "?api_token=61fc0e9d63bc94.19357754&limit=1")) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var symbol = data[0].Code;
    console.log(data[0].Code);
  //   var profileUrl = ("https://finnhub.io/api/v1/stock/profile2?symbol=" + symbol + "&token=c7sopmqad3i9jn7rii60")

  //   profileCall(profileUrl); 

  //   var stockUrl = ("https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=c7sopmqad3i9jn7rii60");

  //   stockPrice(stockUrl);
  // })
  });
});

  cardInfo1()
  cardInfo2()
  cardInfo3()
  cardInfo4()
  cardInfo5()

  // TO DO 

  // ADD STOCK CANDLE WIDGET CHART https://finnhub.io/docs/api/stock-candles

  // Popular Companies Card: Apple (1), Tesla (2), Amazon (3), Google (4), Netflix(5)


// COMMENTS BELOW FOR REFERNCE

// var url = "https://finnhub.io/api/v1/search?q=US0378331005&token=c7sopmqad3i9jn7rii60";

// var url2 = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7sopmqad3i9jn7rii60"

// var url3 = "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c7sopmqad3i9jn7rii60"

// // https://finnhub.io/api/v1/search?q=US0378331005&token=c7sopmqad3i9jn7rii60

// var url5 = "https://eodhistoricaldata.com/api/search/Apple%20Inc?api_token=61fc0e9d63bc94.19357754&limit=1"

  // fetch(url5) 
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     var symbol = data[0].Code;
//     console.log(data[0].Code);
//     var profileUrl = ("https://finnhub.io/api/v1/stock/profile2?symbol=" + symbol + "&token=c7sopmqad3i9jn7rii60")

//     profileCall(profileUrl); 
//   })

// function profileCall(url) {
//   fetch(url)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       });
// }

//   fetch(url2) 
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);   
//   })

//   fetch(url3) 
//   .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);   
//     })

    // Company Name, Logo, Company Symbol, Stock Market Price and Increase/Decrease in Stock Market Value in Percentage.

<<<<<<< HEAD
    // Get the American ISIN which gives us the company symbol which we can access the profile
=======
    // Get the American ISIN which gives us the company symbol which we can access the profile
>>>>>>> main
