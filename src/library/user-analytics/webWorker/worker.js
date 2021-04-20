/* eslint-env worker */
// const worker: Worker = window.self ;

import { compress} from "../dataCompression/compress";

let sampleData = {
    id: 1,
    event: { onClick: 'onClick Event', onChange: 'onChange Event'},
    name: 'Purnima',
    browser: 'Chrome',
    machine: 'Linux'
}

// onmessage = function(e) {
//     console.log('Worker: Message received from main script');
//     if(!e) return;
//     if(e.data) {
//         compress(e.data);
//         postMessage({
//             action: "COMPRESSED_DATA",
//             data: e.data,
//             success: true
//         })
//     }
// }

// export default () => {
//     self.addEventListener("message", (e) => {// eslint-disable-line no-restricted-globals
//         console.log("worker----------")
    
//         if (!e) return;
//         console.log("e inside worker file is", e.data);
//         const dataToCompress = e.data;
//         if(e.data) {
//            // compress(e.data);
//             // compress the data
//             // sent it back to main file from where you received it
//             // for(var key in dataToCompress) {
//             //     if(dataToCompress.hasOwnProperty(key)) {
//             //         dataToCompress[key] = pako.gzip(dataToCompress[key], {level: 4});
//             //     }
//             // }
//             console.log("compressed Data using Pako", dataToCompress);
           
//             postMessage({
//                 action: "COMPRESSED_DATA",
//                 data: e.data,
//                 success: true
//             })
//         }
//     });

   
//   };
export default () => {
  onmessage = function(e) {
    console.log('Worker: Message received from main script');
    if(!e) return;
    if(e.data) {
        console.log("compress", compress(sampleData))
        postMessage({
            action: "COMPRESSED_DATA",
            data: e.data,
            success: true
        })
    }
  }
}