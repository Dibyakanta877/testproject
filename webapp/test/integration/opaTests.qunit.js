/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["project1dest/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
