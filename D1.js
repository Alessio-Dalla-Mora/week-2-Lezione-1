/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype principali sono: 
- Stringhe= ossia una sequenza di parole che viene indicata tra apici, Esempio nell'esercizio 1' 
- Numerico= anche queste non devono essere inseriti tra apici (sia singoli che doppi) Es: 10, 100, 10.2, esercizio "2" 
- Booleani= vengono usati nella valutazione di espressioni o controllare se vero o falso, Esempio esercizio 7
- Undefinited= vuol dire che non è stato dato nessun valore al contenuto, Esempio let variable, console.log(variable)--> risulterà undefaned
- Null= vuol dire che non ha valore, non è stato deciso cosa mettere al suo interno, Esempio let anotherVariable = null, console.log(anotherVariable)--> risulterà null, ovvero senza valore */ 

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Alessio'
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Dalla Mora'
console.log(myName)

//const number = 2
number = 4

/*Darà errore perchè la variabile const non permette di essere modificata in seguito e quindi rimarrà sempre quella definita all'inizio, nel nostro caso il N°2.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number3 = 4
x = 12
console.log(number3 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log(name1 != name2)
console.log(name1 !== name2)
