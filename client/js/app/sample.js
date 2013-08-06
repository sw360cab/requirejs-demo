// The define method is passed a dependency array and a callback function
define(["jquery"],function (jq) {
  // $ is defined globally
  // jq is no conflict version - local scope 
  jq('title').html('in sample module');

  return {
    try : function() {
      alert('Hello RequireJS!');
    },
    test : function() {
      return true;
    }
  }
});
