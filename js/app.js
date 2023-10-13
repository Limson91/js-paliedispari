console.log('prova test');

// PALINDROMA

// chiedere all'utente di inserire una parola, e stampa
const userWord = prompt("Inserire una parola");
console.log("La parola inserita è", userWord);

// dichiarazione funzione per capire se la parola inserita è palindroma. La restituisco in minuscolo (toLowerCase). Dichiaro una nuova variabile per rovesciare la parola. La si rovescia con ciclo for. Ciclo if per verificare la condizione.

function isPalindroma(word) {
    word = word.toLowerCase();
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