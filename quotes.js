const quoteTag = document.querySelector("h1")
const randomTag = document.querySelector("footer img")
const bodyTag = document.querySelector("body")

// let data = []

// //load json data
// fetch("https://api.superhi.com/api/test/quotes/")
//   .then(response => response.json())
//   .then(jsonData => {
//   data = jsonData
//   getQuote()
// })

const getQuote = function () {
  fetch("https://api.adviceslip.com/advice")
  	.then(response => response.json())
  	.then(jsonData => {
    	quoteTag.innerHTML = "&ldquo;" + jsonData.slip.advice + "&rdquo;"
    if (jsonData.slip.advice.length > 80) {
        quoteTag.classList.add("long")
        } else {
          quoteTag.classList.remove("long")
        }
    bodyTag.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 90%)`
  })
}
//run getQuote on load
getQuote()

//run getQuote on click of random
randomTag.addEventListener("click", function() {
  getQuote()
})
