export default class WebWorker {
    constructor(worker) {
        const code = worker.toString();
        const blob = new Blob(["(" + code + ")()"]);
        return new Worker(URL.createObjectURL(blob));
    }
}

// Here we'll first check if the web worker is available, if yes, then create a new instance of a Worker 
// with URL of the file which will be loaded and will transfer  the message to the worker thread

// function isWebWorkerAvailable() {
//     /**
//      * Check if browser supports worker
//      * @returns {boolean} - true/false
//      */
//     let isWorkerSupported = window.Worker && window.URL && window.Blob;

//     return isWorkerSupported;
// }

// export default class WebWorker {
//     constructor(workerLocation: any) {
//         if(isWebWorkerAvailable()) {
//             try{
//                 let blob =  new window.Blob([workerLocation], {type: 'text/javascript'});
//                 let workerBlobUrl = window.URL.createObjectURL(blob)
//                 let worker = new Worker(workerBlobUrl);
//                 return worker;
//             } catch(e) {
//                 console.log("error is", e);
//             }
//         } else {
//             alert('Worker not supported in your browser')
//         }
//     }
// }
  