function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const toggle = document.querySelector('.toggle');
    navLinks.style.maxHeight = navLinks.style.maxHeight ? null : navLinks.scrollHeight + "px";
    toggle.classList.toggle('open');
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
    } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    }
}