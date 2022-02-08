var desc1 = document.querySelector("#discription1")
var desc2 = document.querySelector("#discription2")
var desc3 = document.querySelector("#discription3")
var desc4 = document.querySelector("#discription4")

var title1 = document.querySelector("#title1")
var title2 = document.querySelector("#title2")
var title3 = document.querySelector("#title3")
var title4 = document.querySelector("#title4")

var thumbnail1 = document.querySelector("#thumbnail1")
var thumbnail2 = document.querySelector("#thumbnail2")
var thumbnail3 = document.querySelector("#thumbnail3")
var thumbnail4 = document.querySelector("#thumbnail4")

fetch("https://newsdata.io/api/1/news?apikey=pub_4321bed719384d54f676f9caf3e503585594&country=us&category=business&language=en")
.then(function (response) {
    return response.json();
  })
  .then(function (news) {
    console.log(news);

    title1.textContent = news.results[0].title
    title2.textContent = news.results[1].title
    title3.textContent = news.results[2].title
    title4.textContent = news.results[3].title

    desc1.textContent = news.results[0].description
    desc2.textContent = news.results[1].description
    desc3.textContent = news.results[2].description
    desc4.textContent = news.results[3].description

    var img1 = news.results[0].image_url
    thumbnail1.setAttribute("src", img1)

    var img2 = news.results[1].image_url
    thumbnail2.setAttribute("src", img2)

    var img3 = news.results[2].image_url
    thumbnail3.setAttribute("src", img3)

    var img4 = news.results[3].image_url
    thumbnail4.setAttribute("src", img4)
  });