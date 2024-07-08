"use strict";
// //for abstract classes we cannot create an object its like a blueprint 
// abstract class TakeMyPhoto
// {
//     ///for abstract class we dont give the definition and not the body
//     constructor(
//         public cameraType:string,
//         public filterType:string
//     ){}
//     abstract makeContent():void;
//     monetize():number{
//         return 1000
//     }
// }
// class Snapchat extends TakeMyPhoto
// {
//     constructor(
//         public cameraType:string,
//         public filterType:string,
//         public noOfPhotos:number
//     ){
//         super(cameraType,filterType);
//     }
//     getInfo() : void
//     {
//         console.log("THe info is gathered");
//     }
//     //we can also use the override keyword for the same
//     makeContent(): void {
//         console.log("hi there")
//     }
// }
// const newUser = new Snapchat("HDR","Jakarta",5);
// newUser.monetize()
