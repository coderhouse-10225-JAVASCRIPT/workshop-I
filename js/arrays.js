let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

//vegetables.find( x => x > numeroABuscar );

let pos = 1 // Eso podriamos buscar en el array con un bucle y encontral el indice el objeto a eliminar
let n = 2 // Cantidad de elementos a eliminar. Si quiere eliminar 1 ponen 1

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]