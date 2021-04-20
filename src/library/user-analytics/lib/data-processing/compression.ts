import pako from "pako";

export function gzip(data: any) : Uint8Array {
    return pako.gzip(JSON.stringify(data));
}