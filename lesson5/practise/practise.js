'use strict'
//-----------Exercise-1-----------//

// const user1 = {
//     name: 'John',
//     age: 22,
//     city: 'London',

//     showThis(){
//         console.log(this);
//     },

//     sayHi(){
//         console.log(`Hi, ${this.name}`);
//     },

//     sayFromWhere(){
//         console.log(`${this.name} is from ${this.city}`);
//     }
// }

// //user1.sayFromWhere();

// const user2 ={
//     name: 'Anna',
//     age: 25,
//     city: 'Krakiv',

//     showThis: user1.showThis,

//     sayHi: user1.sayHi,

//     sayFromWhere: user1.sayFromWhere,
// }

// user2.showThis();

// user2.sayHi();

// user2.sayFromWhere();

//-----------Exercise-2-----------//

// const user = {
//     name: 'John',
//     surname: 'Smith',

//     getFullNmae(){
//         return `${this.name} ${this.surname}`;
//     },
// }

// function makeInvoice(callback){
//     console.log(`Обробляємо заявку від ${callback.call(user)}`);
// }

// makeInvoice(user.getFullNmae);

//-----------Exercise-3-----------//

// function getData(room){
//     console.log(`${this.username} is ${this.age} years old. Your room is ${room}`);
// }

// const user = {
//     username: 'John',
//     age: 29,
// }

// getData.call(user, 21);

//-----------Exercise-4-----------//

// function greetGuest(greeting){
//     console.log(`${greeting}, ${this.username}`);
// }

// const user = {
//     username: 'Anna',
//     age: 30,
// };

// greetGuest.apply(user, ['Hello'])

//-----------Exercise-5-----------//

// function func (...rest) {
//     return Math.max.call(null, ...rest)
// }

// const result = func(10, -200, 300, 900);

// console.log(result)

//-----------Exercise-6-----------//

// const fordAuto ={
//     make: 'Ford',
//     mark: 'Mondeo',
//     wheels: 4,

//     getInfo(){
//         console.log(`${this.make} ${this.mark} has ${this.wheels} wheels`)
//     }
// }

// const getInfo = fordAuto.getInfo.bind(fordAuto);

// getInfo()

//-----------Exercise-7-----------//

// const calculator = {
//     a: 0,
//     b:0,

//     write(a,b) {
//         this.a = a;
//         this.b = b;
//     },

//     getSum() {
//         return this.a + this.b;
//     },

//     getMult() {
//         return this.a * this.b;
//     },
// }

// calculator.write(50, 100);

// console.log(calculator.getSum());
// console.log(calculator.getMult());

//-----------Exercise-8-----------//

// const ledder = {
//     step: 0,

//     up (){
//         this.step +=1;
//         return this;
//     },

//     down() {
//         if(this.step === 0){
//             console.log('You are in 0 step');
//             return this;
//         }

//         this.step -= 1;
//         return this;
//     },

//     showStep() {
//         console.log(this.step);
//     }
// }

// ledder.up().up().down().up().showStep()

//-----------Exercise-9-----------//

// const chopShop = {
//     stones: [
//         {name: 'Emerald', price: 1200, quantity: 4},
//         {name: 'Diamond', price: 2200, quantity: 3},
//         {name: 'Sapphier', price: 1400, quantity: 6},
//         {name: 'Ruby', price: 700, quantity: 5},
//     ],
//     calcTotalPrice(stoneName) {

//     const stoneObj = this.stones.find(({name}) => name.toLowerCase() === stoneName.trim().toLowerCase());

//     if(!stoneObj){
//         return `Stone with name ${stoneName} not found`;
//     }

//     return stoneObj.price * stoneObj.quantity;
//     },

// }

// console.log(chopShop.calcTotalPrice('Diamond'))

//-----------Exercise-10-----------//

// class Blogger {
//     isHuman = true;

//     constructor({age, email, numberOfPosts, topics}){
//         this.age = age;
//         this.email = email;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo(){
//         return `User ${this.email} is ${this.age} years old and have ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({
//     email: 'mango@gm.com',
//     age: 27,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// })

// console.log(mango);
// console.log(mango.getInfo())

// mango.updatePostCount(5);

// console.log(mango.getInfo())


//-----------Exercise-11-----------//

// class Storage {
//     constructor(products){
//         this.items = products;
//     }

//     getItems(){
//         return this.items;
//     }

//     addNewItem(item){
//         this.items.push(item);
//     }
// }

// const coursesStorage = new Storage(['HTML', 'CSS', 'JS'])

// coursesStorage.addNewItem('React');

// console.log(coursesStorage)

//-----------Exercise-12-----------//

// class User {
//     #email;
//     #login;

//     constructor({email, login}){
//         this.#email = email;
//         this.#login = login;
//     }

//     get email(){
//         return this.#email;
//     }

//     set email(newEmail){
//         this.#email = newEmail;
//     }

//     get login(){
//         return this.#login;
//     }

//     set login(newLogin){
//         this.#login = newLogin;
//     }
// }

// const mango = new User({
//     email: 'mango@at.com',
//     login: 'mango',
// })

// console.log(mango)

// mango.email = 'mangooo@at.com'

// mango.login = 'mangooo'

// console.log(mango)

//-----------Exercise-13-----------//

// class Notes{
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     }

//     constructor(notesArray){
//         this.items = notesArray;
//     }

//     addNote(note){
//         this.items.push(note);
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: 'My first note',
//     priority: Notes.Priority.LOW,
// })

// console.log(myNotes);
//-----------Exercise-14-----------//

// class Toggle {

//     constructor({isOpen = false} = {}){
//         this.on = isOpen;
//     }
// }

// const toggle = new Toggle()

// console.log(toggle);