console.log('prova test');

// PALINDROMA

// chiedere all'utente di inserire una parola, e stampa
const userWord = prompt("Inserire una parola");
console.log("La parola inserita è", userWord);

// dichiarazione funzione per capire se la parola inserita è palindroma. La restituisco in minuscolo (toLowerCase). Dichiaro una nuova variabile per rovesciare la parola. La si rovescia con ciclo for. Ciclo if per verificare la condizione.

function isPalindroma(word) {
    word = word.toLowerCase();
    word = word.replaceAll(' ', ''); //sostituisco lo spazio con 'spazio' vuoto, nel caso in cui vengano inserite frasi.
    console.log(word);
    let reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        const letters = word.charAt(i);
        console.log(i, letters);
        reverseWord += letters;
    }

    console.log(word, reverseWord);

    if (word === reverseWord) {
        return true;
    } else {
        return false;
    }
}

if (isPalindroma(userWord)) {
    console.log('La parola inserità è palindroma. Congratulazioni!');
} else {
    console.log('La parola inserita non è palindroma. Riprova!');
}

// PARI e DISPARI

console.log('GIOCHIAMI A PARI E DISPARI?')
// scegliere se si vuole giocare come pari o dispari
let choose = prompt('Vuoi giocare come pari o dispari?').toLowerCase();
// generazione di un numero random da 1 a 5

function getRandomNumber(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
let pcNumber = getRandomNumber(1, 5);

console.log('Il tuo numero è', userNumber);
console.log('Il numero scelto dal computer è', pcNumber);

// controllo se la somma dei numeri è pari o dispari
let sum = userNumber + pcNumber;

// definisco se i numeri inseriti sono pari o dispari attraverso un funzione che controlla il modulo di 2
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(number) {
    if (number % 2 !== 0) {
        return false;
    } else {
        return false;
    }
}

// dichiarazione dei risultati
if (isEven(sum) && choose === 'pari') {
    console.log('Hai vinto!');
} else if (isOdd(sum) && choose === 'dispari') {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!')
}