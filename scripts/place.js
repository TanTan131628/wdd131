// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Function to update the wind chill value
function updateWindChill() {
    const tempElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windSpeed');
    const windChillElement = document.getElementById('windchill');

    if (tempElement && windSpeedElement && windChillElement) {
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    } else {
        console.error("Missing temperature, wind speed, or windchill element.");
    }
}

// Function to set the current year in the footer
function setCurrentYear() {
    const yearElement = document.getElementById("year");
    yearElement.textContent = new Date().getFullYear();   
}

// Function to set the last modified date in the footer
function setLastModifiedDate() {
    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
    
}

// Ensure all functions run after the page loads
document.addEventListener("DOMContentLoaded", function () {
    setCurrentYear();
    setLastModifiedDate();
    updateWindChill();
});
