
var url = "https://finnhub.io/api/v1/search?q=apple&token=c7sopmqad3i9jn7rii60"

var url2 = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7sopmqad3i9jn7rii60"

var url3 = "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c7sopmqad3i9jn7rii60"

fetch(url) 
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);   
  })

  fetch(url2) 
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);   
  })

  fetch(url3) 
  .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);   
    })