/**
 * Returns the Operating System information
 *
 */
export function getUserOS() {
    var userAgent = window.navigator.userAgent;
    var platform = window.navigator.platform;
    var macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    var windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    var iosPlatforms = ["iPhone", "iPad", "iPod"];
    var name = "";
    if (macosPlatforms.includes(platform)) {
        name = "Mac OS";
    }
    else if (iosPlatforms.includes(platform)) {
        name = "iOS";
    }
    else if (windowsPlatforms.includes(platform)) {
        name = "Windows";
    }
    else if (/Android/.test(userAgent)) {
        name = "Android";
    }
    else if (!name && /Linux/.test(platform)) {
        name = "Linux";
    }
    return {
        name: name,
        version: ""
    };
}
