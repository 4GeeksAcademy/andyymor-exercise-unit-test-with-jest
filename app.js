let oneEuroIs = {
    'JPY':156.5,
    'USD': 1.07,
    'GBP': 0.87, 
}

function fromDollarToYen(dollar) {
return dollar / 1.07 * 156.5;
}

function fromEuroToDollar(euro) {
return euro * 1.07;
}

function fromYenToPound(yen) {
return yen / 156.5 * 0.87
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}