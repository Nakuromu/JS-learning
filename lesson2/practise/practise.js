//-----------Exercise-1-----------//

// const cart = [23, 45, 67, 89, 76, 23, 45]
// let total = 0;

// // for (const value of cart) {
// //     total += value;
// // }

// for(let i=0; i < cart.length; i++){
//     total += cart[i];
// }

// console.log(total)

//-----------Exercise-2-----------//

// const numbers = [1, 5, 6, 2, 7, 14, 78, 31, 22];
// let total = 0;

// for (const number of numbers) {
//     if(number%2 === 0){
//         total+=number
//     }
// }

// console.log(total)

//-----------Exercise-3-----------//

// const logins = ['mango', 'ajax', 'poly', 'kiwi'];
// const loginToFind = 'mango';

// let massege = logins.includes(loginToFind) ? "Логін знайдений" : "Логін не знайдено";

// console.log(massege);

//-----------Exercise-4-----------//

// const numbers = [15, 5, 6, 2, 7, 14, 78, 31, 22];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if(number < smallestNumber){
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);

//-----------Exercise-5-----------//

// const friends = ['mango', 'ajax', 'poly', 'kiwi'];
// let string = '';

// // for (const friend of friends) {
// //     string +=friend + ',';
// // }

// // console.log(string.slice(0, string.length-1));

// string = friends.join(', ');

// console.log(string);

//-----------Exercise-6-----------//

// const string = 'JavaScript';

// const letters = string.split('');

// let invertedString = '';

// for (const letter of letters) {
    
//     const isLowerCase = letter === letter.toLowerCase();

//     invertedString += isLowerCase ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);

//-----------Exercise-7-----------//

// const title = "Top 10 banefits of React framework"

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

//-----------Exercise-8-----------//

// const arr1 = [3, 5, 12, 2];
// const arr2 = [8, 15, 3];
// let total = 0;

// const numbers = arr1.concat(arr2);

// for (const number of numbers) {
//     total+=number;
// }

// console.log(total);

//-----------Exercise-9-----------//

// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// //console.log(index);

// cards.splice(index, 1);

// console.table(cards);

///-----///

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);

///-----///

// const cardToReplace = 'Карточка-4';

// const index = cards.indexOf(cardToReplace);

// cards.splice(index, 1, 'Оновлена-Карточка-4');

// console.table(cards);

//-----------Exercise-10-----------//

// const CalculateTotalPrice = function (items) {
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// }

// console.log(CalculateTotalPrice([1, 3, 5, 7, 9]));

//-----------Exercise-11-----------//

// const logins = ['mango', 'ajax', 'poly', 'kiwi'];

// const findLogin = function (allLogins, loginToFind){

//     for (const login of allLogins) {
//         if(login === loginToFind){
//             return 'Логін знайдено';
//         }

//         return 'Логін не знайдено';
//     }
// }

// console.log(findLogin(logins, 'mango'))

//-----------Exercise-12-----------//

// const CalculateSum = function (...numbers) {
//     let total = 0;

//     for (const number of numbers) {
//         total += number;
//     }

//     return total;
// }

// console.log(CalculateSum(1, 3, 5, 7, 9));
