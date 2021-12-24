function get_dust_version() {
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.github.com/repos/kadir014/Dust/readme", false);
    req.send();

    let json = JSON.parse(req.responseText);

    let content = decodeURIComponent(escape(window.atob(json["content"])));

    const pattern = /version-(\d|\.)+-yellow/;
    let found = content.match(pattern);

    return found[0].split("-")[1];
}

function onload() {
    let versionstr = document.querySelector("#dust-version");
    versionstr.innerHTML = "v" + get_dust_version();
}