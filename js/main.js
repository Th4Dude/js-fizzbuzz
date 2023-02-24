
'use strict'

const ul = document.querySelector('ul.list')

for (let i = 1; i <= 100; i++) {

    const elementoLista = document.createElement('li')
    ul.append(elementoLista)

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        elementoLista.append('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log("Fizz");
        elementoLista.append('fizz')
    } else if (i % 5 === 0) {
        console.log("Buzz");
        elementoLista.append('buzz')
    } else {
        console.log(i);
        elementoLista.innerHTML = (i);
    }
}
