'use strict';
const getTemp = require('./src/particle');

module.exports.temp = async (event, context) => {
	const temp = await getTemp();
	console.log('temp', temp);
	return {
		statusCode: 200,
		headers: {
			// CORS
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify({
			temp,
		}),
	};
};
