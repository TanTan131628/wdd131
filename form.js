document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const products = [
        { id: "p1", name: "Laptop" },
        { id: "p2", name: "Smartphone" },
        { id: "p3", name: "Headphones" },
        { id: "p4", name: "Smartwatch" },
        { id: "p5", name: "Tablet" }
    ];

    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    
    const reviewForm = document.getElementById("reviewForm");
    reviewForm.addEventListener("submit", function (event) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
    });
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