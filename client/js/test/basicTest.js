// Jasmine Unit Testing Suite
// --------------------------
define(['sample'], function(App) {

	describe("Basic Test Suite", function() {

		it("contains a spec (test) with an expectation", function() {     

			expect(App.test()).toBe(true);

		});

	});

});
