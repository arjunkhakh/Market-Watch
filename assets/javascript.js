// <<<<<<< javascript
// var inputBox = document.querySelector("#inputBox")

// var submitButton = document.querySelector("#submitBtn")

// var url = "https://finnhub.io/api/v1/search?q=US0378331005&token=c7sopmqad3i9jn7rii60";
// =======

// var url = "https://finnhub.io/api/v1/search?q=apple&token=c7sopmqad3i9jn7rii60"
// >>>>>>> main

var url2 = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7sopmqad3i9jn7rii60"

var url3 = "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c7sopmqad3i9jn7rii60"

// https://finnhub.io/api/v1/search?q=US0378331005&token=c7sopmqad3i9jn7rii60

var url5 = "https://eodhistoricaldata.com/api/search/Apple%20Inc?api_token=61fc0e9d63bc94.19357754&limit=1"

function profileCall(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}

fetch(url5) 
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var symbol = data[0].Code;
    console.log(data[0].Code);
    var profileUrl = ("https://finnhub.io/api/v1/stock/profile2?symbol=" + symbol + "&token=c7sopmqad3i9jn7rii60")

    profileCall(profileUrl); 
  })

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
