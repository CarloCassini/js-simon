console.log("js ok");

// millisecondi in un giorno == 86400000

// Creare una data di base
let timeNow = new Date();
let deadline = new Date();
console.log(timeNow);
// imposto la data di deadline;
if (timeNow.getHours() >= 9 && timeNow.getMinutes >= 30) {
  deadline.setDate(timeNow.getDate());
} else {
  deadline.setDate(timeNow.getDate() + 1);
}
deadline.setHours(9);
deadline.setMinutes(30);
deadline.setSeconds(0);
deadline.setMilliseconds(0);

// creo timing function
let countdown = setTimeout(countdownFunction, 1000);
// let countdown = setInterval(countdownFunction, 1000);

function countdownFunction() {
  console.log(timeNow);
  console.log(deadline);

  timeNow = new Date();
  let milsNow = Date.parse(timeNow);
  let milsDeadline = Date.parse(deadline);
  console.log(milsNow);
  console.log(milsDeadline);

  let restTime = milsDeadline - milsNow;
  let endDate = restTime;
  console.log(restTime);

  // valorizzo la pagina web
  // giorni
  let CalcDays = Math.floor(restTime / 86400000);
  let CalcDaysmils = restTime / 86400000;
  if (CalcDays < 10) {
    CalcDays = "0" + CalcDays;
  }
  restTime = restTime - 86400000 * CalcDays;
  console.log("giorni" + restTime);

  // ore
  let calcHous = Math.floor(restTime / 3600000);
  let calcHousmils = restTime / 3600000;
  if (calcHous < 10) {
    calcHous = "0" + calcHous;
  }
  restTime = restTime - 3600000 * calcHous;
  console.log("ore" + restTime);

  // minuti
  let calcMins = Math.floor(restTime / 60000);
  let calcMinsmils = restTime / 60000;
  if (calcMins < 10) {
    calcMins = "0" + calcMins;
  }
  restTime = restTime - 60000 * calcMins;
  console.log("minuti" + restTime);

  // secondi
  let calcSecs = Math.floor(restTime / 1000);
  let calcSecsmils = restTime / 1000;
  if (calcSecs < 10) {
    calcSecs = "0" + calcSecs;
  }
  restTime = restTime - 1000 * calcSecs;
  console.log("secondi" + restTime);

  document.getElementById("seconds").innerHTML = calcSecs;
  document.getElementById("minutes").innerHTML = calcMins;
  document.getElementById("hours").innerHTML = calcHous;
  document.getElementById("days").innerHTML = CalcDays;

  if (endDate <= 0) {
    clearInterval(countdown);
    alert("tempo scaduto");
  }
}
