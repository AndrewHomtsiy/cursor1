let product1 = 15.678;
let product2 = 123.965;
let product3 = 90.2345;

let Pricelist = [product1, product2, product3];
console.log('Products Price:' + Pricelist);

let PriceMax = Math.max(...Pricelist);
console.log('Max Price:' + PriceMax);
let PriceMin = Math.min(...Pricelist);
console.log('Min Price:' + PriceMin);
let Sum = product1 + product2 + product3;
console.log('Total:' + Sum);
let NewSum = Math.floor(product1) + Math.floor(product2) + Math.floor(product3);
console.log('New Price' + NewSum)

let NewSumBoolean = Math.floor(NewSum) % 2 ? false : true;
console.log("Boolean? " + NewSumBoolean);

let rest = 500 - NewSum;
console.log ('Rest: ' + rest);

let MedianSum = (Sum / 3).toFixed(2);
console.log('Median Price : ' + MedianSum);

let discount = Math.random()*100;
console.log('Your discount is: ' + discount);
let payprice = (Sum * (1 - discount / 100)).toFixed(2);
console.log('Payprice is: ' + payprice);
    let Payprice2 = (Sum/2 - Sum*discount/100).toFixed(2);
    console.log('Total is: ' + Payprice2);
