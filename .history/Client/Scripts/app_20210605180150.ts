// IIFE - Immidiately Invoked Function Expression
"use strict";
const router = express.Router();

(function() {

    function Start():void 
    {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

})();

function sendMessage() {
    router.post()
}