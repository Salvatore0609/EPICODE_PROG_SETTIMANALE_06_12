/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets)
console.log(pets[0], pets[1], pets[2], pets[3]); //gli elementi dell'array

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.sort().reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift("redfish");
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
console.log(cars)
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "12X34XX";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
    brand: "Seat",
    model: "Ibiza",
    licensePlace: "12X34XX",
    color: "Grey",
    trims: ["non so", "non so", "non so"],
});
console.log(cars)
;
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
console.log(justTrims)
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt() === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log(numericArray);

let i = 0
while (i < numericArray.length && numericArray[i] !==66) {
  console.log(numericArray[i]);
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

for (let i = 0; i < charactersArray.length; i++) {
  const characters = charactersArray[i];
  let positionNewArr = []

  switch (characters) {
    case 'a': 
    positionNewArr = 1;
    break;
    case 'b': 
    positionNewArr = 2;
    break;
    case 'c': 
    positionNewArr = 3;
    break;
    case 'd': 
    positionNewArr = 4;
    break;
    case 'e': 
    positionNewArr = 5;
    break;
    case 'f': 
    positionNewArr = 6;
    break;
    case 'g': 
    positionNewArr = 7;
    break;
    case 'h': 
    positionNewArr = 8;
    break;
    case 'i': 
    positionNewArr = 9;
    break;
    case 'j': 
    positionNewArr  = 10;
    break;
    case 'k': 
    positionNewArr = 11;
    break;
    case 'l': 
    positionNewArr = 12;
    break;
    case 'm': 
    positionNewArr = 13;
    break;
    case 'n': 
    positionNewArr = 14;
    break;
    case 'o': 
    positionNewArr = 15;
    break;
    case 'p': 
    positionNewArr = 16;
    break;
    case 'q': 
    positionNewArr = 17;
    break;
    case 'r': 
    positionNewArr = 18;
    break;
    case 's': 
    positionNewArr = 19;
    break;
    case 't': 
    positionNewArr = 20;
    break;
    case 'u': 
    positionNewArr = 21;
    break;
    case 'v': 
    positionNewArr = 22;
    break;
    case 'w': 
    positionNewArr = 23;
    break;
    case 'x': 
    positionNewArr = 24;
    break;
    case 'y': 
    positionNewArr = 25;
    break;
    case 'z': 
    positionNewArr = 26;
    break;
    default: positionNewArr = "Carattere non valido"; 
    break;
  }

  console.log("Il carattere " + characters + " è alla posizione " + positionNewArr + " nell'alfabeto");
}



 
