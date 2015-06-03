# Architect boilerplate

# Library used

Architect (by Cloud9) : Plugins loader  
ExpressJs : Routing, http server...  
PassportJs : Authentification  

You can obtain more informations on :  
[https://github.com/c9/architect]()  
[http://expressjs.com]()  
[http://passportjs.org]()  

# Installation

Install mongodb  
Run it on default port  

    npm install  
    node server.js  

Load localhost:8080 in browser  

# How it works

Architect loads all plugins module referencing and configuring in config.js file.  

- Plugin http-app provides http interface for routing. Currently it uses ExpressJs behind.  
- Plugin http-static serves statics ressources locate in www folder.  
- Plugin mongoose-connect connects mongoose to mongodb database and loads automaticly all models from other plugins.   Models loaded are referenced through mongoose provider.  

# Documentation

See documentation of code in docs folder  

To generate the code go to the root of project and exec the folowing bash command  

    find . -path "./node_modules*" -prune -o -name '*.js' -exec docco {} +  

# Work to do

// Todo : Handling errors  
// Todo : Improve Readme and documentation  
// Todo : Add new modules  
// Todo : Add functionnal and integration testing  
// Todo : Add Codeship and Codacy  

