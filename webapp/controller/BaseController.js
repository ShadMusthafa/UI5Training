sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    return Controller.extend("com.stel.myUI5App.myui5app.controller.BaseController",{
        sayHello:function(){
            console.log("Hello from Base Controller!!!!");
        }
    })
})