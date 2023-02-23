
'use strict'

const ul = document.querySelector('ul.list')

for (let i = 1; i <= 100; i++) {

    const elementoLista = document.createElement('li')

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

        elementoLista.append('fizzbuzz')
        ul.append(elementoLista)
    } else if (i % 3 === 0) {
        console.log("Fizz");
        elementoLista.append('fizz')
        ul.append(elementoLista)
    } else if (i % 5 === 0) {
        console.log("Buzz");
        elementoLista.append('buzz')
        ul.append(elementoLista)
    } else {
        console.log(i);
        elementoLista.innerHTML = (i);
        ul.append(elementoLista)
    }
}
