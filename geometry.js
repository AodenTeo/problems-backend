const form = require('./generalFunctions');
const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];


function shadow() {
    let lamp;
    let man;
    do {
        man = form.rand(50) + 150;
        lamp = form.rand(100) + 200
    } while (man >= lamp);
    let standDist = form.rand(500);
    let commonRatio = lamp/man;
    let shadowLength = parseFloat(standDist/(commonRatio -1)).toFixed(3);
    let string = `A man whose height is ${man}cm stands ${standDist}cm away from a ${lamp}cm street lamp. How long is his shadow?`;
    let answerString = `Let the first ray of light that is not blocked by the man be L. Let the point at which L almost touches the man's head be B, the point that L touches the ground be C, and the point at which L touches the lamp be A. Let the point at which the lamp meets the ground be X and let the point at which the man is standing be Y. Note that triangle ACX is similar to triangle BCY. Thus, the length of the shadow is ${shadowLength}cm.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function comp() {
    let number = form.rand(20) + 1;
    let smallerAngle = parseFloat(180/(number + 1)).toFixed(3);
    let largerAngle = 180 - smallerAngle;
    let string = `Two angles are complimentary such that the larger angle is ${number} times larger than the smaller angle. Find both angles.`;
    let answerString = `Let the smaller angle be x. Then, we have ${number + 1}x = 180. Solving this equation, we get x = ${smallerAngle}. Thus the two angles are ${smallerAngle} and ${largerAngle}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function simTri() {
    let m;
    let n;
    do {
        m = form.rand(20);
        n = form.rand(20);
    } while (m === n);
    let x = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
    let y = 2 * m * n;
    let c = m * m + n * n;
    let AD = parseFloat((x*y)/c).toFixed(3);
    let BD = parseFloat((x*x)/c).toFixed(3);
    let AM = parseFloat((AD*BD)/x).toFixed(3);
    let string = `Let ABC be a right triangle with angle CAB = 90 degrees. Let AD be an altitude of triangle ABC and let DM be an altitude of triangle ADC. Given that BD = ${BD} and AM = ${AM}, find AB.`;
    let answerString = `Note that triangle ABD is similar to triangle DAM. Thus, AB/BD = AD/AM which implies that AB/${BD} = AD/${AM}. Hence, we have AD = ${AM}*AB/${BD} = AD. Thus, BD^2 = (1 - (${AM}/${BD})^2)*AB^2 which implies that (1 - (${AM}/${BD})^2)*AB^2 = ${parseFloat(BD*BD).toFixed(3)}. Solving this equation, we get AB = ${x}. `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

simTri();

function ramp() {
    let m;
    let n;
    do {
        m = form.rand(20);
        n = form.rand(20);
    } while (m === n);
    let a = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
    let b = 2 * m * n;
    let c = m * m + n * n;
    let random = form.rand(10) + 1;
    let a1 = a*random;
    let b1 = b*random;
    let c1 = c*random;
    let speed = form.rand(10);
    let time = parseFloat(a/speed).toFixed(3);
    const activities = [{activity: 'cycling', surface: 'ramp'}, {activity: 'running', surface: 'incline'}, {activity: 'skateboarding', surface: 'ramp'}, {activity: 'skiing', surface: 'ski slope'}, {activity: 'driving', surface: 'ramp'}, {activity: 'roller blading', surface: 'ramp'}, {activity: 'snowboarding', surface: 'slope'}];
    const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
    let variation = activities[Math.floor(Math.random()*activities.length)];
    let name = names[Math.floor(Math.random()*names.length)];
    let string = `${name} is ${variation.activity} up a ${variation.surface} at a speed of ${speed}m/s. The ${variation.surface} is ${a1}m long horizontally. After ${time} seconds, ${name} has travelled ${a} meters horizontally. How tall is the ${variation.surface}?`;
    let answerString = `The distance travelled in ${time} seconds is ${time}*${speed} = ${c}. Thus, the total length of the surface of the ${variation.surface} is (${a1}/${a})*${c} = ${c1}. Thus, using the pythagorean theorem, we get that the height of the slope is equal to sqrt(${c1}^2 - ${a1}^2) = ${b1}m.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

ramp();

function race() {
    const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
    let firstName;
    let secondName;
    let thirdName;
    do {
      firstName = names[form.rand(names.length) - 1];
      secondName = names[form.rand(names.length) - 1];
      thirdName = names[form.rand(names.length) - 1];
    } while (firstName === secondName || firstName === thirdName || secondName === thirdName);
    let radius = form.rand(30);
    let theta = form.rand(89);
    let winnerAngle = theta/2;
    let lead = parseFloat((theta/360)*2*Math.PI*radius).toFixed(3);
    let speed = form.rand(10) + 5;
    let string = `${firstName}, ${secondName}, and ${thirdName} are running the last lap of a race around a circular track of radius ${radius}m. They all run the last lap at a constant pace. ${firstName} and ${secondName} are running at ${speed}m/s, with ${firstName} being slightly ahead of ${secondName}. ${thirdName} is running the fastest. ${form.rand(10) + 1} seconds before ${thirdName} crosses the finish line, let the positions of ${firstName}, ${secondName} and ${thirdName} be A, B and C respectively. Angle ACB is ${winnerAngle} degrees. How much faster did ${firstName} finish the race than ${secondName} in seconds?`;
    let answerString = `Since angle ACB = ${winnerAngle} degrees, the arc AB is ${theta} degrees. Hence ${firstName} is ${lead}m ahead of ${secondName}. Thus, ${firstName} will finish ${parseFloat(lead/speed).toFixed(3)} seconds faster.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

race();

function rapunzel() {
    let m;
    let n;
    do {
        m = form.rand(20);
        n = form.rand(20);
    } while (m === n);
    let a = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
    let b = 2 * m * n;
    let c = m * m + n * n;
    const deadlys= ['a pit of poisonous snakes', 'a pit of man-eating vacuum cleaners', 'a reigon of spikes', 'a pit of rabid lawnmowers', 'a patch of quicksand', 'an army of evil trolls', 'an army of evil gnomes'];
    const deadly = deadlys[Math.floor(Math.random()*deadlys.length)];
    let string = `Rapunzel is trapped in a tower, and is trying to grow her hair long enough to use as a rope to climb out of the tower. However, her tower is surrounded by ${deadly} of width ${b}m. If her tower is ${a}m tall, what is the minimum length that her hair must be in order to escape the tower?`;
    let answerString = `Using the pythagorean theorem, we determine that the minimum length of her hair must be sqrt(${b}^2 + ${a}^2) = ${c}. Thus, her hair must be at least ${c}m long for her to make her escape.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];    
}

rapunzel();

function cylindricalTank() {
    const dripRate = form.rand(30);
    const radiusA = form.rand(40);
    const radiusB = form.rand(40);
    const time = form.rand(20) + 1;
    const volumeLost = time*dripRate;
    const heightDecreaseA = parseFloat(volumeLost/(Math.PI*radiusA*radiusA)).toFixed(3);
    const heightDecreaseB = parseFloat(volumeLost/(Math.PI*radiusB*radiusB)).toFixed(3);
    let string = `Two cylindtical containers a steadily dripping water at a constant rate of ${dripRate} litres per second. After ${time} seconds, the water level in tank A decreased by ${heightDecreaseA}cm and the water level in tank B decreased by ${heightDecreaseB}cm. If the capacity of both water tanks is the same, then what is the ratio of the height of tank A to the height of tank B?`;
    let answerString = `In ${time} seconds, the volume lost by b both containers will be ${volumeLost}. Thus, the ratio of the base areas of the cylinders is ${parseFloat(volumeLost/heightDecreaseA).toFixed(3)}/${parseFloat(volumeLost/heightDecreaseB).toFixed(3)}. Hence, the ratio of the height of tank A to the height of tank B is ${parseFloat(volumeLost/heightDecreaseB).toFixed(3)}/${parseFloat(volumeLost/heightDecreaseA).toFixed(3)} = ${parseFloat(parseFloat(volumeLost/heightDecreaseB).toFixed(3)/(parseFloat(volumeLost/heightDecreaseA).toFixed(3))).toFixed(3)}`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

cylindricalTank();

function planet() {
    const shadow = form.rand(10);
    const pole = form.rand(10);
    const planets = ['Mars', 'Jupiter', 'Neptune', 'Pluto', 'Nibiru', 'Xena', 'Cerberus', 'Dekatoo', 'Decadia', 'Dekatos'];
    const planet = planets[Math.floor(Math.random()*planets.length)];
    const distance = form.rand(1000) + 100;
    const angle = parseFloat(Math.atan(shadow/pole)).toFixed(3);
    const alienNames = ['Suban', 'Oo\'daloon', 'Bhewginoo', 'Spleehae Plagnor', 'Rog Thuvaz', 'Kzortrokan', 'Sojan', 'Sossios Naze', 'Nuetzo Entayta', 'Vendol', 'Kneebo Uavoo', 'Jillintor Vovlov', 'Nueto Ruubv\'h', 'A\'qhuakyun', 'Bugwin'];
    const alienName = alienNames[Math.floor(Math.random()*alienNames.length)];
    
    let string = `${alienName}, a mathematician from the planet ${planet}, is trying to figure out the circumferance of his planet. He knows that on the summer solstice in a nearby town, the sun will be directly overhead at 12 noon. This town is ${distance}m away from ${alienName}'s house. On the summer solstice at 12 noon, ${alienName} puts out a ${pole}m tall pole in his backyard and measures the shadow to be ${shadow}m long. What is the circumferance of ${planet}?`;
    let answerString = `To compute the angle between the rod and the beam of light casting the shadow from the sun, we take arctan(${shadow}/${pole}) = ${parseFloat(Math.atan(shadow/pole)).toFixed(3)}. Thus, we know that the angle of the minor arc from the pole to the town is ${angle}. Hence, the circumferance of ${planet} is ${parseFloat(((Math.PI*2)/angle)*distance).toFixed(3)}m`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

planet();

function pyramids() {
    const difference = form.rand(10)*2;
    const dimensions = difference/2;
    const minVolume = dimensions*(dimensions + difference);
    const height = Math.random() > 0.5? 'height' : 'base area';
    const baseArea = (height === 'height')? 'base area' : 'height';
    const alienNames = ['Suban', 'Oo\'daloon', 'Bhewginoo', 'Spleehae Plagnor', 'Rog Thuvaz', 'Kzortrokan', 'Sojan', 'Sossios Naze', 'Nuetzo Entayta', 'Vendol', 'Kneebo Uavoo', 'Jillintor Vovlov', 'Nueto Ruubv\'h', 'A\'qhuakyun', 'Bugwin'];
    const alienName = alienNames[Math.floor(Math.random()*alienNames.length)];
    const planets = ['Mars', 'Jupiter', 'Neptune', 'Pluto', 'Nibiru', 'Xena', 'Cerberus', 'Dekatoo', 'Decadia', 'Dekatos'];
    const planet = planets[Math.floor(Math.random()*planets.length)];
    let string = `${alienName} is an alien from the planet ${planet}. He is trying to make a present for humans. He wants to give humans the most valuable gift on his planet: a lucky cone. In order for a cone to be lucky, its ${baseArea} must be exactly ${difference} more than its ${height} in alien length units. The smaller the volume of a lucky cone, the more valuable it is. What is the minimum volume that ${alienName} can make the cone?`;
    let answerString = `Let the ${height} of the cone be h. The volume of the cone will be (1/3)*h*(h+${difference}). This is minimized at ${dimensions} alien length units. Thus, the minimum volume is ${minVolume} alien volume units.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

pyramids();

function tag() {
    let coordinate1, coordinate2;
    do {
        coordinate1 = [form.rand(100), form.rand(100)];
        coordinate2 = [form.rand(100), form.rand(100)];
    } while (coordinate1[0] === coordinate2[0]);
    const x1 = coordinate1[0];
    const x2 = coordinate2[0];
    const y1 = coordinate1[1];
    const y2 = coordinate2[1];
    const midx = (x1 + x2)/2;
    const midy = (y1 + y2)/2;
    const gradOriginal = parseFloat((y2 - y1)/(x2 - x1)).toFixed(3);
    const gradEventual = parseFloat(-1/gradOriginal).toFixed(3);
    const answer = parseFloat((gradEventual*midx - midy)/gradEventual).toFixed(3);
    let firstName;
    let secondName;
    do {
        firstName = names[Math.floor(Math.random()*names.length)];
        secondName = names[Math.floor(Math.random()*names.length)];
    } while (firstName === secondName);
    let string = `${firstName} and ${secondName} are playing rugby on the cartesian plane, with the try line being the x-axis. ${firstName} is at (${x1}, ${y1}) and ${secondName} is at (${x2}, ${y2}). ${firstName} is trying to reach the x-axis. Assume that ${firstName} and ${secondName} are infinitely agile and equally fast. Find the range of points on the x-axis that ${firstName} can reach without getting caught? (For example, if ${firstName} can reach the x-axis at (3,0) without being caught, then that 3 must be in the range).`;
    let answerString;
    if (x1 < x2) {
        answerString = `Let X be the midpoint of the line between ${firstName} and ${secondName}. Draw a line L through the midpoint and perpendicular to the line connecting ${firstName} and ${secondName}. Any point to the left of the line is closer to ${firstName}, and hence ${firstName} can reach it first. The midpoint between ${firstName} and ${secondName} is (${midx}, ${midy}). Thus, the equation of the line throught (${midx}, ${midy}) perpendicular to ${firstName} and ${secondName} is y - ${midy} = ${gradEventual}(x - ${midx}). Solving for the x-intercept, we get ${answer}. Thus, x < ${answer}`;
    } else {
        answerString = `Let X be the midpoint of the line between ${firstName} and ${secondName}. Draw a line L through the midpoint and perpendicular to the line connecting ${firstName} and ${secondName}. Any point to the right of the line is closer to ${firstName}, and hence ${firstName} can reach it first. The midpoint between ${firstName} and ${secondName} is (${midx}, ${midy}). Thus, the equation of the line throught (${midx}, ${midy}) perpendicular to ${firstName} and ${secondName} is y - ${midy} = ${gradEventual}(x - ${midx}). Solving for the x-intercept, we get ${answer}. Thus, x > ${answer}`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

tag();


const geometry = [shadow, comp, simTri, ramp, race, rapunzel, cylindricalTank, planet, pyramids, tag];
module.exports = geometry;
