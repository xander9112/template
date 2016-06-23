import $ from 'jquery'
import ExampleClass from './Components/ExampleClass';

export default class Application {
	constructor () {
		"use strict";

		this._initFunction();
	}

	_initFunction () {
		"use strict";

		new ExampleClass($('.js-test-class'), {});
	}
}
