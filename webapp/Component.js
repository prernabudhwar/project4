sap.ui.define([
  "sap/ui/core/UIComponent",
  "com/capgemini/project4/model/models"
], function (UIComponent, models) {
  "use strict";

  return UIComponent.extend("com.capgemini.project4.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // Optional device model
      // this.setModel(models.createDeviceModel(), "device");

      this.getRouter().initialize();
    }
  });
});