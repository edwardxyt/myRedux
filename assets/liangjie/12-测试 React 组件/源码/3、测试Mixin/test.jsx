var randomNumberMixin = require("./randomNumberMixin.jsx");

describe("test randomNumberMixin", function () {
	it("should return a random number", function () {
		expect(randomNumberMixin.randomNumber()).toBeLessThan(1);
	});

	it("should return many numbers", function () {
		expect(randomNumberMixin.randomNumbers(6).length).toBe(6);
	})
})