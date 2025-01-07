
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}


function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = `Last modification: ${lastModified}`;
}


window.onload = function() {
    setCurrentYear();
    setLastModifiedDate();
};
