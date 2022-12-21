// exporting module

console.log('exporting module');

const shoppingCost = 10;
export const cart = [];
/*
export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`);
};*/

const totalPrice = 234;
const totalQuantity = 10;

export {totalPrice, totalQuantity as tq};

export default function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`);
};