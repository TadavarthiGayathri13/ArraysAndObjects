const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning of the shopping cart if it's not already there
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end of the shopping cart if it's not already there
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

//  Remove 'Honey' if you are allergic to honey
if (shoppingCart.includes('Honey')) {
    const indexToRemove = shoppingCart.indexOf('Honey');
    shoppingCart.splice(indexToRemove, 1);
}

// Modify 'Tea' to 'Green Tea'
const indexToModify = shoppingCart.indexOf('Tea');
if (indexToModify !== -1) {
    shoppingCart[indexToModify] = 'Green Tea';
}

console.log(shoppingCart);
