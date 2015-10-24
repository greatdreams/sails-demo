﻿function createCookie(n, t, i) {
    var r, u;
    i ? (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toGMTString()) : u = "";
    document.cookie = n + "=" + t + u + "; path=/"
}

function readCookie(n) {
    for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
        if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
    }
    return null
}

function eraseCookie(n) {
    createCookie(n, "", -1)
}

function getInternetExplorerVersion() {
    var n = -1,
        t, i;
    return navigator.appName == "Microsoft Internet Explorer" && (t = navigator.userAgent, i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), i.exec(t) != null && (n = parseFloat(RegExp.$1))), n
}
var a;
readCookie("current-skin") && (a = document.createElement("link"), a.href = readCookie("current-skin"), a.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(a));
location.pathname != "/index-rtl-fa.html" && location.pathname != "/index-rtl-ar.html" && (readCookie("rtl-support") ? (document.getElementById("beyond-link") != null && document.getElementById("beyond-link").setAttribute("href", "assets/css/beyond-rtl.min.css"), document.getElementById("bootstrap-rtl-link") != null && document.getElementById("bootstrap-rtl-link").setAttribute("href", "assets/css/bootstrap-rtl.min.css"), getInternetExplorerVersion() <= 9 && getInternetExplorerVersion() > 0 && (a = document.createElement("link"), a.href = "assets/css/4095-rtl.min.css", a.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(a))) : (document.getElementById("beyond-link") != null && document.getElementById("beyond-link").setAttribute("href", "assets/css/beyond.min.css"), document.getElementById("bootstrap-rtl-link") != null && document.getElementById("bootstrap-rtl-link").setAttribute("href", ""), getInternetExplorerVersion() <= 9 && getInternetExplorerVersion() > 0 && (a = document.createElement("link"), a.href = "assets/css/4095.min.css", a.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(a))));
/*
 //# sourceMappingURL=skins.min.js.map
 */