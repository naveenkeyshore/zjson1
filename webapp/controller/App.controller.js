sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.naveen.zjson1.controller.App", {
            onInit: function () {
                let oModel = this.getOwnerComponent().getModel("oEmpDetails");
                this.getView().setModel(oModel);
            }
        });
    });
