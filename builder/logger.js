import round from "lodash/round.js"
import logger from "node-color-log"

logger.setDate(() => "")

const start = process.hrtime()

function logError(error) {
	logger.error(error)
	process.exit(1)
}

function logSuccess(savedFile, hrstart = start) {
	const hrend = process.hrtime(hrstart)
	logger
		.bgColor("green")
		.color("white")
		.append(`SAVED: ${savedFile} `)
		.bold()
		.log(`in ${roundNanoseconds(hrend[1])} s`)
}

function logSummary(array, hrstart = start) {
	const hrend = process.hrtime(hrstart)
	logger.log("")
	logger
		.bgColor("white")
		.color("black")
		.log(
			`Total: processed ${array.length} files in ${roundNanoseconds(
				hrend[1],
			)} seconds`,
		)
}

function roundNanoseconds(value) {
	return round(value / 1000000000, 3)
}

export { logger, logError, logSuccess, logSummary }
