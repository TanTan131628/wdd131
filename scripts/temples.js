

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
});




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
