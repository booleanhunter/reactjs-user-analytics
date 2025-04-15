export const workerInstance = (function () {
    let instance: any;
    function getInstance() {
        if (instance) {
            return instance;
        }
        instance = new Worker(
            new URL('../browser/user-interaction?worker&url', import.meta.url),
            {
                type: 'module',
            },
        );
        return instance;
    }

    return {
        getInstance,
    }
})()
