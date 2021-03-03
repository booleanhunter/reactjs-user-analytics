export function getUserOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms = ["iPhone", "iPad", "iPod"];
    
    let name = "";

    if (macosPlatforms.includes(platform)) {
        name = "Mac OS";
    } else if (iosPlatforms.includes(platform)) {
        name = "iOS";
    } else if (windowsPlatforms.includes(platform)) {
        name = "Windows";
    } else if (/Android/.test(userAgent)) {
        name = "Android";
    } else if (!name && /Linux/.test(platform)) {
        name = "Linux";
    }

    return {
        name,
        version: ""
    };
}