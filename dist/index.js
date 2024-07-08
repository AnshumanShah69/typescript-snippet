"use strict";
// // class User {
// //     public email:string;
// //     name:string;
// //     private food:string = ""
// //     constructor(email:string,name:string)
// //     {
// //         this.email=email
// //         this.name=name
// //     }
// // }
// // const anshu = new User("anshuman@gmail.com","anshuman")
// // anshu.food = "maggie" 
// //this is marked as private and is accessible inside the class only
// // to use it we have to make it public
// /// this is an example for access specifiers
// // class User {
// //     readonly city:string = "Varanasi"
// //     private _courseTakenCount:number =  3;
// //     constructor(public email:string,public name:string)
// //     {
// //         this.email=email
// //         this.name=name
// //     }
// //     get getInformation():string{
// //         return `the email is ${this.email}`
// //     }
// //     get courseDetails():number{
// //         return this._courseTakenCount
// //     }
// //     set changeCourseCount(_courseTakenCount:number){
// //         if(_courseTakenCount<=1)
// //         {
// //             throw new Error("the course count is less or eq to 1");
// //         }
// //         else{
// //             this._courseTakenCount=_courseTakenCount;
// //         }
// //     }
// // }
// // const anshu = new User("anshuman@gmail.com","anshuman")
// ///this is an example of inheritance
// class User {
//     readonly city:string = "Varanasi"
//     private _courseTakenCount:number =  3;
//     protected _changeMyCount:number =  10;
//     constructor(public email:string,public name:string)
//     {
//         this.email=email
//         this.name=name
//     }
//     get getInformation():string{
//         return `the email is ${this.email}`
//     }
//     get courseDetails():number{
//         return this._courseTakenCount
//     }
//     set changeCourseCount(_courseTakenCount:number){
//         if(_courseTakenCount<=1)
//         {
//             throw new Error("the course count is less or eq to 1");
//         }
//         else{
//             this._courseTakenCount=_courseTakenCount;
//         }
//     }
// }
// class NewUser extends User
// {
//     isFamilyUse : boolean = true;
//     changeMyCount(){
//         this._changeMyCount = 12
//     }
// }
// const anshu = new User("anshuman@gmail.com","anshuman")
