test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar, fromDollarToYen} = require('./app.js');

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 156.5yen", function() {
    const { fromDollarToYen} = require('./app.js');

    expect(fromDollarToYen(3.5)).toBeCloseTo(511.915, 2);
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound} = require('./app.js');

    expect(fromYenToPound(350)).toBeCloseTo(1.945, 2);
})