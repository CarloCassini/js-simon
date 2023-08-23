console.log("js ok");

// millisecondi in un giorno == 86400000

// Creare una data di base
let timeNow = new Date();
let deadline = new Date();

// imposto la data di deadline;
deadline.setDate(timeNow.getDate() + 1);
deadline.setHours(9);
deadline.setMinutes(30);
deadline.setSeconds(0);
deadline.setMilliseconds(0);

console.log(deadline);
