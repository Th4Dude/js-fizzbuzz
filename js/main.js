
'use strict'

const ul = document.querySelector('ul.list')

for (let i = 1; i <= 100; i++) {
    
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        const elementoLista = document.createElement('li')
        elementoLista.append('fizzbuzz')
        ul.append(elementoLista)
    } else if ( i % 3 === 0) {
        console.log("Fizz");
        const elementoLista = document.createElement('li')
        elementoLista.append('fizz')
        ul.append(elementoLista)
    } else if ( i % 5 === 0) {
        console.log("Buzz");
        const elementoLista = document.createElement('li')
        elementoLista.append('buzz')
        ul.append(elementoLista)
    } else {
        console.log(i);
        const elementoLista = document.createElement('li')
        elementoLista.append('i')
        ul.append(elementoLista)
    }
}
