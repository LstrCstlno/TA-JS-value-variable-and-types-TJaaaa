/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [323.96] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [29.97] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [329.94 ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

// your code goes here

// ⛑ Answer of the above will `$334.76`.

// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;

// var bank_balance = 303.91;
// var amount = 0;

var bank_balance = 303.91;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var amount = 0;
const TAX_RATE = 0.08;
const SPENDING_THRESHOLD = 200;

while (amount < bank_balance) {
    amount += PHONE_PRICE;
    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE
    }
}

tax = amount*TAX_RATE;

totalAmount = tax + amount;

alert(` the total Amount is $${totalAmount}`);

if (totalAmount>bank_balance) {
    alert('You cannot afford the phone');
}else{
    alert("you can afford the phone");
}