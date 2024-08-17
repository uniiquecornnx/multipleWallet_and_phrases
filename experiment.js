const bs58 = require('bs58');


function uint8arraytobs58(uint8array){
    return bs58.encode(uint8array);

}

let uint8array = new Uint8Array([212,3,45,77]);
let final= new uint8arraytobs58(uint8array);
console.log(final);