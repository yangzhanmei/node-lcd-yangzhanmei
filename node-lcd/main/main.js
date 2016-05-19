function printReceipt(numbers) {
    var numberDigits = getNumberDigits(numbers);
    var result = getResult(numberDigits);

    console.log(result);
}

function getNumberDigits(numbers) {
    var charNumbers = numbers.split('');
    var digists = buildDigits();
    var numberDigits = [];
    charNumbers.forEach(function (number) {
        for (var i = 0; i < digists.length; i++) {
            if (parseInt(number) === digists[i].key) {
                numberDigits.push({values: digists[i].values});
            }
        }
    });

    return numberDigits;
}

function getResult(numberDigits) {
    var first = '';
    var second = '';
    var third = '';
    var resultString = '';

    numberDigits.forEach(function (key) {
        first += key.values.firstLine;
        second += key.values.secondLine;
        third += key.values.thirdLine;
    });
    resultString += first + '\n' + second + '\n' + third;

    return '\n' + resultString;
}

function buildDigits() {
    var digist = [];

    digist.push({key: 0, values: {firstLine: '._.', secondLine: '|.|', thirdLine: '|_|'}});
    digist.push({key: 1, values: {firstLine: '...', secondLine: '..|', thirdLine: '..|'}});
    digist.push({key: 2, values: {firstLine: '._.', secondLine: '._|', thirdLine: '|_.'}});
    digist.push({key: 3, values: {firstLine: '._.', secondLine: '._|', thirdLine: '._|'}});
    digist.push({key: 4, values: {firstLine: '...', secondLine: '|_|', thirdLine: '..|'}});
    digist.push({key: 5, values: {firstLine: '._.', secondLine: '|_.', thirdLine: '._|'}});
    digist.push({key: 6, values: {firstLine: '._.', secondLine: '|_.', thirdLine: '|_|'}});
    digist.push({key: 7, values: {firstLine: '._.', secondLine: '..|', thirdLine: '..|'}});
    digist.push({key: 8, values: {firstLine: '._.', secondLine: '|_|', thirdLine: '|_|'}});
    digist.push({key: 9, values: {firstLine: '._.', secondLine: '|_|', thirdLine: '..|'}});

    return digist;
}

module.exports = {
    printReceipt: printReceipt,
    getNumberDigits: getNumberDigits,
    getResult: getResult,
    buildDigits: buildDigits
};
