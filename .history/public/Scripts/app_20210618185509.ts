/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-03 */


// IIFE - Immidiately Invoked Function Expression
"use strict";

(function() {

    function Start():void 
    {
        console.log("App Started");
        
        let deleteButtons = document.querySelectorAll('.btn-danger')

        for (let button of deleteButtons) 
        {
            button.addEventListener('click', (event) => {
                if (! confirm ("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/users/list');
                }
            })
        }
    }

    window.addEventListener("load", Start);

})();