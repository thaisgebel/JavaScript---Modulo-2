/*Consigna:

Con todo lo aplicado las demás clases, vamos a resolver estos ejercicios

Tarea: Resolver los ejercicios, imprimiendo al final el estado actual.

1. Agregar elementos al final de un array:
● Crea un array vacío llamado numbers.
● Agrega los números del 1 al 5 al array.
● Imprime el array resultante.
● Eliminar el último elemento del array.*/

let numbers = [];
numbers.push(1, 2, 3, 4, 5);
console.log(numbers);
numbers.pop();

/*2. Utiliza el array numbers del ejercicio anterior.
● Elimina el último número del array.
● Imprime el array resultante.
● Agregar elementos al principio del array.*/

numbers.pop();
console.log(numbers);
numbers.unshift("hola carlitos hapiush");
console.log(numbers);

/*3. Crea un array vacío llamado colors, agregando cada elemento al principio del array.

● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'.
Eliminar el primer elemento de un array:
● Utiliza el array colors del ejercicio anterior.
● Elimina el primer color del array.*/

let colors = [];
colors.push("red", "blue", "green");
console.log(colors);
colors.shift();
console.log(colors);

/*4. Agregar múltiples elementos al final de un array:

● Crea un array vacío llamado fruits.
● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'.*/

let fruits = [];

fruits.push("apple", "banana", "orange");
console.log(fruits);

/*5. Eliminar múltiples elementos al final de un array:

● Utiliza el array fruits del ejercicio anterior.
● Elimina los últimos dos elementos del array utilizando el método pop.*/

fruits.pop();
fruits.pop();
console.log(fruits);

/*6. Agregar múltiples elementos al principio de un array:

● Utiliza el array fruits del ejercicio 5.
● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'.*/

fruits.unshift("grape", "kiwi");
console.log(fruits);

/*7. Eliminar múltiples elementos al principio de un array:
● Utiliza el array fruits del ejercicio anterior.
● Elimina los primeros dos elementos del array.*/

fruits.shift();
fruits.shift();
console.log(fruits);

/*8.Agregar un elemento específico al final de un array:

● Utiliza el array colors del ejercicio 3.
● Agrega el color 'yellow' al final del array.*/

colors.push("yellow");
console.log(colors);

/*9. Eliminar un elemento específico del principio de un array:

● Utiliza el array colors del ejercicio 9.
● Elimina el primer color del array.*/

colors.shift();
console.log(colors);
