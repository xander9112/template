import ExampleClass from './Components/ExampleClass';

export default class Application {
	constructor () {
		"use strict";

		this._initFunction();
	}

	_initFunction () {
		"use strict";

		console.log('Init Function');

		let testClass = new ExampleClass($('.js-test-class'), {});
	}
}
