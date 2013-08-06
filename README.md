#RequireJS DEMO

A wide sample of Usage of [RequireJS](http://requirejs.org/) created after a quick read given to 
[
Instant Dependency Management with RequireJS How-to](http://www.packtpub.com/dependency-management-with-requirejs-how-to/book).
The application is served by a very simple NodeJS/Express server

The sample covers:

* RequireJS Basic configuration (client/js/app/config/main.js)
* RequireJS Basic usage (client/simpleIndex.html)
* AMD compliant module definition (client/js/app/sample.js)
* Platform an environment dependent file configuration (client/index.html)
* Jasmine unit test RequireJS-based (client/test.html)
* RequireJS optimization via r.js (client/js/app/config/build.js and client/js/app/config/build-single.js)

In particular The sample focus on facing problems such as:

* JQuery configuration in RequireJS
* Platform Dependent Client configuration (inspired by [Backbone-Require-Boilerplate
](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate))
* Optimization for modules and files ([ReqireJS Optimizer](http://requirejs.org/docs/optimization.html))