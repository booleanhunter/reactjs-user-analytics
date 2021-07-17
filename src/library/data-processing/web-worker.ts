const worker = require("workerize-loader!../browser/user-interaction"); // eslint-disable-line import/no-webpack-loader-syntax

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
