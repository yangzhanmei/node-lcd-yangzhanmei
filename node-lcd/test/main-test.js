var test = require('../main/main.js');

describe('printReceipt', function () {
    var inputs;

    beforeEach(function () {
        inputs = '910'
    });
    it('should print correct text', function () {

        spyOn(console, 'log');

        test.printReceipt(inputs);

        var expectText = '\n._....._.\n'
            + '|_|..||.|\n'
            + '..|..||_|';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('getNumberDigits', function () {
    var numbers;

    beforeEach(function () {
        numbers = '910'
    });
    it('numberDigits should be this', function () {
        var newNumberDigits = test.getNumberDigits(numbers);
        var numberDigits = [
            {
                values: {
                    firstLine: '._.',
                    secondLine: '|_|',
                    thirdLine: '..|'
                }
            },
            {
                values: {
                    firstLine: '...',
                    secondLine: '..|',
                    thirdLine: '..|'
                }
            },
            {
                values: {
                    firstLine: '._.',
                    secondLine: '|.|',
                    thirdLine: '|_|'
                }
            }];
        expect(newNumberDigits).toEqual(numberDigits);
    });
});