import { accentKeys, toneKeys } from './settings.js';

import camelCase from 'lodash/camelCase.js';
import config from '../.config/palette.config.json' assert { type: `json` };
import { createProtoPalette } from './fn.createProtoPalette.js';
import has from 'lodash/has.js';

/**
 * @param {import("../").Config} c
 * @param {string} format
 * @returns {Record<string, string>}
 */
export default function getPalette(c = config, format = 'hex') {
	const palette = createProtoPalette(c.colors, c.correlations.tone, c.correlations.accent);
	const data = Object.create(palette);
	palette.forEach((color, name) => {
		data[name] = color[format];
		color.tones.forEach((tone, index) => {
			const toneName = camelCase(name) + toneKeys[index];
			data[toneName] = tone[format];
			if (has(tone, 'rgba')) {
				data[toneName + 'TP'] = tone.rgba;
			}
		});
		color.accents.forEach((accent, index) => (data[camelCase(name) + accentKeys[index]] = accent[format]));
	});
	return data;
}
