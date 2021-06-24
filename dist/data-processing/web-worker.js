var worker = require("workerize-loader!../browser/user-interaction"); // eslint-disable-line import/no-webpack-loader-syntax
export var workerInstance = (function () {
    var instance;
    function getInstance() {
        if (instance) {
            return instance;
        }
        instance = worker();
        return instance;
    }
    return {
        getInstance: getInstance
    };
})();
