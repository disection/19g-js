// function countLetters() {
//     let counter = 0;
//     let sentence = prompt(
//       "Indicar una oración cualquiera:",
//       "Felicidades por completar este reto."
//     );
  
//     let stringLen = sentence.length;
//     let totalA = 0,
//       totalE = 0,
//       totalSpaces = 0;
  
//     sentence = sentence.toLowerCase();
  
//     do {
//       if (sentence[counter] === "a") totalA++;
//       else if (sentence[counter] === "e") totalE++;
//       else if (sentence[counter] === " ") totalSpaces++;
  
//       counter++;
//     } while (counter < stringLen);
//     console.log(
//       `[DO-WHILE]\nA -> ${totalA}\nE -> ${totalE}\nEspacios -> ${totalSpaces}`
//     );
//   }
  
//   function sumNumbers() {
//     let number = parseInt(prompt("Indique un número entre 1 y 100", 50));
//     let result = 0;
//     let counter = 1;
  
//     while (counter <= number) {
//       result += counter;
  
//       counter++;
//     }
//     alert(`"[WHILE]La sumatoria total del 1 hasta el ${number} es ${result}"`);
//   }
  
function sumaTres ( numberOne = 0 , numberTwo = 0 , numberThree =0 ){     
    return numberOne + numberTwo + numberThree
}
  
let a = parseInt(prompt("Escribe un número", 1));
let b = parseInt(prompt("Escribe otro número", 1));
let c = parseInt(prompt("Escribe un último número", 1));

let suma = sumaTres(a, b, c)
console.log (suma)
