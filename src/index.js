function updateTime() {
  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
  let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  let edinburghTime = moment().tz("Europe/London");
  let addisAbabaElement = document.querySelector("#addis-ababa");
  let addisAbabaDateElement = addisAbabaElement.querySelector(".date");
  let addisAbabaTimeElement = addisAbabaElement.querySelector(".time");
  let addisAbabaTime = moment().tz("Africa/Addis_Ababa");
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  buenosAiresDateElement.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format(`MMMM Do, YYYY`);
  buenosAiresTimeElement.innerHTML = buenosAiresTime.format("HH:mm:ss");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format(`MMMM Do, YYYY`);
  newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");

  edinburghDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format(`MMMM Do, YYYY`);
  edinburghTimeElement.innerHTML = edinburghTime.format("HH:mm:ss");

  addisAbabaDateElement.innerHTML = moment()
    .tz("Africa/Addis_Ababa")
    .format(`MMMM Do, YYYY`);
  addisAbabaTimeElement.innerHTML = addisAbabaTime.format("HH:mm:ss");

  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format(`MMMM Do, YYYY`);
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
}

const funFacts = {
  "America/Paramaribo":
    "With a population of less than 615 000 people, and a territory of about 164 000 square kilometers, Suriname is the smallest country in South America both in terms of population and area. Roughly 240 000 people live in the capital city, Paramaribo. With almost half of the population living in or near Paramaribo, Suriname is one of the least densely populated countries in the world. 93% of Suriname is covered with rainforest!",
  "Africa/Banjul":
    "Located on the west coast of Africa, along the River Gambia and surrounded by Senegal, The Gambia is one of Africa's smallest countries. The entire country is about 11 300 square kilometres, with a total population of about 2.8 million people. It's capital city, Banjul, is the most densely populated area in The Gambia, with about 400 000 residents in the greater Banjul area. The wet-and-dry tropical climate of The Gambia is characterized by distinct intense rainy followed by dry seasons. There is very little forest cover, with the most forested area being the Bijo Forest, but the country is very biologically diverse despite this, both when it comes to wildlife and fauna. The Gambian pouched rat (Cricetomys gambianus) has shown great promise in being used to detect landmines. ",
  "Europe/Oslo": "Oslo is the capital city of Norway.",
  "Asia/Colombo":
    "Colombo is the executive and judicial capital city of Sri Lanka, while Sri Jayawardenepura Kotte is the legislative capital city. Colombo is the largest city in Sri Lanka by population, with about 5.6 million people living in the Greater Colombo area. Sri Lanka is sometimes called «The Teardrop of India» due to the island's shape, and it has a long history as a strategicly important area in the region, from the ancient Silk Road trade routes to the modern maritime trade routes. The prehistory of Sri Lanka goes back at least 125 000, with some suggesting that it goes back as far as 500 000 years. One of the first written references to the country  is from the Indian epic Ramayana, which tells the story of how the nation of Lanka was created by the divine sculptor Vishvakarma for Kubera, the God of Wealth.",
  "Asia/Ulaanbaatar":
    "Ulaanbaatar, sometimes anglecized as Ulan Bator, is the capital city of Mongolia. About 1.6 million, of the country's population of 3.3 million people, live in Ulaanbaatar. Mongolia has been inhabited by nomads since prehistoric times, and through various large confederations, dynasties and empires, they have put their mark on global history. The Mongol Empire expansion in the 13th century, under Genghis Khan, is perhaps the most widely known today. Under his successors, the empire stretched from present-day Poland in the west to Korea in the East, covering about 22% of the total land area on Earth. Mongolia has over 250 sunny days a year, earning it it's nickname «Land of the Eternal Blue Sky».",
  "Pacific/Auckland": "Auckland is the largest city in New Zealand.",
  "current-location":
    "🤖 Beep boop, the robot thinks this is where you are located. Did they get it right? 🤖",
};

function updateCities(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#all-cities");
  let funFact = funFacts[cityTimeZone] || "No fun fact available.";
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("HH:mm:ss")}</div>  
      </div>
    <div class="fun-fact"><br>${funFact}</div> 
    <a href="https://julies-world-clock.netlify.app/" class="back-button">Go back</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");

citiesSelectElement.addEventListener("change", updateCities);
