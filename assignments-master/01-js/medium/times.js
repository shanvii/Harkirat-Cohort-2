/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 --> output showed: 0
2. Sum from 1-100000 --> 2
3. Sum from 1-1000000000 --> 906
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


// done
function calculateTime(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++)
        sum += i;
}

const currDate1 = new Date();
const time1 = currDate1.getTime();

calculateTime(1000000000);

const currDate2 = new Date();
const time2 = currDate2.getTime();

console.log(time2-time1);