import isEmpty from 'lodash/isEmpty.js';
import { logError } from './logger.js';
import path from 'path';
import readDir from 'read-directory';
import sourceConfig from '../.config/palette.config.json' assert { type: 'json' };

config.log(sourceConfig);

const distPath = path.resolve(process.cwd(), outDir);
const sourcePath = path.resolve(process.cwd(), 'assets');

/**
 *
 * @param c {import("../").SourceConfig}
 * @returns {import("type-fest").Entries<{}>}
 */
const config = (function (c) {
	try {
		const files = readDir.sync(sourcePath, {
			filter: `${sourceName || '*'}.json`
		});
		if (isEmpty(files)) {
			throw new Error('Source files not found');
		}
		return files;
	} catch (err) {
		logError(err);
	}
})(sourceConfig);

export { distPath, config };
