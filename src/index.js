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
updateTime();
setInterval(updateTime, 1000);
