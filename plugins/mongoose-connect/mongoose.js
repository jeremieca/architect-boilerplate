var mongoose = require("mongoose");

function mongooseConnect(options, imports, register) {

	// Connect to Mongodb instance
	mongoose.connect(options.connect);

	// Load models from all other plugins
	var loadModelsSync = require("./autoloader.js");

	register(null, {
		mongoose: loadModelsSync(mongoose, options.modelDirectory)
	});

}

module.exports = mongooseConnect;