/*1. Tienes dos listas de productos en tu tienda online. Combina estas listas en una sola usando lo visto anteriormente y mostrarlo por consola.

let electronics = ['laptop', 'phone', 'tablet']; 
let accessories = ['headphones', 'charger', 'case'];*/

let electronics = ["laptop", "phone", "tablet"];
console.log(electronics);

let accessories = ["headphones", "charger", "case"];
console.log(accessories);

let electronicsAndAccessories = [...electronics, ...accessories];
console.log("Juntos con sprell queda como: " + electronicsAndAccessories);

// let accessoriesAndElectronics = [electronics.concat(accessories)];
// console.log(accessoriesAndElectronics);

/*2. Tienes una lista de los productos más vendidos. Extrae el primero y el segundo producto usando destructuring.
let bestSellers = ['laptop', 'phone', 'tablet', 'monitor'];*/

let bestSellers = ["laptop", "phone", "tablet", "monitor"];
console.log(bestSellers);

let [laptop, , , monitor] = bestSellers;
console.log(laptop + " y " + monitor);

/*3. Verifica si el producto phone existe en la lista de productos, si existe, mostrar por consola un mensaje “Existe el producto [nombre del producto]”
let saleItems = ['laptop', 'phone', 'headphones'];*/

saleItems = ["laptop", "phone", "headphones"];
console.log(saleItems);

function searchProduct(item, array) {
  let products = array.find(function (element) {
    return element === item;
  });

  if (products) {
    return console.log("Existe el producto " + products + ".");
  } else {
    return console.log("No se encontro su producto.");
  }
}
let searchProducts = searchProduct("phone", saleItems);

/*4. Verifica si un producto específico está en la lista de deseos. Si existe, mostrar por consola un mensaje “El producto existe, su nombre es [nombre del producto]”
let wishlist = ['laptop', 'phone', 'headphones'];*/

let wishlist = ["laptop", "phone", "headphones"];

/* function wishProduct(item, array) {
  let productoEncontrado = array.find(function (elemento) {
    return elemento === item;
  });

  if (productoEncontrado) {
    return console.log(
      "El producto existe, su nombre es " + productoEncontrado
    );
  } else {
    return console.log("No se encontro su producto.");
  }
}


let product = wishProduct("laptop", wishlist);*/

/*function wishProduct(item, array) {
  let productoEncontrado = array.some(function (elemento) {
    return elemento === item;
  });

  if (productoEncontrado) {
    return console.log("El producto existe");
  } else {
    return console.log("No se encontro su producto.");
  }
}
let product = wishProduct("nion", wishlist);*/

function wishProduct(item, array) {
  let productoEncontrado = array.includes(item);

  if (productoEncontrado) {
    return console.log("El producto existe");
  } else {
    return console.log("No se encontro su producto.");
  }
}
let product = wishProduct("laptop", wishlist);

/*5. Filtra los productos que incluya con la letra 'p' en la lista.
let products = [
  a. 'laptop',
  b. 'phone',
  c. 'tablet',
  d. 'printer', 
  e. 'pen',
  f. 'monitor',
  g. 'keyboard',
  h. 'mouse',
  i. 'headphones',
  j. 'camera',
  k. 'notebook'];
*/

let products = [
  "laptop",
  "phone",
  "tabelt",
  "printer",
  "pen",
  "monitor",
  "keyboard",
  "mouse",
  "headphones",
  "camera",
  "notebook",
];

let productsWithP = products.filter(function (item) {
  return item.includes("p");
});
console.log(productsWithP);

/*6. Escribe una función combineProductLists que tome dos listas de productos y las combine en una sola usando la sintaxis spread.*/
let food1 = ["choripan"];
console.log(food1);
let food2 = ["morzilla"];
console.log(food2);

combineFoodLists = [...food1, ...food2];
console.log(combineFoodLists);

/*7. Crea una función getTopTwo que tome una lista de productos y devuelva los dos primeros usando destructuring.*/

let getTopTwo = ["Mejunje ", "Mejunjosio", "Majanjunje", "Mijinjuje"];
console.log(getTopTwo);

let [Mejunje, Mejunjosio, , ,] = getTopTwo;
console.log(Mejunje + Mejunjosio);

/*8. Escribe una función isOnSale que verifique si algún producto de una lista de productos en oferta es un artículo específico.
Ejemplo, si tengo una lista de productos electrónicos, y quiero que el producto en oferta sea celular, entonces ese es el que debería ser tomado en cuenta a la hora de validar dentro de nuestra función.*/

let meatInSale = ["cuadril", "lomito", "bife", "asado", "ternera"];
console.log(meatInSale);

function meatSale(item, array) {
  let meat = array.find(function (elemento) {
    return elemento === item;
  });

  if (meat) {
    return console.log("El producto " + meat + " esta en oferta.");
  } else {
    return console.log("El producto que busca no esta en oferta.");
  }
}
let Sale = meatSale("bife", meatInSale);

/*9. Crea una función areAllWordsLong que verifique si todas las palabras en una lista tienen más de tres letras.*/
console.log(meatInSale);

function areAllWordsLong(array) {
  let words = array.every(function (str) {
    return str.length > 3;
  });

  if (words) {
    return console.log("Todas las palabras son largas.");
  } else {
    return console.log("No todas las palabras son largas");
  }
}
let wordsLong = areAllWordsLong(meatInSale);

