/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comstelmyUI5App/my-ui5-app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
