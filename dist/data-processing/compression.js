import pako from "pako";
export function gzip(data) {
    return pako.gzip(JSON.stringify(data));
}
