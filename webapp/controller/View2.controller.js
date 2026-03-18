sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.capgemini.project4.controller.View2", {

    onInit: function () {
      // Attach route listener
      this.getOwnerComponent()
          .getRouter()
          .getRoute("detail")
          .attachPatternMatched(this._onMatched, this);
    },

    _onMatched: function (oEvent) {
      // Get OrderID from URL
      var id = parseInt(oEvent.getParameter("arguments").OrderID, 10);

      // Build the OData key path
      var oModel = this.getView().getModel();
      var sKey = oModel.createKey("/Orders", { OrderID: id });

      // Bind view to selected Order
      this.getView().bindElement(sKey);
    },

    onNavBack: function () {
      history.go(-1);
    }

  });
});