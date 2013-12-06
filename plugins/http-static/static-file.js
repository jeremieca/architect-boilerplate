module.exports = function setup(options, imports, register) {
    
    var express = require('express');
    var root 	= options.root;

    imports.app.middleware(express.static(root));
    console.info("Static routes launched")

    register(null);

};