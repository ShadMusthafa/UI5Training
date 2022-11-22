sap.ui.define([
    "com/stel/myUI5App/myui5app/controller/BaseController"
], function (BaseController) {
    return BaseController.extend("com.stel.myUI5App.myui5app.controller.Home", {
        /** Lifecycle hooks in sapui5 */
        onInit: function () {
            // console.clear();
            // var oModelData = {
            //     name: "John Smith",
            //     isFooterVisible: false
            // };
            // var oModel = new sap.ui.model.json.JSONModel(oModelData);
            // oModel.setDefaultBindingMode("OneWay");
            
            // //Tell the view the model is available
            // console.log("View Object", oView);

            // Tell UI5 core that model is available
            // var oCore = sap.ui.getCore();
            // oCore.setModel(oModel, "viewModel");
            // console.log("Core",this.getCore());

            var oModel = new sap.ui.model.json.JSONModel("../model/viewModelData.json");
            var oView = this.getView();
            oView.setModel(oModel, "viewModel");
            console.log(oModel);
        },

        /** Event Handlers */
        sayHelloBtnPress: function () {
            this.sayHello();
        },

        onShowFooterBtnPress: function () {
            var oView = this.getView(),
                oModel = oView.getModel("viewModel");
            oModel.setProperty("/isFooterVisible", true);
            // var oProp = oModel.getProperty("/isFooterVisible");
            // var oModelData = oModel.getData();
        },

        onHideFooterBtnPress: function () {
            var oView = this.getView(),
                oModel = oView.getModel("viewModel");
            oModel.setProperty("/isFooterVisible", false);
        }

        /** Helper functions */

    });
});