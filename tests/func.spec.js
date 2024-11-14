import { getResult } from "../src/func";

describe('Basic operation with getResult', () => {

    it('getResult return a string', () => {
        //Arrange
        const choice1 = 'pierre';
        const choice2 = 'ciseaux';

        //Act
        const result = getResult(choice1, choice2);

        //Assert
        expect(typeof result).toBe("string");
    });

});

describe('Find the winner with getResult', () => {

    it('pierre and feuille', () => {
        const choice1 = 'pierre';
        const choice2 = 'feuille';

        const result = getResult(choice1, choice2);

        expect(result).toBe("Joueur 1 gagne !")
    });

});