//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for (let index = 0; index < 11; index++) {
    console.log(index);
}

// Using `console.log` log all the even values from 1 to 10.
for (let index = 1; index < 11; index++)
    if (index %2 == 0) {
        console.log(index);
    }

// Using `console.log` log all the od values from 1 to 10.
for (let index = 1; index < 11; index++)
    if (index %2 != 0) {
        console.log(index);
    }

// Calculate the sum of all numbers from 1 to 10.
for (let i = 0; i < 11; i++) {
    sum = (i * (i+1)/2);
    console.log(sum);
}

// Log all the values from 1 to 10 using while loop
let i = 0;
while (i<10) {
    console.log(i);
    i = i+1;
}