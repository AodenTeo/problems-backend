const form = require('./generalFunctions');
//This questions asks the user to balence a hydrocarbon combustion
function hydrocarbonCombustion() {
    let numberOfCarbons = (Math.floor((Math.random() + 1)*30));
    let numberOfHydrogens = 2*numberOfCarbons + 2;
    let carbonCoefficient;
    let oxygenCoefficient;
    let carbonDioxideCoefficent;
    let waterCoefficient;
    if (numberOfCarbons % 2 == 0) {
        carbonCoefficient = 1;
        oxygenCoefficient = (numberOfCarbons*3)/2;
        carbonDioxideCoefficent = numberOfCarbons;
        waterCoefficient = numberOfCarbons + 1;
    } else {
        carbonCoefficient = 2;
        oxygenCoefficient = (numberOfCarbons*3);
        carbonDioxideCoefficent = 2*numberOfCarbons;
        waterCoefficient = 2*(numberOfCarbons + 1);
    }
    let string = `C${numberOfCarbons}H${numberOfHydrogens}O is combusted in excess oxygen. Write down a balenced equation for the reaction.`;
    let answerString = `The balenced chemical equation is ${carbonCoefficient}C${numberOfCarbons}H${numberOfHydrogens}O + ${oxygenCoefficient}O --> ${carbonDioxideCoefficent}CO2 + ${waterCoefficient}H2O`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}
hydrocarbonCombustion();

const chemistry = [hydrocarbonCombustion];
module.exports = chemistry;