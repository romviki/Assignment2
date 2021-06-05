// IIFE - Immidiately Invoked Function Expression
"use strict";
import express from 'express';
const router = express.Router();
export default router;

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