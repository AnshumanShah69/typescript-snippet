// interface Student {
//     name:string,
//     subject:string,
// } 

// interface Player
// {
//     name:string,
//     sport:string,
//     isPlaying:boolean
// }

// function isAllRounder(account: Student | Player)
// {
//     if("isAdmin" in account)
//     {
//         return account.isAdmin
//     }
//     else
//     {
//         return false
//     }
// }


// type Fish = {swim:() => void};
// type Bird = {fly:() => void};
// function isFish(pet:Fish | Bird):pet is Fish
// {
//     return (pet as Fish).swim !== undefined
// }

// function getFood(pet: Fish | Bird)
// {
//     if(isFish(pet))
//     {
//         pet 
//         return "fish food"
//     }
//     else
//     {
//         pet 
//         return "bird Food"
//     }
// }  