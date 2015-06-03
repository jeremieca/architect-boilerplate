# Architect boilerplate

In my point of view, Architect is the best architecture that you can use for your Nodejs project. It is light, efficient and strongly build around Dependency Injection design pattern.  
  
Sadly, Architect is really minimalist. So start with architect can consume a lot of time, developing low level modules like express integration, mongoose support, cors support, smart file upload... And, moreover, Architect is not really testable. 
  
This project is actually at a start point with few features. I will work on it soon.  

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

To generate the code documentation, go to the root of project and exec the folowing bash command  

    find . -path "./node_modules*" -prune -o -name '*.js' -exec docco {} +  

# Work to do

// Todo : Handling errors  
// Todo : Improve Readme and documentation  
// Todo : Add new modules  
// Todo : Add functionnal and integration testing  
// Todo : Add Codeship and Codacy  

