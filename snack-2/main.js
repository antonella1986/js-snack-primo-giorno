/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstChoise = Text(prompt("Scrivi una parola"));

const secondChoise = Text(prompt("Scrivi un'altra parola"));

console.log(firstChoise, secondChoise);


if (firstChoise < secondChoise) {
    console.log(secondChoise);
    
} else if (secondChoise < firstChoise) {
    console.log(firstChoise);
} else {
    console.log("The length is equal");
}