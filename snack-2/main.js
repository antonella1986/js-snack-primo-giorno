/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstChoise = prompt("Scrivi una parola");

const secondChoise = prompt("Scrivi un'altra parola");

console.log(firstChoise, secondChoise);


if (firstChoise < secondChoise) {
    console.log(firstChoise);
    
} else if (secondChoise < firstChoise) {
    console.log(secondChoise);
} else {
    console.log("The length is equal");
}