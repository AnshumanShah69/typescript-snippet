// //so basically the generic enables us to reuse the component and also it make us lock the datatype that is gonna be recieved and that is gonna be sent and and returned

// const myscore:Array<number> = []
// const names:Array<string> = []

// function checkOne(val:boolean | number): boolean | number{
//     return val;
// }
// ///problem here is how many types are we gonna specif

// function checkTwo(val:any): any{
//     return val;
// }

// ///the problem of using any is that it can take any value and return any value as such
// ///to overcome this situation we have to use the generics and define the type

// function checkFour<T>(val:T):T{
//     return val
// }
// /// the advantage of generic is that we can pass on our own datatype after defining it example

// interface WIFI{
//     brand:string,
//     type:string,
//     price:number,
// }

// // checkFour<WIFI>({});

// ///so here we are specifying the retrun type value to be T, and the input is an array of values of Type T ,from this array we need to get the value from the array and return the same datatype of value
// function getMyProducts<T>(products:T[]):T{
//     return products[3];
// }

// ///gonna use the arrow functon for the same

// const getMyNewProducts = <T>(products: T[]):T=>{
//     return products[4];
// }


// // const getMyNewProducts = <T,>(products: T[]):T=>{
// //     return products[4];
// // }
// //the comma is used to distinguish the jsx syntax and the one that is generic




// ///this is another usecase of the generics in which one datatype extends another datatype that is defined in the interface and that compulsorily needs to be implemented when calling the function
// interface Database {
//     connection:string,
//     username:string,
//     password:string,
// } 

// function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
//     return{
//         valOne,
//         valTwo,
//     }
// }
// anotherFunction(3,{connection:"12414",username:"anshuman2002",password:"13145"});
// ///or we could have given the generic type as Database itself to initialize the values from it

// interface Quiz
// {
//     name:string,
//     type:string,
// }
// interface Course{
//     name:string,
//     author:string,
//     subject:string
// }

// class Sellable<T>{
//     public cart: T[] = []

//     addToCart(product:T)
//     {
//         this.cart.push(product)
//     }
// }