module.exports = function setup(options, imports, register) {

    var express = require('express');
    var port    = options.port;
    var app     = express();

    app.use(express.cookieParser());

    register(null, {

        app: {
            get:        function (route, handler) {
                            app.get(route, handler);
                        },
            put:        function (route, handler) {
                            app.put(route, handler);
                        },
            post:       function (route, handler) {
                            app.post(route, handler);
                        },
            del:        function (route, handler) {
                            app.delete(route, handler);
                        },
            middleware: function (routes) {
                            app.use(routes);
                        }
        }

    });

    if(app.listen(port)) {
        console.info("Server launched");
    }

};