/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-03 */


// IIFE - Immidiately Invoked Function Expression
"use strict";

(function() {

    function Start():void 
    {
        console.log("App Started");
        
        let deleteButtons = document.querySelectorAll('.bt-danger')

        for (button of deleteButtons) 
        {
            button.addEventListener('click', (ev))
        }
    }

    window.addEventListener("load", Start);

})();