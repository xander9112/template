class Application {
	constructor () {
		"use strict";

		this._initFunction();
	}

	_initFunction () {
		"use strict";

		console.log('Init Function');

		let testClass = new $$.ExampleClass($, {});
	}
}

$(function () {
	$$.window = $(window);
	$$.body = $(document.body);
	$$.windowWidth = $$.window.width();
	$$.windowHeight = $$.window.height();

	$$.application = new Application();

	$$.ESCAPE_KEY_CODE = 27;

	$$.window.on('resize', function () {
		$$.windowWidth = $$.window.width();
		$$.windowHeight = $$.window.height();
	});
});
