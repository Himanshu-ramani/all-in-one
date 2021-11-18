// apikey for nres 2fd977b0f6b2849232c3923c1860777b

// function news() {
//   fetch(
//     `http://api.mediastack.com/v1/news
//     ? access_key = 2fd977b0f6b2849232c3923c1860777b
//     & keywords = tennis`
//   )
//     .then((golddata) => {
//       return golddata.json();
//     })
//     .then((gdata) => {
//       console.log(gdata);
//     });
// }
// news()

function indiaCor(data){
  fetch(
    `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
  )
    .then((rawdata) => {
      // console.log(rawdata);
      return rawdata.json();
    })
    .then((data) => {
console.log(data);
document.getElementById("total-case").innerHTML = data.totalCases
document.getElementById("active-case").innerHTML = data.activeCases
document.getElementById("recoverd").innerHTML = data.recovered
document.getElementById("deaths").innerHTML = data.deaths
  });
}

indiaCor()

function news(){
  fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fc892eaa17a142a799c50694a36b5499`
  )
    .then((golddata) => {
      return golddata.json();
    })
    .then((gdata) => {
      console.log(gdata);
      const trendingTitle = document.getElementById("trending-title").innerHTML =gdata.articles[0].title
      const trendingDescription = document.getElementsByClassName('trending-detail')[0].innerHTML = gdata.articles[0].description
      const trendingtime = document.getElementsByClassName("time-tending")[0]
      const trendingimg = document.getElementById("trending-img").src = gdata.articles[0].urlToImage
      document.getElementById("btn").href = gdata.articles[0].url
    let article = gdata.articles
    console.log(article);
      /////
      
for (let n = 1; n < article.length; n++) {
  // const Title = 
  // const Description = document.getElementsByClassName('trending-detail')[0].innerHTML = gdata.articles[0].description
  
  // const trendingimg = document.getElementById("trending-img").src = gdata.articles[0].urlToImage
  // document.getElementById("btn").href = gdata.articles[0].url

  html =`<div class="onen">
  <img src="${gdata.articles[n].urlToImage}" alt="" style="height: 270px; width: 320px" />
  <p style="font-weight: 900; padding:5px;">
    ${gdata.articles[n].title}
  </p >
  <p style=" padding:5px;" >
   ${gdata.articles[n].description}
  </p>
  <br /><br />
  <button ><a id="btn" href="${ gdata.articles[n].url}" style="text-decoration: none; color: black;">Read more</a></button>
</div>`
document.getElementsByClassName("news-container")[0].insertAdjacentHTML("beforeend",html)
}
});
    
}
news()
/////////
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";



const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// const d = new Date();
// let name = month[d.getMonth()];
    let now = new Date()
    let day = weekday[now.getDay()];
    let date = now.getDate()
    let monthnow = month[ now.getMonth()]



  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=514147f35efd8d695334455a91911308`
  )
    .then((whdata) => {
      return whdata.json();
    })
    .then((data) => {
      console.log(data);
      let temp = data.main.temp
      let tempc = temp-273.15
     document.getElementById("place").innerText = data.name
     document.getElementById("tempture").innerHTML = Math.round(tempc)+"°"
    //  document.getElementById("weatherText").innerHTML = data.weather[0].main
     document.getElementById("desh").innerText = data.sys.country
     document.getElementById("date").innerHTML = `${day} ${date}, ${monthnow}`
     const img = document.getElementById("wheather-img")
     if (data.weather.main == 'Drizzle' ) {
      img.src = "./Day Clouds.png"
     }
     if (data.weather.main == 'Smoke' ) {
      img.src = "./Day Clouds.png"
     }
     if (data.weather.main == 'Rain' ) {
      img.src = "./Day Rain.png"
     }
     if (data.weather.main == 'thunder' ) {
      img.src = "./Day Strom.png"
     }
     if (data.weather.main == 'Wind' ) {
      img.src = "./Day Wind.png"
     }
     if (data.weather.main == 'Sunny' ) {
      img.src = "./Day sun.png"
     }

    });
 

    
  //////////
  const coviddiv = document.getElementsByClassName("corona")[0]
  const wheatherdiv = document.getElementsByClassName("wheather")[0]
  const newsdiv = document.getElementsByClassName("news")[0]
  function covid(){
    coviddiv.style.display ="block"
    wheatherdiv.style.display ="none"
    newsdiv.style.display ="none"
  }
  function wheather(){
    wheatherdiv.style.display ="flex"
    coviddiv.style.display ="none"
    newsdiv.style.display ="none"
  }
  function newsshow(){
    newsdiv.style.display ="block"
    wheatherdiv.style.display ="none"
    coviddiv.style.display ="none"
  }