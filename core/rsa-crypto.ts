export class RsaCryptoLogic {
    public static coPrimeOfPhi(prime1: number, prime2: number, count: number) {
        const phi = (prime1 - 1) * (prime2 - 1);
        const coPrimes: number[] = [];
        const coPrimeLimit = 5;
        for (let i = 0; i < coPrimeLimit; i++) {
            coPrimes.push(RsaCryptoLogic._findCoPrime(phi, 2));
        }
        return coPrimes;
    }

    public static encryptedText(inputString: string, mod: number, exponent: number) {
        let padded = false;
        if (inputString.length % 2 !== 0) {
            inputString += ' ';
            padded = true;
        }
        let resultString = '';
        for (let i = 0; i < inputString.length; i += 2) {
            const plainText = RsaCryptoLogic._textToNumber(inputString.substr(i, 2));
            const resultNumber = RsaCryptoLogic._exponentialMod(mod, plainText, exponent);
            resultString += RsaCryptoLogic._numberToText(resultNumber);
        }
        return padded ? resultString.substring(0, resultString.length - 1) : resultString;
    }

    private static _numberToText(input: number) { // block of 2 letters
        return String.fromCharCode((input / 100) % 94, (input % 100) % 94);
    }

    private static _textToNumber(inputString: string) { // block of 2 letters
        return (inputString.charCodeAt(0) - 32) * 100 + inputString.charCodeAt(1) - 32;
    }
    private static _exponentialMod(mod: number, plainText: number, exponent: number) {
        while (exponent > 0) {
            if ((exponent % 2) !== 0) {
                plainText *= mod;
            } else {
                exponent /= 2;
                plainText *= plainText;
            }
        }
        return plainText;
    }

    private static _findCoPrime(phi: number, checkNumber: number): number {
        if (RsaCryptoLogic._findGCD(phi, checkNumber) === 1) {
            return checkNumber;
        } else {
            return RsaCryptoLogic._findCoPrime(phi, checkNumber++);
        }
    }

    private static _findGCD(number1: number, number2: number): number {
        if (number1 === 0 || number2 === 0) {
            return 0;
        } else if (number1 === number2) {
            return number1;
        } else if (number1 > number2) {
            return RsaCryptoLogic._findGCD(number1 - number2, number2);
        } else {
            return RsaCryptoLogic._findGCD(number1, number2 - number1);
        }
    }
}
