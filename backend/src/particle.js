const Particle = require('particle-api-js');
const particle = new Particle();

function getTemp() {
	return new Promise((resolve, reject) => {
		particle.getVariable({ deviceId: process.env.DEVICE_ID, name: 'temp', auth: process.env.PARTICLE_TOKEN }).then(function(data) {
			const temp = data.body.result;
			resolve(temp);
		}, (err) => {
			reject(err);
		});
	});
};

module.exports = getTemp;