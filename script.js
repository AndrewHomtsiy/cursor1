let product1 = 15.678;
let product2 = 123.965;
let product3 = 90.2345;
let Bank = 500;

const priceList = [product1, product2, product3];
console.log('Products Price:' + priceList);

const PriceMax = Math.max(...priceList);
console.log('Max Price:' + PriceMax);
const PriceMin = Math.min(...priceList);
console.log('Min Price:' + PriceMin);
const Sum = product1 + product2 + product3;
console.log('Total:' + Sum);
const NewSum = Math.floor(product1) + Math.floor(product2) + Math.floor(product3);
console.log('New Price: ' + NewSum)

const newRoundSum = (Math.round(NewSum/100))*100 ;
document.writeln("Rounded to hundreds: " + newRoundSum); 

const NewSumBoolean = Math.floor(NewSum) % 2 ? false : true;
console.log("Boolean? " + NewSumBoolean);

const rest = Bank - Sum;
console.log ('Rest: ' + rest);

const MedianSum = (Sum / 3).toFixed(2);
console.log('Median Price : ' + MedianSum);

const discount = Math.random()*100;
console.log('Your discount is: ' + discount);
const payprice = (Sum * (1 - discount / 100)).toFixed(2);
console.log('Payprice is: ' + payprice);
const Payprice2 = (Sum/2 - Sum*discount/100).toFixed(2);
    console.log('Total is: ' + Payprice2);

    console.log(`
    Найвища ціна: ${PriceMax} грн <br>
    Найнижча ціна: ${PriceMin} грн <br>
    Сумарна вартість всіх товарів: ${Sum} грн <br>
    Сумарна вартість всіх товарів без копійок: ${NewSum} грн <br>
    Сума всіх товарів (округлена в меншу сторону) парна: ${NewSumBoolean} <br>
    Решта з 500 грн: ${rest} грн <br>
    Середнє значення: ${MedianSum} грн <br>
    Сумарна вартість всіх товарів зі знижкою: ${payprice} грн <br>
    Чистий прибуток: ${Payprice2} грн
`);

