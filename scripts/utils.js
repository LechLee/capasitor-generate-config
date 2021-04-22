const _ = require('lodash')
const colors = require('colors')
const process = require('child_process')
const fs = require('fs')

const helper = {}

helper.args = function args(args) {
	args = _.takeRight(args, args.length - 2)
	const results = {}
	_.forEach(args, function(arg) {
		arg = _.split(arg, '=')

		// arguments without value
		if (arg.length == 1) {
			results[arg[0]] = true
			return results
		}

		const key = arg[0]
		results[key] = arg[1]

		return results
	})

	return results
}

helper.log = function log(message, c) {
	let color

	if (!_.isEmpty(c)) {
		color = _.isString(c) ? colors[c] : c
	}

	color ? console.log(color(message)) : console.log(message)
}

module.exports = helper
