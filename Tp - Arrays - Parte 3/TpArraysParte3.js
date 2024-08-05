/*1. Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola.*/

let moviesFavorites = [
  "Alicia en el pais de las maravillas.",
  "Y donde estan las rubias.",
  "Iron man.",
];
console.log(moviesFavorites);

/*2. Accede y muestra en la consola el segundo elemento del array pelisFavoritas.*/

console.log(moviesFavorites[1]);

/*3. Declara un array vacío llamado libros y agrega tres elementos.*/

let books = ["Sinsajo.", "Harry Potter.", "Frankenstein."];
console.log(books);

/*4. Elimina el último elemento del array libros y muéstralo en la consola.*/

books.pop();
console.log(books);

/*5. Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola.*/

let colors = ["Blanco.", "Negro.", "Lila.", "Bordo."];
console.log(colors);

/*6. Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.*/

colors.unshift("Plateado.", "Dorado.");
console.log(colors);

/*7. Elimina el primer elemento del array colores y muéstralo en la consola.*/

colors.shift();
console.log(colors);

/*8. Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola*/

let fruits = ["Manzana.", "Uva.", "Pomelo."];

let apple = fruits.find(function (apple) {
  return apple === "Manzana.";
});
console.log("Si, hay una " + apple);

let apples = fruits.some(function (apple) {
  return apple === "Manzana.";
});
console.log(apples);

fruits.includes("Manzana.");

/*9. Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let majorNumber3 = numbers.find(function (number) {
  return number > 3;
});
console.log("El primero numero mayor a tres es " + majorNumber3);

/*10. Ecuentra todos los números menores que 4 en el array numeros.*/

let numbersLessThan4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let number = numbers.filter(function (numbers) {
  return numbers < 4;
});
console.log("Los numeros menores a 4 son: " + number);

/*11. Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.*/

let parameters = ["Cholo"];
console.log(parameters);

function addElement(element, array) {
  return array.push(element);
}
let newElement = addElement("Marcelo Tinelli", parameters);
console.log(newElement);
console.log(parameters);

/*12. Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.*/
console.log(parameters);

function deletedItem(array) {
  return array.shift();
}
let deletedElement = deletedItem(parameters);
console.log(deletedElement);
console.log(parameters);

/*13. Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.*/

let team = ["Derek", "Rafael", "Lorenzo"];
console.log(team);

function lengthArray(array) {
  return array.length;
}
let arrayLength = lengthArray(team);
console.log(arrayLength);

/*14. Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.*/

function checkItem(array, element) {
  return array.includes(element);
}

let item = checkItem(team, "Rafael");
console.log(item);

/*15. Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.*/
console.log(team);

function findElement(array, element) {
  let elementFind = array.find(function (elements) {
    return elements === element;
  });
  return elementFind;
}

let element = findElement(team, "Rafael");
console.log(element);

/*16. Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.*/
console.log(numbers);

function filterArray(array, number) {
  let filterNumber = array.filter(function (numbers) {
    return numbers > number;
  });
  return filterNumber;
}

let filteredNumber = filterArray(numbers, 4);
console.log(filteredNumber);

/*Usando Every o Some, realiza estos ejercicios

17. Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado*/
console.log(numbers);

let NumbersMajorTo0 = numbers.every(function (num) {
  return num > 0;
});
console.log(NumbersMajorTo0);

/*18. Validar que todos los strings son no vacíos*/

let stringss = ["", "alcachofa", "nini"];
console.log(stringss);

let emptyStrings = stringss.every(function (str) {
  return str !== "";
});
console.log(emptyStrings);

/*19. Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado*/

console.log(stringss);

let stringsWithSomething = stringss.every(function (str) {
  return str.length > 0;
});
console.log(stringsWithSomething);

/*20. Confirmar que todos los estudiantes pasaron el examen:*/

let notes = [5, 8, 5, 8, 9, 10];
console.log(notes);

let passTheExam = notes.every(function (numberToApprove) {
  return numberToApprove >= 6;
});
console.log(passTheExam);

/*21. Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
1. Ej: 
2. [1,2,4,5,6,7,8,3,2,4,6]
3. [6,7,8,9,10]*/

console.log(notes);

let notesMajorTo6 = notes.filter(function (numberToApprove) {
  return numberToApprove >= 6;
});
console.log("Las notas mayores o iguales a 6 son: " + notesMajorTo6);

/*22. Verificar si todas las edades son de adultos*/

let age = [23, 12, 65, 33, 14, 56];
console.log(age);

let comingOfAge = age.every(function (majorityAge) {
  return majorityAge >= 18;
});
console.log(comingOfAge);

/*23. Dado un array de edades, verifica si todas las personas son mayores de 18 años.*/

console.log(age);

let majorityAge = age.filter(function (comingOfAge) {
  return comingOfAge >= 18;
});
console.log(majorityAge);

/*24. Comprobar si todos los números son divisibles por 5*/

console.log(numbers);

let numberDivisibleBy5 = numbers.every(function (num) {
  return num % 5 === 0;
});
console.log(numberDivisibleBy5);

/*25. Verificar si al menos un número en un array es mayor que 10. */

console.log(numbers);

let numberMajorTo10 = numbers.some(function (num) {
  return num > 10;
});

console.log(numberMajorTo10);

/*26. Comprobar si al menos un string en un array está vacío.*/

console.log(stringss);

let emptyString = stringss.some(function (str) {
  return str == "";
});
console.log(emptyString);

/*27. Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).*/

console.log(notes);

let notesMinorTo6 = notes.some(function (numberToDisapprove) {
  return numberToDisapprove < 6;
});
console.log(notesMinorTo6);

/*28. Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).*/

console.log(age);

let teenAger = age.some(function (adolescent) {
  return adolescent >= 13 && adolescent <= 17;
});
console.log(teenAger);

/*EJERCICIO DESTRUCTURING*/

let family = [
  "Hermano",
  "Papa",
  "Hijo",
  "Hermana",
  "Mama",
  "Sobrino",
  "Tio",
  "Tia",
  "Abuelo",
  "Abuela",
];

let [Hermano, Papa, , , Mama] = family;
console.log(Hermano + Papa + Mama);
