/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstChoise = prompt ("Inserisci un numero");

const secondChoise = prompt ("Inserisci un altro numero");

console.log(firstChoise, secondChoise);

if (firstChoise < secondChoise) {
    console.log(secondChoise);
    
} else if (secondChoise < firstChoise) {
    console.log(firstChoise);
} else {
    console.log("The numbers are equal");
}