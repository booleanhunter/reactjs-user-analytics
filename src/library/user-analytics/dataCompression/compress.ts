import pako from 'pako';

// let sampleData = [{
//     id: 1,
//     event: { onClick: 'onClick Event', onChange: 'onChange Event'},
//     name: 'Purnima',
//     browser: 'Chrome',
//     machine: 'Linux'
// }]

export function compress(dataToCompress: any){
    console.log("compress ke ander hu mai", dataToCompress)
    console.log(pako);
    // for(var key in dataToCompress) {
    //     if(dataToCompress.hasOwnProperty(key)) {
    //         dataToCompress[key] = pako.gzip(dataToCompress[key], {level: 4});
    //     }
    // }
   //console.log("datatoCompress is", dataToCompress)
    //console.log("compressed data is", output);
   // return output
    // var originalInput = pako.ungzip(output,{ to: 'string' });
    // console.log("uncompressed data - " + originalInput);
}
