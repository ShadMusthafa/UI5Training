sap.ui.define([
    "com/stel/myUI5App/myui5app/controller/BaseController"
],function(BaseController){
    return BaseController.extend("com.stel.myUI5App.myui5app.controller.Home",{
        /** Lifecycle hooks in sapui5 */
        onInit: function(){
            console.log("On Init happened!");
        },
        onBeforeRendering: function(){
            console.log("On Before Rendering happened!");
        },
        onAfterRendering: function(){
            console.log("On After Rendering happened!");
        },
        onExit: function(){
            console.log("On Exit happened!");
        },

        /** Event Handlers */
        sayHelloBtnPress: function(){
            this.sayHello();
        },

        onTestBtnPress:function(){
            console.log("Test Btn")
        }

        /** Helper functions */
    });
});