const form = require('./generalFunctions');

const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
const locations = ['Candyland', 'Dreamland', 'Euland', 'Fermaland', 'Feynland', 'Guiland', 'Quarkland', 'Ferm Island', 'Regiland'];

function animalLegs() {
    let numberOfChickens = form.rand(30);
    let numberOfCows = form.rand(30);
    let total = numberOfChickens + numberOfCows;
    let totalLegs = 2*numberOfChickens + 4*numberOfCows;
    let animal = Math.random() > 0.5 ? 'chickens' : 'cows';
    let string = `On a farm there are a total of ${total} chickens and cows altogether. There are a total of ${totalLegs} legs on the farm. How many ${animal} are there on the farm?`;
    let answerString;
    if (animal === 'chickens') {
        answerString = `Let the total number of chickens be x and the total number of cows be y. Then, we know that x + y = ${total}. Since chickens have 2 legs, and cows have 4 legs, we know that ${totalLegs} = 2x + 4y. Solving this system, we obtain that the number of chickens is ${form.sim(1,1,total,2,4,totalLegs)[0]}`;
    } else {
        answerString = `Let the total number of chickens be x and the total number of cows be y. Then, we know that x + y = ${total}. Since chickens have 2 legs, and cows have 4 legs, we know that ${totalLegs} = 2x + 4y. Solving this system, we obtain that the number of cows is ${form.sim(1,1,total,2,4,totalLegs)[1]}`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function alienEyes() {
    const alienNames = ['Zogs', 'Nogs', 'Noolyles', 'Quaquaqs', 'Omerases', 'Omencils', 'Squitas', 'Vrooms', 'Zooms', 'Lolligers', 'Oompas', 'Loompas', 'Wonkas', 'Wonkies', 'Topuffs', 'Malhams', 'Jakors', 'Cogs', 'Neyners', 'Lettors', 'Nonums', 'Spaceklars', 'Uummoos'];
    const bodyParts = ['legs', 'arms', 'noses', 'feet', 'fingers', 'ears'];
    let firstName;
    let secondName;
    do {
        firstName = alienNames[Math.floor(Math.random()*alienNames.length)];
        secondName = alienNames[Math.floor(Math.random()*alienNames.length)];
    } while (firstName === secondName);
    let bodyPart = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let zogs = form.rand(30);
    let nogs = form.rand(30);
    let zogEyes;
    let nogEyes;
    do {
        zogEyes = form.rand(10) + 1;
        nogEyes = form.rand(10) + 1;
    } while (zogEyes === nogEyes);
    let total = zogs + nogs;
    let totalEyes = zogEyes*zogs + nogEyes*nogs;
    let alien = Math.random() > 0.5 ? firstName : secondName;
    let string = `An alien race has two types of individals: ${firstName} and ${secondName}. ${firstName} have ${zogEyes} ${bodyPart} and ${secondName} have ${nogEyes} ${bodyPart}. On a spaceship there are ${total} ${firstName} and ${secondName} altogether and there are a total of ${totalEyes} ${bodyPart} on the spaceship. If only ${firstName} and ${secondName} are on this spaceship, how many ${alien} are there?`;
    let answerString;
    if (alien === firstName) {
        answerString = `Let x be the number of ${firstName} and y be the number of ${secondName}. We know that x + y = ${total} and that ${zogEyes}x + ${nogEyes}y = ${totalEyes}. Thus, solving this system gives us x = ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[0]}. Thus, there are ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[0]} ${firstName}.`;
    } else {
        answerString = `Let x be the number of ${firstName} and y be the number of ${secondName}. We know that x + y = ${total} and that ${zogEyes}x + ${nogEyes}y = ${totalEyes}. Thus, solving this system gives us y = ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[0]}. Thus, there are ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[1]} ${secondName}.`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function bookQuestion() {
    let firstPage = form.rand(999);
    let numOfPages = form.rand(10);
    let sum = numOfPages*firstPage + ((numOfPages -1)*(numOfPages))/2;

    string = `The sum of ${numOfPages} consecutive page numbers in a book is ${sum}. Find the sum of the biggest and the smallest number.`;
    answerString = `Let the smallest page number be x. Then, we know that ${numOfPages}x + ${((numOfPages -1)*(numOfPages))/2} = ${sum}. Thus, we have x = ${firstPage}. Therefore, the largest page is ${firstPage} + ${numOfPages} -1 = ${firstPage + numOfPages -1}. Therefore, the sum is ${firstPage + numOfPages -1 + firstPage} `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function numSum() {
    let firstNumber = form.rand(80);
    let secondNumber = form.rand(80);
    let sum = firstNumber + secondNumber;
    let diff = firstNumber + secondNumber > 0? firstNumber : secondNumber;
    let somethinger = Math.random() > 0.5 ? 'greater' : 'smaller';
    string = `The sum of two numbers is ${sum}.  The difference between the two numbers is ${diff}.  Find the ${somethinger} number`;
    let answerString;
    if (somethinger === 'greater') {
        answerString = `Let the smaller number be x and the larger number be y. We know that x + y = ${sum} and y - x = ${diff}. Adding these two equations we get 2y = ${sum + diff} which implies that y = ${(sum + diff)/2}`;
    } else {
        answerString = `Let the smaller number be x and the larger number be y. We know that x + y = ${sum} and y - x = ${diff}. Subtracting these two equations we get 2x = ${sum - diff} which implies that x = ${(sum - diff)/2}`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function age() {
    let sisterAgeGap = form.rand(7) + 1;
    let brotherAgeGap = form.rand(6) + 1;
    const maleNames = ['Harry', 'Ron', 'Percy', 'Jack', 'Patrick', 'Kenny', 'Albert', 'Joshua', 'Robert', 'Earnest', 'James', 'Larry', 'Bob', 'Frank', 'Tim'];
    let name = maleNames[Math.floor(Math.random()*maleNames.length)];
    let kelvinAge = form.rand(35) + 15;
    let sisterAge = kelvinAge - sisterAgeGap;
    let brotherAge = sisterAge + brotherAgeGap;
    let yearsAgo = form.rand(10);
    let pastAgeSum = kelvinAge + sisterAge + brotherAge -3*yearsAgo;    
    string = `${name} is ${sisterAgeGap} years older than his sister, but she ${brotherAgeGap} years younger than his brother.  ${yearsAgo} years ago, the sum of their total age was ${pastAgeSum} years.  What is ${name}'s age now?`;
    answerString = `Let ${name}'s current age be x. Then, we have x + x - ${sisterAgeGap} + x - ${sisterAgeGap} + ${brotherAgeGap} - 3*${yearsAgo} = ${pastAgeSum}. Solving this equation, we get x = ${kelvinAge}`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function quadConsec() {
    let numOfConsec = Math.random() > 0.5 ? 2 : 3;
    let x = form.rand(30) + 1;
    let string;
    let answerString;
    if (numOfConsec === 2) {
        let sum = x*x + (x+1)*(x+1);
        let somethinger = Math.random() > 0.5? 'smaller': 'larger';
        string = `The sum of the squares of ${numOfConsec} consecutive integers is ${sum}. Find the ${somethinger} integer.`;
        if (somethinger === 'smaller') {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 = ${sum} which implies that 2x^2 + 2x + 1 - ${sum} = 0. Solving the equation we get x = ${form.quad(2, 2, 1 - sum)[0]}. Thus, the smaller integer is ${form.quad(2,2,1-sum)[0]}`;
        } else {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 = ${sum} which implies that 2x^2 + 2x + 1 - ${sum} = 0. Solving the equation we get x = ${form.quad(2, 2, 1 - sum)[0]}. Thus, the larger integer is ${form.quad(2, 2, 1 - sum)[0]} + 1`;
        }
    } else {
        let sum = x*x + (x+1)*(x+1) + (x + 2)*(x + 2);
        let somethinger = Math.random() > 0.5? 'smallest': 'largest';
        string = `The sum of the squares of ${numOfConsec} consecutive integers is ${sum}. Find the ${somethinger} integer.`;
        if (somethinger === 'smaller') {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 + (x + 2)^2 = ${sum} which implies that 3x^2 + 6x + 5 - ${sum} = 0. Solving the equation we get x = ${form.quad(3,6,5-sum)[0]}. Thus, the ${somethinger} integer is ${form.quad(3,6,5-sum)[0]}`;
        } else {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 + (x + 2)^2 = ${sum} which implies that 3x^2 + 6x + 5 - ${sum} = 0. Solving the equation we get x = ${form.quad(3,6,5-sum)[0]}. Thus, the ${somethinger} integer is ${form.quad(3,6,5-sum)[0] + 2}`;
        }
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function quadSim() {
    let x = form.rand(20) + 5;
    let y = form.rand(20) + 5;
    let sum = x + y;
    let squareSum = x*x + y*y;
    let string = `The sum of two integers is ${sum} and the sum of the squares of the integers is ${squareSum}. Find the two integers.`;
    let answerString = `Let the two integers be x and y. We know that x + y = ${sum} and that x^2 + y^2 = ${squareSum}. If we substitute y = ${sum} - x into the second equation, we get x^2 + (${sum} - x)^2 = ${squareSum}. This implies that 2x^2 - ${2*sum}x + ${sum*sum - squareSum} = 0. Solving this equation, we get that x = ${form.quad(2, -2*sum, sum*sum - squareSum)[0]} or ${form.quad(2, -2*sum, sum*sum - squareSum)[1]}. Substituting x back into the original equation, we get y = ${form.quad(2, -2*sum, sum*sum - squareSum)[1]} or ${form.quad(2, -2*sum, sum*sum - squareSum)[0]}. Thus, the numbers are ${x} and ${y} `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function fence() {
    let totalFence = form.rand(40) + 10;
    let string = `A farmer has a total of ${totalFence}m of fence in order to build a rectangular pen for his sheep. What dimensions should the farmer make the pen in order to maximize its area?`
    let answerString = `Let the pen be x meters by y meters. Then, x + y = ${totalFence/2}. Then, the area of the fence = x(${totalFence/2} - x) = ${totalFence/2}x - x^2. Thus, the maximum point is (${form.quadExt(-1, totalFence/2, 0)[0], form.quadExt(-1, totalFence/2, 0)[1] }). Thus, the dimensions should be ${form.quadExt(-1, totalFence/2, 0)[0]} by ${totalFence - form.quadExt(-1, totalFence/2, 0)[0]}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function merchant() {
    let name = names[Math.floor(Math.random()*names.length)];
    let location = locations[Math.floor(Math.random()*locations.length)];
    let price = (form.rand(50) + 50)*2;
    let products = ['tulip', 'magical pencil', 'spice', 'exotic pineapple', 'sentient lawnmower', 'yodeling leafblower', 'musical vacuum cleaner'];
    let product = products[Math.floor(Math.random()*products.length)];
    let string = `${name} is approached by a strange merchant from ${location}. He offers to sell ${name} some ${product}s. ${name} is very excited becuase ${product}s can be sold for $${price} each. The merchant will charge ${name} as follows: x ${product}s will cost x*x dollars. Assuming that ${name} can sell all of the ${product}s that he buys, how many ${product}s should he buy to maximize his profits?`;
    let answerString = `Let ${name}'s profits be p and let the number of ${product}s that ${name} buys be x. Then, we have the quadratic equation p = ${price}x - x^2. Thus, we maximize ${price}x - x^2. This is maximized at x = ${price}/2. Thus, ${name} should buy ${price/2} ${product}s.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function planet() {

    let location = locations[Math.floor(Math.random()*locations.length)];
    let emotions = ['happiness', 'sadness', 'anger', 'wealth', 'intelligence', 'hungriness', 'strangeness'];
    let emotion = emotions[Math.floor(Math.random()*emotions.length)];
    let a = form.rand(10);
    let b = -form.rand(10);
    let c = form.rand(10);
    let d = -form.rand(10);
    let r1 = parseFloat(-b/a).toFixed(3);
    let r2 = parseFloat(-d/c).toFixed(3);
    let a1 = a*c;
    let b1 = a*d + b*c;
    let c1 = b*d;
    let string = `In ${location}, there is a strange element called emotionium. It expands and contracts according to the ${emotion} of the nearest sentient being. Let the expansion of emotionium be e. ${location}ian physicists have worked out the following formula: e = ${a1}x^2 + ${b1}x + ${c1}, where x is the amount of ${emotion} in the nearest sentient being. What must the ${emotion} of the nearedst sentient being be if the emotionium has neither expanded nor contracted? `;
    let answerString = `Factoring the quadratic, we obtain (${a}x + ${b})(${c}x + ${d}) = 0. Thus, the ${emotion} of the nearest sentient being must be either ${r1} or ${r2}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function projectile() {
    let location = locations[Math.floor(Math.random()*locations.length)];
    let a = form.rand(10);
    let b = -form.rand(10);
    let c = form.rand(10);
    let d = -form.rand(10);
    let r1 = parseFloat(-b/a).toFixed(3);
    let r2 = parseFloat(-d/c).toFixed(3);
    let a1 = a*c;
    let b1 = a*d + b*c;
    let c1 = b*d;
    string = `In ${location}, a projectile is launched into the air. A stopwatch is started several moments before the projectile is launched. Its height at a given time t on the stopwatch is given by the expression ${a1}t^2 + ${b1}t + ${c1}. At what time t was the projectile launched? At what time t will it land?`;
    let launch = r1 > r2 ? r2 : r1;
    let land = r1 > r2 ? r1 : r2;
    answerString = `Factoring the quadratic, we obtain (${a}x + ${b})(${c}x + ${d}) = 0. Thus, the projectile takes off at time t = ${launch} and lands at t = ${land}`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
    
}

function bag() {
    const numberOfThings = form.rand(25)  +50;
    const added = form.rand(25);
    const probability = parseFloat((1/numberOfThings) + (1/(numberOfThings + added))).toFixed(3);
    const numerator = 2*numberOfThings + added;
    const denominator = numberOfThings*(numberOfThings + added);
    
    const stuff = ['students', 'sweets', 'chairs', 'tables', 'computers', 'markers', 'pens', 'apples', 'chocolates', 'badges', 'cupcakes', 'bananas', 'basketballs', 'bottles', 'jellybeans', 'hats', 'bikes', 'blankets', 'books', 'oranges', 'chess pieces'];
    const object = stuff[Math.floor(Math.random()*stuff.length)];
    string = `There are some ${object} in a container. All of them are red, except for one, which is blue. When one of the ${object} is drawn randomly from the container, let the probability of drawing the blue one be p. Then, ${added} new red ${object} are added to the container. Now, let the probability of drawing the blue one be q. Given that p + q = ${numerator}/${denominator}, how many ${object} were there in the container originally?`;
    answerString = `Let n be the number of ${object} originally. We have 1/n + 1/(n + ${added}) = ${probability}. Putting the LHS over a common denominator and then clearing the denominator, we obtain the quadratic ${probability}n^2 + ${added*probability -2}n - a = 0. Solving this equation using the quadratic formula and neglecting the negative value, we obtain that there were ${numberOfThings} ${object} originally.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}
function exam() {
    const numberOfRows = form.rand(20) + 20;
    const added = form.rand(10) + 2;
    const numberOfStudents = numberOfRows*(numberOfRows + added);
    let string = `In an exam hall, tables are arranged in a grid-like fashion, in rows and columns. There are ${added} more columns than rows. If there are a total of ${numberOfStudents} students sitting for the exam, and each one of them has exactly one table, how many rows are there?`;
    let answerString = `Let the number of rows be x. Then, we have x(x + ${added}) = ${numberOfStudents}. Expanding this, we get x^2 + ${added}x - ${numberOfStudents} = 0. Solving this and neglecting the negative value, we get that there are ${numberOfRows} rows in the exam hall.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function wolf() {
    let r1 = form.rand(10);
    let r2 = -form.rand(10);
    let b = -r1 -r2;
    let c = r1*r2;
    
    let string = `A little piggy is running away from a big bad wolf. If the distance between the big bad wolf and the little piggy at time t in seconds is given by t^2 + ${b}t + ${c}, will the big bad wolf catch the little piggy? If so, when?`;
    let answerString = `Yes, the big bad wolf will catch him. Solving the equation t^2 + ${b}t + ${c} = 0 gives roots ${r1} and ${r2}. Thus, he will be caught at ${r1} seconds.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];    
}

wolf();

function wolfSurvive() {
    let b , c;
    do {
        b = form.rand(10);
        c = form.rand(10);
    } while(b*b - 4*c >= 0);

    let string = `A little piggy is running away from a big bad wolf. If the distance between the big bad wolf and the little piggy at time t in seconds is given by t^2 + ${b}t + ${c}, will the big bad wolf catch the little piggy? If so, when?`;
    let answerString = `No, the big bad wolf will not catch him. Evaluating the determinant of the equation t^2 + ${b}t + ${c}, we get ${b*b} - 4*1*${c} < 0, which implies that there are no real roots, and as such the piggy will never be caught by the wolf.`;
    console.log(string);
    console.log(answerString);    
    return [string, answerString];
}

wolfSurvive();

const algebra = [animalLegs, alienEyes, bookQuestion, numSum, age, quadConsec, quadSim, fence, merchant, planet, projectile, bag, exam, wolf, wolfSurvive];
module.exports = algebra;

