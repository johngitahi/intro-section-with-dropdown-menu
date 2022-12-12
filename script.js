// When the user clicks on the button, toggle between
// hiding and showing the dropdown content

function dropFeaturesbtn() {
    document.getElementById("featuresDropdown").classList.toggle("show");
}

// When the user clicks the Company button, toggle between hiding and showing
// the dropdown content

function dropCompanybtn() {
    document.getElementById("companyDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var linkDropdown = document.getElementById("featuresDropdown");
        if (linkDropdown.classList.contains('show')) {
            linkDropdown.classList.remove('show');
        }
    }
}