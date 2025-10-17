/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["project1sapui5/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
