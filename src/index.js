function updateTime() {
  function updateCity(cityId, timeZone) {
    let cityElement = document.querySelector(`#${cityId}`);
    if (!cityElement) {
      return;
    }

    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    if (!dateElement || !timeElement) {
      return;
    }

    let cityTime = moment().tz(timeZone);

    dateElement.innerHTML = cityTime.format("MMMM Do, YYYY");
    timeElement.innerHTML = cityTime.format("HH:mm:ss");
  }

  let selectedCity = document.querySelector("#cities").value;
  if (selectedCity === "current-location") {
    updateCity(selectedCity, moment.tz.guess());
  } else {
    updateCity("buenos-aires", "America/Argentina/Buenos_Aires");

    updateCity("new-york", "America/New_York");

    updateCity("edinburgh", "Europe/London");

    updateCity("addis-ababa", "Africa/Addis_Ababa");

    updateCity("tokyo", "Asia/Tokyo");
  }
}

const funFacts = {
  "America/Paramaribo":
    "Boasting a population of just under 615,000 individuals and covering approximately 164,000 square kilometers, Suriname stands as the smallest country in South America in both population and land area. The capital city, Paramaribo, accommodates around 240,000 residents. Suriname distinguishes itself as one of the least densely populated nations globally, with nearly half of its populace residing in or near Paramaribo.<br><br>An impressive 93% of Suriname's landscape is adorned with lush rainforests, contributing to its status as a country rich in natural beauty and biodiversity.",
  "Africa/Banjul":
    "Situated on the west coast of Africa and bordered by Senegal, The Gambia stands out as one of the continent's smallest nations. Spanning approximately 11,300 square kilometres, it hosts a population of around 2.8 million people. The capital city, Banjul, holds the distinction of being the most densely populated region in The Gambia, boasting roughly 400,000 residents in the greater Banjul area.<br><br> The Gambia experiences a wet-and-dry tropical climate, characterized by distinct and intense rainy seasons followed by dry periods. Despite limited forest cover, with the Bijo Forest representing the most wooded area, the country displays remarkable biological diversity in both its wildlife and flora. Notably, the Gambian pouched rat (<i>Cricetomys gambianus</i>) has exhibited significant potential in the detection of landmines.",
  "Europe/Oslo":
    "Oslo, Norway's capital, beautifully blends modernity with history along the scenic Oslofjord. As the largest city with over 1.7 million residents, it's the nation's political, economic, and cultural heart. With a rich past dating to the 11th century, Oslo features a harmonious mix of contemporary architecture and historic landmarks like the Akershus Fortress.<br><br>The city's commitment to sustainability is reflected in its green spaces, mirroring the active lifestyle of its residents. Oslo's cultural vibrancy is showcased through world-class museums and theaters, including the Nobel Peace Center, highlighting Norway's dedication to global peace.<br><br>Throughout the seasons, Oslo transforms, offering winter delights like skiing and Northern Lights views, while warmer months bring waterfront festivities and outdoor markets. Oslo's quality of life, progressive values, and stunning natural surroundings make it a captivating destination that seamlessly fuses tradition and innovation.",
  "Asia/Colombo":
    "Colombo, serving as the executive and judicial capital of Sri Lanka, holds a significant role in the nation's governance, while Sri Jayawardenepura Kotte serves as the legislative capital. As the largest city in Sri Lanka by population, Colombo is home to approximately 5.6 million people within the Greater Colombo area. Sri Lanka, often referred to as «The Teardrop of India» due to its distinctive shape, holds a rich historical legacy as a strategically important region, both to the ancient Silk Road trade routes and modern maritime trade routes.<br><br>The roots of Sri Lanka's history extend deep into prehistory, dating back at least 125,000 years, with some suggesting an even more ancient timeline of 500,000 years. The island's significance is highlighted in the Indian epic Ramayana, where it is narrated that Lanka, the nation, was crafted by the divine sculptor Vishvakarma for Kubera, the God of Wealth. This cultural and historical tapestry underscores Sri Lanka's enduring importance in the region.",
  "Asia/Ulaanbaatar":
    "Ulaanbaatar, at times anglicized as Ulan Bator, serves as the capital city of Mongolia. Approximately 1.6 million residents, constituting nearly half of the country's 3.3 million population, call Ulaanbaatar their home. Mongolia's history is deeply rooted in the nomadic lifestyle, with inhabitants tracing their origins to prehistoric times. Across various large confederations, dynasties, and empires, Mongolian influence has left an indelible mark on global history.<br><br>Among the historical milestones, the expansion of the Mongol Empire in the 13th century, led by Genghis Khan, stands out prominently. This empire, under his successors, sprawled from present-day Poland in the west to Korea in the east, encompassing approximately 22% of the Earth's total land area. Mongolia's climate contributes to its unique charm, boasting over 250 sunny days annually and earning the affectionate moniker «Land of the Eternal Blue Sky».",
  "Pacific/Auckland":
    "Auckland, New Zealand's largest city on the North Island, is a bustling metropolis with approximately 1.7 million residents. As part of a nation of around 5 million people, Auckland stands as a cultural and economic powerhouse. Framed by the picturesque Waitematā Harbour, the cityscape harmoniously combines modern architecture, such as the iconic Sky Tower, with historic landmarks. <br><br> Nestled amidst stunning landscapes, Auckland offers a unique blend of urban and natural experiences. Diverse neighborhoods, a rich Maori heritage, and world-class dining contribute to the city's dynamic spirit. From exploring the vibrant waterfront to venturing into nearby volcanic cones, Auckland beckons visitors to immerse themselves in its lively atmosphere and breathtaking scenery.",
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
      <div class="time">${cityTime.format("h:mm[<small>]A[</small>]")}</div>  
      </div>
    <div class="fun-fact"><br>${funFact}</div> 
    <a href="https://julies-world-clock.netlify.app/" class="back-button">Go back</a>`;
  updateTime();
  setInterval(updateTime, 1000);
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCities);

updateTime();
setInterval(updateTime, 1000);
