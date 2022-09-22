const {sum, multiply, subtract, div} = require("./math");

beforeAll(() => {
    console.log("before All Test");
  })

describe("Function", () => {
    beforeEach(() => {
        console.log("befoe Each");
    });

    it ("should sum two number", () => {
        expect(sum(2,3)).toBe(5);
    });

    it ("should substract two number", () => {
        expect(subtract(5, 3)).toBe(2);
    });

    it ("should multiply two numbers", () => {
        expect(multiply(3,3)).toBe(9);
    });

    it ("should divide two numbers", () => {
        expect(div(3,3)).toBe(1);
    });

    afterEach (() => {
        console.log("after each Test");
    });
});

afterAll(() => {
    console.log("after All Test");

})