/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* for (let i = 0; i <= 10; i++) {
    let userChoise = Number(prompt("Inserisci un numero"));

}

console.log(); */

let sum = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("Inserisci un numero"))
    console.log(userNumber);
    sum = sum + userNumber;
}

console.log(sum);
