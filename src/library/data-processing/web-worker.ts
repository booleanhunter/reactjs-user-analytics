// @ts-ignore
import worker from 'workerize-loader!./storage.ts'; // eslint-disable-line import/no-webpack-loader-syntax

export const workerInstance = (function () {
    let instance: any;
    function getInstance() {
        if (instance) {
            return instance;
        }
        instance = worker()
        return instance;
    }

    return {
        getInstance
    }

})();

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
 
    (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
    return confirmationMessage;                                /* Safari, Chrome, and other
                                                                * WebKit-derived browsers */
}, false);
