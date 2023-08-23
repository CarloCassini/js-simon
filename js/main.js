console.log("js ok");

// millisecondi in un giorno == 86400000

// Creare una data di base
let timeNow = new Date();
let deadline = new Date();

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
let countdown = setInterval(countdownFunction(deadline), 1000);

function countdownFunction(end) {
  let tempo = 2;
  timeNow = new Date();
  console.log(deadline);
  //   if (tempo <= 0) {
  //     clearInterval(countdown);
  //     alert("tempo scaduto");
  //   }
}
