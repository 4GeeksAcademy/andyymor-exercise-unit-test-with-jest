test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar, fromDollarToYen} = require('./app.js');

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 156.5yen", function() {
    const { fromDollarToYen} = require('./app.js');

    expect(fromDollarToYen(3.5)).toBe(547.75);
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound} = require('./app.js');

    expect(fromYenToPound(3.5)).toBe(476.5);
})