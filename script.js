// importing module
/*
import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
addToCart('iphone', 12);
console.log(price, tq);*/

console.log('importing module');
/*
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('iphone', 12);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.tq);*/

// using default import
import add, {cart} from './shoppingCart.js';
add('pizza', 3);
add('bread', 2);
add('burger', 4);

console.log(...cart);