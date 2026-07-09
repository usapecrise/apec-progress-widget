/*
-----------------------------------------
APEC Progress Widget
Jotform Integration
-----------------------------------------
*/

console.log("Waiting for Jotform...");

if (typeof JFCustomWidget !== "undefined") {

    JFCustomWidget.subscribe("ready", function () {

        console.log("Widget Ready");

    });

}


window.addEventListener("message", function(event){

    console.log(event.data);

});