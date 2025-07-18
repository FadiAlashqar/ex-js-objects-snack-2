// SNACK 1
// In riga 7 il console.log ci mostrerà 'Double Cheese Burger', nel secondo invece 500.
// In memoria è stato creato un solo oggetto, il secondo è solamente un riferimento, non una copia indipendete.

// SNACK 2
// In entrambi i console.log quello che vedremo sarà "Salad", questo perchè con lo spread operatore viene effettuata una copia solo del primo livello delle propreità dell'oggetto, array/ogetti annidati rimagono dei riferimenti, se andiamo a fare una modifica sul secondo, questa avverrà anche sul primo.
// In memoria sono stati creati due oggetti in questo caso.

// SNACK 3
// In questo caso sono stati creati tre oggetti in memoria, il metodo utilizzato effettua una copia indipendete dell'oggetto.

// SNACK 4
// L'oggetto chef comprende una funzione, nessuno dei metodi che abbiamo visto permette di crearne una clone, dobbiamo dunque forzare la copie col seguente modo:
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const secondChef = { ...chef, makeBurger: chef.makeBurger };
console.log('chef', chef);
console.log('secondChef', secondChef);

// Per clonare l'oggetto restaurant l'unico metodo utilizzabile è structuredClone(), quest'ultimo è in grado di effettuare una copia profonda e soprattutto può copiare ogetti complessi come in questo caso le date.