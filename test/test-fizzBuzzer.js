/* jshint esversion: 6 */

const should = require('chai').should();
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {

	it(`should produce fizz for every number divisible by 3
		buzz for every number divisble by 5
		and fizzbuzz for every number divisible by both`, function () {

		const normalCases = [
			[3,'fizz'],
			[5,'buzz'],
			[15, 'fizz-buzz'],
		];

		normalCases.forEach(function(input){
			const answer = fizzBuzzer(input[0]);

			answer.should.equal(input[1]);
		});

	});

	it(`should not proudce fizz for numbers not divisible by 3`, function()	{
		const edgeCases = [
			[4, 'fizz'],
			[8, 'fizz']
		];

		edgeCases.forEach(function(input){
			const answer = fizzBuzzer(input[0]);

			answer.should.not.equal(input[1]);

		});

	});

	it(`should not allow for decimals inputs`, function () {
		expect(fizzBuzzer.bind(null, 2.5)).to.throw('`num` must be whole');
		expect(fizzBuzzer.bind(null, 8.6)).to.throw('`num` must be whole');
	});

	it(`should throw an error when a string is given as arg`, function () {
		
		expect(fizzBuzzer.bind(null, 'a')).to.throw('`num` must be a number');
		
	});
	
});