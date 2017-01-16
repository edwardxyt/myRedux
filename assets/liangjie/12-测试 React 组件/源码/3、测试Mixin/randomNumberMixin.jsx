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