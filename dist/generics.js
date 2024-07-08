"use strict";
//so basically the generic enables us to reuse the component and also it make us lock the datatype that is gonna be recieved and that is gonna be sent and and returned
const myscore = [];
const names = [];
function checkOne(val) {
    return val;
}
///problem here is how many types are we gonna specif
function checkTwo(val) {
    return val;
}
///the problem of using any is that it can take any value and return any value as such
///to overcome this situation we have to use the generics and define the type
function checkFour(val) {
    return val;
}
// checkFour<WIFI>({});
///so here we are specifying the retrun type value to be T, and the input is an array of values of Type T ,from this array we need to get the value from the array and return the same datatype of value
function getMyProducts(products) {
    return products[3];
}
///gonna use the arrow functon for the same
const getMyNewProducts = (products) => {
    return products[4];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, { connection: "12414", username: "anshuman2002", password: "13145" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
