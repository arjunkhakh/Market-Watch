
var inputBox = document.querySelector("#inputBox")

var submitButton = document.querySelector("#submitBtn")

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

        // titl.innerHTML = "<h1>" + name + "<h1>"
        // log.innerHTML = "<img src=" + '"' + logo + '"' + " >"
        // label.innerHTML = "<label>" + ticker + "</label>"

        console.log(name);
        console.log(ticker)
        console.log(logo)
      });
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
    var profileUrl = ("https://finnhub.io/api/v1/stock/profile2?symbol=" + symbol + "&token=c7sopmqad3i9jn7rii60")

    profileCall(profileUrl); 

    var stockUrl = ("https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=c7sopmqad3i9jn7rii60");

    stockPrice(stockUrl);
  })

  });


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

    // Get the American ISIN which gives us the company symbol which we can access the profile
