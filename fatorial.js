
/* FATORIAL 5*/
const fatorial = 5;
let resultado = 0;

resultado = fatorial * (fatorial - 1)*(fatorial - 2)*(fatorial - 3)*(fatorial - 4);
console.log("O resultado é: " + resultado)



/* FATORIAL 6*/
const fatorial6 = 6;
let resultado2 = 0;

resultado2 = fatorial6 * (fatorial6 - 1)*(fatorial6 - 2)*(fatorial6 - 3)*(fatorial6 - 4)*(fatorial6 - 5);
console.log("O resultado é: " + resultado2)



/* FATORIAL 10*/
const fatorial10 = 10;
let resultado3 = 0;

resultado3 = fatorial10 * (fatorial10 - 1)*(fatorial10 - 2)*(fatorial10 - 3)*(fatorial10 - 4)*(fatorial10 - 5)*(fatorial10 - 6)*(fatorial10 -7)*(fatorial10 - 8)*(fatorial10 - 9);
console.log("O resultado é: " + resultado3);



/* FATORIAL CALCULO */


const fatorialx = 30;
let i = 0;
let resultadox = 0;


resultadox = fatorialx;
console.log(resultadox + "!");
for (i = 1; i < fatorialx; i++) {
    console.log(resultadox + " = " +resultadox+"* ("+fatorial+ " - " + i +")");

    resultado = resultadox * (fatorial - i);
    console.log(resultadox + "=" + i);

}