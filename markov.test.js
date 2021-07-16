const { hasUncaughtExceptionCaptureCallback } = require("process");
const { MarkovMachine } = require("./markov");

describe('Markov Machine', () => {
    test('make markov chains', () => {
        let newMM = new MarkovMachine("the cat in the hat");
        expect(newMM.chains).toEqual(new Map([
            ["the", ["cat", "hat"]],
            ["cat", ["in"]],
            ["in", ["the"]],
            ["hat", [null]]])
        )
    })

    test('picks an item from an array', () => {
        let arr = [1,2,3]
        expect(arr).toContain(MarkovMachine.choice(arr));
    })

    

})

