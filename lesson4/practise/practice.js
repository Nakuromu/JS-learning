//-----------Exercise-1-----------//

// const genereteID = () =>  '_' + Math.random().toString(36).substr(2,9);


// const createProduct = (productData, callback)=>{
//     const newProduct = {...productData, id: genereteID() };

//     callback(newProduct);
// }

// const logProduct = (product) => {
//     console.log(product);
// }

// const logTotalPrice = (product) => {
//     console.log(product.price * product.quantity);
// }

// createProduct(
//     {
//         name: 'orange',
//         price: 30,
//         quantity: 3,
//     },
//     logTotalPrice
// )

//-----------Exercise-2-----------//

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     name: 'Andrii',
//     lastName: 'Shevchenko',
//     balance: 618,
//     withdraw(amount, onSuccess, onError){
//         if(amount > TRANSACTION_LIMIT){
//             onError('Сума є більша за ліміт транзакції');
//         } else if(amount > this.balance){
//             onError('Сума більша ніж доступно на балансі');
//         } else{
//             this.balance -= amount;

//             onSuccess('Зняття відбулось успішно!');
//         }
//     },

//     deposit(amount, onSuccess, onError){
//         if(amount > TRANSACTION_LIMIT){
//             onError('Сума є більша за ліміт транзакції');
//         } else if(amount <= 0){
//             onError('Сума має бути більша 0');
//         } else{
//             this.balance += amount;

//             onSuccess('Депозит відбувся успішно!');
//         }
//     },
// };

// function handleSuccess(message){
//     console.log(`Success! ${message}`);
// }

// function handleError(message){
//     console.log(`Error! ${message}`);
// }

// account.withdraw(400, handleSuccess, handleError)
// account.withdraw(800, handleSuccess, handleError)
// account.withdraw(1200, handleSuccess, handleError)
// account.deposit(1200, handleSuccess, handleError)
// account.deposit(200, handleSuccess, handleError)
// account.deposit(0, handleSuccess, handleError)

//-----------Exercise-3-----------//

// const each = (array, callback) => {
//     const resulArray = [];

//     for (const num of array) {
//         const number = callback(num);

//         resulArray.push(number)
//     }

//     return resulArray;
// }


// console.log(each([2, 5, 3, 19, 67], (value) => value * 2))

//-----------Exercise-4-----------//

// function logItems (items) {
//     items.forEach((element, index) => {
//         console.log(`${index} - ${element}`);
//     });
// }

// logItems(['Mango', 'Poly', 'Ajax']);

//-----------Exercise-5-----------//

// function printContactsInfo({names, phones}){
//     const namesArray = names.split(',');
//     const phonesArray = phones.split(',');

//     namesArray.forEach((element, index) => {
//         console.log(`${element}: ${phonesArray[index]}`);
//     });
// }


// printContactsInfo({
//     names: 'Jacob,William,Simon',
//     phones: '456752543,324354645,3453453453'
// })

//-----------Exercise-6-----------//

// const calculateAverage = (...args) => {
//     let total = 0;

//     args.forEach((number) => {
//         total +=number;
//     })

//     return total / args.length;
// }

// console.log(calculateAverage(2,4,6,7))

//-----------Exercise-7-----------//

const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]

//  const GetNames = (arr) => arr.map((element) => element.name);

//  console.log((GetNames(users)));

// const getMoney = (arr, money) => users.map((user) => ({...user, balance: user.balance + money}));

// console.table(getMoney(users, 1000));

// const filterByPrice = (arr, treshold) => arr.filter((element) => element.balance > treshold);

// console.table(filterByPrice(users, 3000))

// const getOnlineUser = (arr) => arr.filter((element) => element.isActive);

// console.table(getOnlineUser(users))

// const getUserByGender = (arr, gender) => arr.filter((element) => element.gender === gender);

// console.table(getUserByGender(users, 'male'));

// const getUserByEmail = (arr, email) => arr.find((element) => element.email === email)

// console.table(getUserByEmail(users, "blackburndotson@furnigeer.com"))

// const sortByDecendingBalence = (arr) => [...arr].sort((a,b) => a.balance - b.balance);

// console.table(sortByDecendingBalence(users))

// const sortByName = (arr, order) => [...arr].sort((a,b) => {
//     if (order === 'asc'){
//         return a.name.localeCompare(b.name);
//     }

//     return b.name.localeCompare(a.name);
// })

// console.table(sortByName(users, 'asc'))

// const getTotalBalance = (arr) => arr.reduce((acc, element) => element.balance + acc, 0)

// console.log(getTotalBalance(users))