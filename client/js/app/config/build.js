// Install node.js, navigate to the app.build.js file path, 
// and then run this command: "node js/libs/r.js -o js/app/config/build.js"
//
// Version creating optimized DIR of js
({
  baseUrl: "../../",
  // Creates a js-optimized folder and puts the entire optimized project there
  dir: "../../../js-optimized",
  paths: {
    jquery: "empty:" // CDN
  },
  modules: [
    {
      name: 'app/sample'
    }
  ]
})
