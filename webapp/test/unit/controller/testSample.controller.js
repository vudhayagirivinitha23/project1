/*global QUnit*/

sap.ui.define([
	"project1/controller/testSample.controller"
], function (Controller) {
	"use strict";

	QUnit.module("testSample Controller");

	QUnit.test("I should test the testSample controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
