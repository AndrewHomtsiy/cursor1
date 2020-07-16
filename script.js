const product1 = 15.678;
const product2 = 123.965;
const product3 = 90.2345;
const Bank = 500;

const Pricelist = [product1, product2, product3];
console.log('Products Price:' + Pricelist);

const PriceMax = Math.max(...Pricelist);
console.log('Max Price:' + PriceMax);
const PriceMin = Math.min(...Pricelist);
console.log('Min Price:' + PriceMin);
const Sum = product1 + product2 + product3;
console.log('Total:' + Sum);
const NewSum = Math.floor(product1) + Math.floor(product2) + Math.floor(product3);
console.log('New Price: ' + NewSum)

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

