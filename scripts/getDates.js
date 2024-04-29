function getCurrentYear() {
    return new Date().getFullYear();
}

function getLastModifiedDate() {
    return document.lastModified;
}

document.getElementById("year").innerText = getCurrentYear();


document.getElementById("lastModified").innerText = "Last Modified: " + getLastModifiedDate();