sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.capgemini.project4.controller.View1", {

    onInit: function () {},

    onRowPress: function (oEvent) {
      const oItem = oEvent.getParameter("listItem");//listItem denotes the row that was clicked
      const oCtx = oItem.getBindingContext();
      if (!oCtx) return;

      const id = oCtx.getProperty("OrderID");
      this.getOwnerComponent().getRouter().navTo("detail", { OrderID: id });
    }

  });
});
