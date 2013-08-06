// main.js
// -------
require.config({

    // Sets the js folder as the base directory for all future relative paths
    baseUrl: "./js",

    // 3rd party script alias names
    paths: {

        // Core Libraries
        // --------------
        // jquery from CDN
        // only works 1.7.2
        "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        
        // Application Files
        // -----------------

        // sample.js
        "sample": "app/sample"

    },

});

/**
 * *
 */
define('jqNo',['jquery'], function () {
    return jQuery.noConflict(true);
});

// Dynamically loads sample.js using the Require() method
require(["sample","jqNo"], function(sample,jqNo) {
    sample.try();
    // The callback function is executed after app.js is loaded
    jqNo('title').html('require.js');
});
