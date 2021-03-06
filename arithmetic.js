const form = require('./generalFunctions');
const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];

function bell() {
    let bellTime1;
    let bellTime2;
    let  bellTime3;
    let commonality = form.rand(5);
    do {
        bellTime1 = commonality*(form.rand(20) + 3);
        bellTime2 = commonality*(form.rand(20) + 3);
        bellTime3 = form.rand(60) + 10;
    } while (bellTime1 === bellTime2 || bellTime1 == bellTime3 || bellTime2 === bellTime3);
    const time = form.rand(10);
    const day = form.rand(20);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October', 'November', 'December'][Math.floor(Math.random()*11 + 1)];
    let string = `Three wolves howl at regular intervals of ${bellTime1} minuites, ${bellTime2} minuites, and ${bellTime3} minuites respectively. Given that they howl together at ${time} on the ${day}th of ${month}, how long in minuites will it be before they howl together again.`;
    let answerString = `Taking the lowest common multiple of ${bellTime1}, ${bellTime2}, and ${bellTime3} we get ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)}. Thus, the next time that they howl together wil be in ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)} minuites`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function sweets() {
    let number1;
    let number2;
    let number3;
    let commonality = form.rand(5);
    do {
        number1 = commonality*(form.rand(20) + 3) + 10;
        number2 = commonality*(form.rand(20) + 3) + 10;
        number3 = form.rand(60) + 10;
    } while (number1 === number2 || number1 == number3 || number2 === number3);
    let number = form.rand(10);
    const stuff = ['students', 'sweets', 'chairs', 'tables', 'computers', 'markers', 'pens', 'apples', 'chocolates', 'badges', 'cupcakes', 'bananas', 'basketballs', 'bottles', 'jellybeans', 'hats', 'bikes', 'blankets', 'books', 'oranges', 'chess pieces'];
    const thing = stuff[Math.floor(Math.random()*stuff.length)];
    let string = `When some ${thing} are divided into groups of ${number1}, ${number2}, and ${number3} respectively, there is always ${number} left over. What is the minimum possible number of ${thing}?`;
    let answerString = `Let the number of ${thing} be x. Then, ${number1}, ${number2}, and ${number3} all divide x - ${number}. Thus the minimum value of x - ${number} is just the lowest common multiple of ${number1}, ${number2}, and ${number3}. Hence, the minimum possible value for x is ${form.gcd([number1, number2, number3]) + number}. `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function posNeg() {
    let firstName;
    let secondName;
    do {
        firstName = names[Math.floor(Math.random()*names.length)];
        secondName = names[Math.floor(Math.random()*names.length)];
    } while (firstName === secondName);
    let initialTemp = form.rand(50);
    let finalTemp = -form.rand(30);
    let timeHeld1 = form.rand(10);
    let tempChange = initialTemp - finalTemp;
    let timeHeld2 = form.rand(10);
    let numOfTimesFaster = form.rand(9) + 1;
    let rate1 = parseFloat(tempChange/timeHeld1).toFixed(3);
    let rate2 = parseFloat(rate1*numOfTimesFaster).toFixed(3);
    let secondChange = parseFloat(rate2*timeHeld2).toFixed(3);
    let endTemp = parseFloat(finalTemp - secondChange).toFixed(3);
    const stuff = ['student', 'sweet', 'chair', 'table', 'computer', 'marker', 'pen', 'apple', 'chocolate', 'badge', 'cupcake', 'banana', 'basketball', 'bottle', 'jellybean', 'hat', 'bike', 'blanket', 'book', 'orange', 'chess piece'];
    const thing = stuff[Math.floor(Math.random()*stuff.length)];
    let string = `${firstName} and ${secondName} are magical snow monsters with the power to freeze things by touching them. When ${firstName} touches a ${thing} for ${timeHeld1} seconds, its temperature reduces from ${initialTemp} degrees to ${finalTemp} degrees. ${secondName} can cool an object ${numOfTimesFaster} times as fast as ${firstName}. If ${secondName} touches the ${thing} for ${timeHeld2} seconds, what is its final temperature?`;
    let answerString = `The total temperature change when ${firstName} touches the object is ${initialTemp} - ${finalTemp} = ${tempChange}. Thus, the rate of cooling was ${tempChange}/${timeHeld1} = ${rate1}. Thus, the rate of cooling of ${secondName} is ${rate2}. Thus, the second temperature change is ${rate2}*${secondChange} = ${secondChange}. Thus, the final temperature is ${endTemp} degrees.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function comets() {
    let bellTime1;
    let bellTime2;
    let  bellTime3;
    let commonality = form.rand(5);
    do {
        bellTime1 = commonality*(form.rand(20) + 3);
        bellTime2 = commonality*(form.rand(20) + 3);
        bellTime3 = form.rand(60) + 10;
    } while (bellTime1 === bellTime2 || bellTime1 == bellTime3 || bellTime2 === bellTime3);
    const time = form.rand(20) + 1990;
    const year = time + Number(parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0));
    let string = `Three comets pass through our solar system every ${bellTime1} years, ${bellTime2} years, and ${bellTime3} years respectively. Given that they last passed through our solar system together in ${time}, when will they next pass through our solar system together?`;
    let answerString = `Taking the lowest commen multiple of ${bellTime1}, ${bellTime2}, and ${bellTime3} we get ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)}. Thus, the next time that they will pass through our solar system together will be in ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)} years in ${year}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function excercise() {
    let excercises = ['push up', 'sit up', 'pull up', 'squat'];
    let excercise = excercises[Math.floor(Math.random()*excercises.length)];
    let name = names[Math.floor(Math.random()*names.length)];
    let numOfDays = form.rand(100) + 100;
    let numOfExcercises = ((numOfDays + 1)*numOfDays)/2;
    let string = `${name} is trying to get better at ${excercise}s. He has decided that on the first day of his training he will do 1 ${excercise}, on the second day he will do 2 ${excercise}s, ... , on the nth day, he will do n ${excercise}s. On day ${numOfDays}, how many ${excercise}s will he have done throughout his training.`;
    let answerString = `The number of ${excercise}s that he will have done is equal to the ${numOfDays}th triangular number. Thus, he will have done ${numOfDays}*${numOfDays + 1}/2 = ${numOfExcercises} ${excercise}s in total.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

excercise();

function giveOut() {
    name = names[Math.floor(Math.random()*names.length)];
    const stuff = ['sweets', 'chairs', 'tables', 'computers', 'markers', 'pens', 'apples', 'chocolates', 'badges', 'cupcakes', 'bananas', 'basketballs', 'bottles', 'jellybeans', 'hats', 'bikes', 'blankets', 'books', 'oranges', 'chess pieces'];
    let thing1, thing2;
    do {
        thing1 = stuff[Math.floor(Math.random()*stuff.length)];
        thing2 = stuff[Math.floor(Math.random()*stuff.length)];
    } while (thing1 === thing2);
    let object1, object2;
    do {
        object1 = stuff[Math.floor(Math.random()*stuff.length)];
        object2 = stuff[Math.floor(Math.random()*stuff.length)];
    } while (object1 === object2);
    let num1, num2;
    do {
        num1 = 2*form.rand(100) + 4;
        num2 = 2*form.rand(100) + 4;
    } while (num1 === num2);
    let string = `${name} has ${num1} ${thing1} and ${num2} ${thing2}. He is giving them out in packages. If he needs to use all the ${thing1} and ${thing2}, what is the greatest number of packages that he can give out?`;
    let answerString = `The greatest number of packages possible is the greatest common divisor of ${num1} and ${num2} which is ${form.gcd([num1, num2])}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

giveOut();

function moons() {
    let bellTime1;
    let bellTime2;
    let  bellTime3;
    let commonality = form.rand(5);
    do {
        bellTime1 = commonality*(form.rand(20) + 3);
        bellTime2 = commonality*(form.rand(20) + 3);
        bellTime3 = form.rand(60) + 10;
    } while (bellTime1 === bellTime2 || bellTime1 == bellTime3 || bellTime2 === bellTime3);
    const time = form.rand(20) + 1990;
    const year = time + Number(parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0));
    let string = `Supermoons occur once every ${bellTime1} years. Blue moons occur once every ${bellTime2} years, and blood moons occur once every ${bellTime3} years respectively. Given that they last occured together in ${time}, when will they next they will occur together?`;
    let answerString = `Taking the lowest common multiple of ${bellTime1}, ${bellTime2}, and ${bellTime3} we get ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)}. Thus, the next time that they will occur together will be in ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)} years in ${year}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

moons();

function golf() {
    let firstName;
    let secondName;
    let thirdName;
    do {
      firstName = names[form.rand(names.length) - 1];
      secondName = names[form.rand(names.length) - 1];
      thirdName = names[form.rand(names.length) - 1];
    } while (firstName === secondName || firstName === thirdName || secondName === thirdName);
    let bellTime1;
    let bellTime2;
    let bellTime3;
    let commonality = form.rand(5);
    do {
        bellTime1 = commonality*(form.rand(10) + 3);
        bellTime2 = commonality*(form.rand(10) + 3);
        bellTime3 = form.rand(10) + 10;
    } while (bellTime1 === bellTime2 || bellTime1 == bellTime3 || bellTime2 === bellTime3);

    let string = `${firstName} goes golfing every ${bellTime1} days. ${secondName} goes golfing every ${bellTime2} days. ${thirdName} goes golfing every ${bellTime3} days. If they last went golfing together today, how many days will it be before they all go golfing again?`;
    let answerString = `Taking the lowest common multiple of ${bellTime1}, ${bellTime2}, and ${bellTime3} we get ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)}. Thus, the next time that they go golfing together wil be in ${parseFloat(form.lcm([bellTime1, bellTime2, bellTime3])).toFixed(0)} days`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}
golf();

const arithmetic = [comets, posNeg, sweets, bell, excercise, giveOut, moons, golf];
module.exports = arithmetic;



