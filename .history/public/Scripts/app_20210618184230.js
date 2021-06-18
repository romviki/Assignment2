"use strict";
(function () {
    function Start() {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.bt-danger');
        for (let button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/users/list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map