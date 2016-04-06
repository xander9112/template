class Application {
	constructor() {
		"use strict";

		this._initFunction();
		this._initProviderFunction();

		this._initProviderFunction();

		this._initProviderFunction();
	}

	_initFunction() {
		"use strict";
	}

	_initProviderFunction() {
		$('[data-provider]').each((index, element) => {
			let item = $(element);
			let data = item.data();
			let provider = data.provider;
			let providerOptions = data.providerOptions;

			if (!_.isUndefined($$.Providers[provider])) {
				if (!data.initedProvider) {
					let ProviderClass = new $$.Providers[provider](item, providerOptions);
					data.initedProvider = true;
				}
			}
		});
	}
}

$(function () {
	$$.window = $(window);
	$$.body = $(document.body);
	$$.windowWidth = $$.window.width();
	$$.windowHeight = $$.window.height();

	$$.ESCAPE_KEY_CODE = 27;

	$$.application = new Application();

	$$.window.on('resize', function () {
		$$.windowWidth = $$.window.width();
		$$.windowHeight = $$.window.height();
	});
});
