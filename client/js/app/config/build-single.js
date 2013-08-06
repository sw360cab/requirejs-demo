// Install node.js, navigate to the app.build.js file path, 
// and then run this command: "node js/libs/r.js -o js/app/config/build-single.js"
//
// Version optimizing app file sample.js
({
  baseUrl: "../../",
  paths: {
    jquery: "empty:" // CDN
  },
  out: "../sample.min.js",
  name: 'app/sample'
})