/*10. Crea una función areAllEven que verifique si todos los números en una lista son pares.*/

let numbers = [2, 4, 6, 8, 10, 12];

function areAllEven(array) {
  let numbers = array.every(function (num) {
    return num % 2 == 0;
  });

  if (numbers) {
    return console.log("Todas los numeros son par.");
  } else {
    return console.log("No todos los numeros son par.");
  }
}

let numbersEven = areAllEven(numbers);

/*11. Escribe una función findProductWithLetter que encuentre el primer producto en la lista que contiene una letra específica.*/

let sellTrees = ["Sakura", "Abeto", "Abedul", "Pino"];
console.log(sellTrees);

function findProductWithLetter(array, letter) {
  let foundTrees = array.find(function (str) {
    return str.includes(letter);
  });
  if (foundTrees) {
    return console.log(
      "El primer producto que se encuentra en la lista es el " +
        foundTrees +
        "."
    );
  } else {
    return console.log("No existe un item con esa letra");
  }
}

let productWithLetter = findProductWithLetter(sellTrees, "k");

/*12. Define una función createProduct que agregue a un array el producto, pero que antes verifique si el producto ya existe en ese array
Ejemplo de uso:
Si el producto existe Mostrar mensaje El producto [nombre] ya existe

Si no existe, lo agrego al array y retorno los valores.*/

console.log(sellTrees);

function createProduct(array, item) {
  let foundProduct = array.find(function (element) {
    return item === element;
  });

  if (foundProduct) {
    console.log("El producto " + item + " ya existe.");
  } else {
    array.push(item);
    return array;
  }
}
let productTree = createProduct(sellTrees, "puchila");
console.log(productTree);

/*13.Escribe una función arePricesInRange que compruebe si todos los precios de una lista están entre 50 y 150.
Ejemplos:
    const prices1 = [60, 80, 120, 150];
    const prices2 = [40, 80, 120, 200];*/

let prices = [60, 80, 120, 150];

function arePricesInRange(array) {
  let everyPrices = array.every(function (price) {
    return price >= 50 && price <= 150;
  });

  if (everyPrices) {
    return console.log("Todos los precios estan entre 50 y 150");
  } else {
    return console.log("No todos los precios estan entre 50 y 150");
  }
}

let controlPrices = arePricesInRange(prices);

/*14. Define una función formatExpensiveProducts que tome una lista de precios y agregue una etiqueta Caro a los precios superiores a 100.
Ejemplo:
const prices = [80, 120, 200, 90];
['$80', 'Caro: $120', 'Caro: $200', '$90']*/

let price = [80, 120, 200, 90];

function formatExpensiveProducts(array) {
  let priceWithCaro = array.map(function (prices, index) {
    if (array[index] >= 100) {
      return "Caro: $" + prices;
    } else {
      return "$" + prices;
    }
  });
  console.log(priceWithCaro);
}
let pricesWhitString = formatExpensiveProducts(price);

/*15. Define una función addIfNotExists que añada un producto a una lista solo si no está ya presente. */

let sellFruits = ["kiwi", "pomelo", "naranja", "uvas"];

function addIfNotExists(array, item) {
  let existProduct = array.includes(item);

  if (existProduct) {
    return "El producto ya extiste";
  } else {
    array.push(item);
    return array;
  }
}
let addItemNoExist = addIfNotExists(sellFruits, "Cucuxclan");
console.log(addItemNoExist);

/*16. Crea una función createDescriptions que tome una lista de nombres de productos y una lista de precios, y devuelva una lista de descripciones que combine ambos usando map.
Se debe ver algo parecido a esto (La descripción puede cambiar según lo que estemos contemplando nosotros):
['laptop cuesta $1000', 'phone cuesta $500', 'tablet cuesta 300']*/

let vegetables = ["lechuga", "pepino", "zanahoria"];
let vegetablesPrices = [200, 10, 500];

function createDescriptions(products, prices) {
  let description = products.map(function (product, index) {
    return product + " cuesta " + prices[index];
  });
  console.log(description);
}
let verduleria = createDescriptions(vegetables, vegetablesPrices);

/*17. Crea una función addToWishlist que añada un producto a la lista de deseos solo si el producto no está ya presente y la lista de deseos tiene menos de 5 productos. Realizar validaciones correspondientes.*/

let wishlists = ["kiwi", "pomelo", "naranja", "uvas", "limon"];

function addIfNotExist(array, item) {
  let existProduct = array.includes(item);

  if (existProduct) {
    return "El producto ya extiste";
  } else if (array.length < 5) {
    array.push(item);
    return array;
  } else {
    return "No se puede agregar llegaste al limite.";
  }
}
let addItem = addIfNotExist(wishlists, "");
console.log(addItem);

/*18. Define una función inventoryMessages que tome una lista de productos y una lista de cantidades en inventario, devolviendo una lista de mensajes que indiquen si cada producto está en stock o agotado.
Ejemplo de salida:
// ['laptop está en stock con 5 unidades', 'phone está agotado', 'tablet está en stock con 3 unidades']*/

console.log(vegetables);
let vegetablesStock = [7, 0, 30];

function inventoryMessages(products, stock) {
  let descriptionProduct = products.map(function (product, index) {
    if (stock[index] > 0) {
      return product + " hay " + stock[index];
    } else {
      return product + "No hay stock";
    }
  });

  console.log(descriptionProduct);
}
let stockItem = inventoryMessages(vegetables, vegetablesStock);
