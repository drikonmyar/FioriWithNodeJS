sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("App.controller", {
        onInit: function () { },
        onGetMessage: function () {
            const oText = this.byId("textMessage");
            fetch("http://localhost:3000/message")
                .then(res => res.json())
                .then(data => oText.setText(data.text))
                .catch(() => oText.setText("Failed to load message"));
        }
    });
});