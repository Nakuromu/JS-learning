//-----------Exercise-1-----------//

const friends = [
    {name: 'Mango', online: true},
    {name: 'Kiwi', online: false},
    {name: 'Poly', online: false},
    {name: 'Ajax', online: true},
];

// console.table(friends);


// const findFriendByName = function(allfriends, friendName){

//     for (const friend of allfriends) {
        
//         if(friend.name === friendName){
//             return 'Finded';
//         }
//     }

//     return 'Not finded';
// }

// console.log(findFriendByName(friends, 'Poly'))
// console.log(findFriendByName(friends, 'Polly'))
//-----------Exercise-2-----------//

// const getAllNames = function(allfriends){

//     let names = [];

//     for(const friend of allfriends){

//         names.push(friend.name);
//     }

//     return names;
// }

// console.log(getAllNames(friends))

//-----------Exercise-3-----------//

// const getOnlineFriends = function(allfriends){
//     const onlineFriends = [];

//     for (const friend of allfriends) {
//         if(friend.online){
//             onlineFriends.push(friend);
//         }

//     }

//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// const getOflineFriends = function(allfriends){
//     const oflineFriends = [];

//     for (const friend of allfriends) {
//         if(!friend.online){
//             oflineFriends.push(friend);
//         }

//     }

//     return oflineFriends;
// }

// console.log(getOflineFriends(friends));

//-----------Exercise-4-----------//

// const getFriendByOnlineStatus = function(allfriends){
//     const friendByStatus = {
//         online: [],
//         ofline: [],
//     }

//     for (const friend of allfriends) {
//         if(friend.online){
//             friendByStatus.online.push(friend);
//             continue;
//         }

//         friendByStatus.ofline.push(friend)
//     }

//     return friendByStatus;
// }

// console.log(getFriendByOnlineStatus(friends));

//-----------Exercise-5-----------//

// const authors = {
//     kiwi: 4,
//     mango: 9,
//     poly: 5,
//     ajax: 7,
// }

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {

// //    const [name, rating] = entry;

//     console.log(name, rating);
// }

//-----------Exercise-5-----------//

const cart = {
    items: [],
    getItems(){
        return this.items;
    },
    add(product){
        for (const item of this.items) {
            if(item.name === product.name){
                item.quantity +=1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }

        this.items.push(newProduct);
    },
    remove(productName){

        for(let i=0; i<this.items.length; i++){
            const {name} = this.items[i];

            if(productName === name){
                this.items.splice(i,1);
            }
        }
    },
    clear(){
        this.items = [];
    },
    countTotalPrice(){
        let total = 0;

        for(const item of this.items){
            total+=item.price * item.quantity;
        }

        return total;
    },
    increaseQuantity(productName){},
    decreseQuantity(productName){},
}

cart.add({name:'apple', price: 50});
cart.add({name:'grape', price: 60});
cart.add({name:'grape', price: 60});
cart.add({name:'grape', price: 60});
cart.add({name:'lemon', price: 70});
cart.add({name:'lemon', price: 70});
cart.add({name:'strawbary', price: 80});
cart.add({name:'strawbary', price: 80});
cart.add({name:'strawbary', price: 80});

//cart.remove('lemon');

console.table(cart.getItems());

console.log(cart.countTotalPrice());

cart.clear();