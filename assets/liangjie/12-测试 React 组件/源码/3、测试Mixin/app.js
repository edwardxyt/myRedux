(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var randomNumberMixin = {
	randomNumber: function () {
		return Math.random();
	},
	randomNumbers: function (count) {
		var result = [];
		for (var i = 0; i < count; i++) {
			result.push(this.randomNumber);
		};
		return result;
	}
}

module.exports = randomNumberMixin;

},{}],2:[function(require,module,exports){
var randomNumberMixin = require("./randomNumberMixin.jsx");

describe("test randomNumberMixin", function () {
	it("should return a random number", function () {
		expect(randomNumberMixin.randomNumber()).toBeLessThan(1);
	});

	it("should return many numbers", function () {
		expect(randomNumberMixin.randomNumbers(6).length).toBe(6);
	})
})

},{"./randomNumberMixin.jsx":1}]},{},[2]);
