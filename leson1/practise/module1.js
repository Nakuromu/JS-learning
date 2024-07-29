//-----------Exercise-1-----------//

// let quantity = prompt('Введіть число');

// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

//-----------Exercise-2-----------//

// let elementWidth = '50.25px';

// const result = Number.parseInt(elementWidth);

// console.log(result);

//-----------Exercise-3-----------//

// let elementHeight = '200.74px';

// const result = Number.parseFloat(elementHeight);

// console.log(result);

//-----------Exercise-4-----------//

// let sallary = 1300.16789

// sallary = Number(sallary.toFixed(2))

// console.log(sallary)

//-----------Exercise-5-----------//

// let base = prompt("Enter base");
// base = Number(base);
// console.log(base);

// let power = prompt("Enter power");
// power = Number(power);
// console.log(power);

// const result =  Math.pow(base, power);

// console.log(result);

//-----------Exercise-6-----------//

// const min = 30;
// const max = 80;

// const result  = Math.round(Math.random() * (max-min) + min);

// console.log(result);

//-----------Exercise-7-----------//

// const maxSallary = 5000;
// const minSallary = 500;
// const emloyees = 50;
// let totalBalance = 0;

// for(let i=1; i<=emloyees; i++){
//     const sallary = Math.round(Math.random() * (maxSallary - minSallary) + minSallary);

//     console.log(`ЗП працівника нлмер ${i} - ${sallary}`)

//     totalBalance +=sallary;
// }

// console.log(`Загальний ЗП - ${totalBalance}`)

//-----------Exercise-8-----------//

let totalSpent = 500;
let payment = 500;
let discount = 0;

if(totalSpent>=100 && totalSpent<1000){
    console.log('Бронзовий партнер, знижка 2%');
    discount=0.02;
}else if(totalSpent>=1000 && totalSpent<5000){
    console.log('Залізний партнер, знижка 5%');
    discount=0.05;
}else if(totalSpent>=5000){
    console.log('Золотий партнер, знижка 10%');
    discount=0.1;
} else{
    console.log('Не партнер, знижка 0%');
}

payment -= payment * discount;

console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`)

totalSpent += payment;

console.log(`Загалом витрачено ${totalSpent}`);

