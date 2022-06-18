var header_dropdown_body = document.getElementById('header-dropdown-body');
var header_dropdown = document.getElementById('header-dropdown');
header_dropdown.addEventListener('mouseover', () => {
    header_dropdown_body.style.display = "block";
});

header_dropdown.addEventListener('mouseout', () => {
    header_dropdown_body.style.display = "none";
});