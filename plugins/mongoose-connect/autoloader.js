var
path	 = require('path'),
fs 		 = require("fs");

// Load models contained in the models directory
function loadModelsSync(mongoose, modelDirectory) {

	var models = {};
	var pluginsDirectoryPath = path.join(__dirname, '..'); // Path to plugins directory

	// Foreach plugins
	fs.readdirSync(pluginsDirectoryPath).forEach(function(plugin) {

		var modelsPath = path.join(pluginsDirectoryPath, plugin, modelDirectory)

		// If plugin contains model directory
		if ( fs.existsSync(modelsPath) && fs.lstatSync(modelsPath).isDirectory() )
		{
			// Foreach model file in model directory
			fs.readdirSync(modelsPath).forEach(function(model) {

				// If it's a javascript file
				if(getExtension(model) == "js") {

					var modelPath = path.join(modelsPath, model)
					var model = require(modelPath)(mongoose);

					// TODO : Valid model format { name: 'NameModel', schema: {SchemaMongoose} }
					models[model.name] = mongoose.model(model.name, model.schema);
				}

			});
		}

	});

	return models;

}

// Get file extension
function getExtension(filename) {
	var ext = filename.split('.');
	return ext[ext.length - 1];
}

module.exports = loadModelsSync;
