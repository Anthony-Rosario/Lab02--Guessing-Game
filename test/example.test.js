import { compareN } from '../utils.js';



const test = QUnit.test;


test('The function should determine if the users input is equal to a random number between 1 and 20', (expect) => {
    
    const expected = 0;
    const actual = compareN(15, 15);

    expect.equal(actual, expected);
});


test('the function should determine if the users input is lower than the random nubmer', (expect) => {
    const expected = -1;
    const actual = compareN(6, 9);

    expect.equal(actual, expected);
});


test('the function should determine if the users input is higher than the random number', (expect) => {
    const expected = 1;
    const actual = compareN(16, 9);

    expect.equal(actual, expected);
});
