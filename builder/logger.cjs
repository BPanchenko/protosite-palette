const dateFormat = require('date-format')
const logger = require('node-color-log')
const process = require('node:process')
const util = require('node:util')

const { curry, isArrayLikeObject, isElement, isObjectLike } = require('lodash')

const roundNanoseconds = (value) => Math.round(value / 1000000) / 1000

const inspectOptions = {
	depth: 3,
	compact: false,
	showHidden: true,
	sorted: true,
	showProxy: true,
	colors: true,
	maxArrayLength: 5,
	maxStringLength: 180,
	breakLength: 120,
}

const start = process.hrtime()

logger.setDate(() => dateFormat('hh:mm:ss.SSS', new Date()))

const debug = (...args) => {
	const lastArgumentIsDebuggingMode = [
		'success',
		'debug',
		'info',
		'warn',
		'error',
	].includes(args.at(-1))

	const mode = lastArgumentIsDebuggingMode ? args.pop() : 'debug'

	let curriedLogger = curry(logger[mode].bind(logger), args.length)

	args.forEach((arg) => {
		let parsed = arg
		if (isArrayLikeObject(arg)) {
			parsed = util.inspect(Array.from(arg), inspectOptions)
		} else if (isElement(arg)) {
			parsed = util.inspect(arg, inspectOptions)
		} else if (isObjectLike(arg)) {
			parsed = util.inspect(arg, inspectOptions)
		}
		curriedLogger = curriedLogger(parsed)
	})
}

const logError = (message) => {
	logger
		.bgColor('red')
		.color('white')
		.append('ERROR:')
		.reset()
		.append(` ${message} `)
		.bold()
}

const logSavedFile = (path, hrstart = start) => {
	const hrend = process.hrtime(hrstart)
	logger
		.bgColor('green')
		.color('white')
		.append('SAVED:')
		.reset()
		.append(` ${path} `)
		.bold()
		.log(`in ${roundNanoseconds(hrend[1])} s`)
}

const logEvent = (name, ...args) => {
	logger.bold().color('black').append(`${name}: `).reset()

	switch (name) {
		case 'rename':
			args.splice(0, 0, 'from')
			args.splice(2, 0, 'to')
		default:
			debug(...args)
	}
}

const info = (...args) =>
	logger
		.color('white')
		.bgColor('blue')
		.append('[INFO]')
		.reset()
		.color('blue')
		.log(' ' + args.map((a) => a.toString()).join(' '))

const totalSavedFiles = (savingResults, hrstart = start) => {
	const total = savingResults.length
	const failures = savingResults.filter(
		([relChunkPath_, status]) => status === 'fail',
	).length
	const hasFail = Boolean(failures)
	const time = roundNanoseconds(process.hrtime(hrstart)[1])
	const separator = String.fromCharCode(0x2017)

	{
		const color = hasFail ? 'black' : 'green'
		const message = `TOTAL: Prepared ${total} files in ${time} seconds`
		logger
			.color(color)
			.bold()
			.append(separator.repeat(message.length))
			.append('\r\n')
			.log(message)
	}
	{
		const color = hasFail ? 'red' : 'white'
		const message = `FAILED FILES: ${failures}`
		const setting = {
			bold: hasFail,
			dim: false === hasFail,
			underscore: hasFail,
		}
		logger.fontColorLog(color, message, setting)
		logger.log('\r\n')
	}

	return {
		hasFail,
	}
}

const uploadCaption = () =>
	logger.color('cyan').bold().underscore().log(`UPLOAD ASSETS`)

const uploadedFile = (mess) => logger.color('black').bold().log(mess)

module.exports = {
	debug,
	info,
	logEvent,
	logError,
	logger,
	logSavedFile,
	totalSavedFiles,
	uploadCaption,
	uploadedFile,
}
