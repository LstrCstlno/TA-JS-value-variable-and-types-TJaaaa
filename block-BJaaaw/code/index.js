// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = Number(prompt("Write a number"));
if
  (number = number %2 === 0){  
    alert("Number is even");
}
else{
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Type a number"));
let num2 = Number(prompt("Type another number"));
if(num1>num2)
{
  alert(`max value is  ${num1}`)
}
else{
  alert(`max value is  ${num2}`)
}



// 3. Convert the above code using`?` terniary operator
let num3 = Number(prompt("Type a number"));
let num4 = Number(prompt("Type another number"));
(num3>num4) ? alert(num3) : alert(num4);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt('What is the name of your house?');
if(houseName == "stark")
{
  alert("Winter is coming");
}
  else if(houseName == "Lannister"){

  alert("A lannister always pays his debt")
}
else{
  alert("All men must die");
}

// 5. Convert the above code using`?` terniary operator

let houseNameB = prompt("What is the name of your house?");
(houseNameB == "stark") ? alert("Winter is coming") : (houseNameB == "lannister") ? alert("A lannister always pays his debt") :alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("type the number of a month"));
switch(true)
{
  case month == 1 : 
    alert("January has 31 days");
    break;
  case month == 2 :
    alert("febraury has 28 days");
    break;
  case month == 3 :
    alert("march has 31 days");
    break;
  case month == 4 :
    alert("april has 30 days");
    break;
  case month == 5 :
    alert("may 31 has days");
    break;
  case month == 6 :
    alert("june has 30 days");
    break;
  case month == 7 :
    alert("july has 31 days");
    break;
  case month == 8 :
    alert("august  has 31 days");
    break;
  case month == 9 :
    alert("september has 30 days");
    break;
  case month == 10 :
    alert("october has 31 days");
    break;
  case month == 11 :
    alert("november has 30 days");
    break;
  case month == 12 :
    alert("december has 31 days");
    break;
  default:
    alert("not a month");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt("Enter your monthly salary here"));
let tax10 = salary*0.1;
let tax20 = salary*0.2;
let tax30 = salary*0.3;
switch(true)
{
  case salary <= 20000:
    alert(`Your in hand salary will be ${salary - tax10}`);
    break;
  case salary <= 40000:
    alert(`Your in hand salary will be ${salary - tax20}`);
    break;
  default:
  alert(`Your in hand salary will be ${salary - tax30}`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

// USING IF ELSE

let marks = Number(prompt("Enter your marks scored"));
if(marks > 100)
  {
    alert(`Marks cant be greater than 100`);
  }
else if (marks >= 80 && marks < 100) {
  alert(`Grade A`);
}
else if (marks >= 50 && marks < 80) {
  alert(`Grade B`);
}
else if (marks >= 30 && marks < 50) {
  alert("Grade C");
}
else{
  alert(`Grade D`);
}

// USING SWITCH
let marks2 = Number(prompt("Enter your marks scored"));
switch (true)
{
  case marks2 > 100:
    alert(`Marks cant be greater than 100`);
    break;
  case marks2 >= 80 && marks2 < 100:
    alert(`Grade A`);
    break;
  case marks2 >= 50 && marks2 < 80:
    alert(`Grade B`);
    break;
  case marks2 >= 30 && marks2 < 50:
    alert(`Grade C`);
    break;
  default:
    alert(`Grade D`);
    break;
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

// USING IF ELSE
let weather = prompt("What is the weather like outside?");
if (weather == "sunny") {
  alert("Wear a T-shirt");
}
else if (weather == "rainy") {
  alert("Don't forget to take your raincoat");
}
else if (weather == "hot") {
  alert("get a hanky");
}
else if (weather == "freezing") {
  alert("Get your sweater on");
}
else{
  alert("Not a valid input");
}


// USING SWITCH
let weather2 = prompt("What is the weather like outside?");
switch (true) {
  case weather2 == "sunny":
    alert("Wear a T-shirt");
    break;
  case weather2 == "rainy":
    alert("Don't forget to take your raincoat");
    break;
  case weather2 == "hot":
    alert("Get a hanky");
    break;
  case weather2 == "freezing":
    alert("Get your sweater on");
    break;
  default:
    alert("Not a valid input")
    break;
}
