var header_dropdown_button = document.getElementById('header-dropdown-button');
var header_dropdown = document.getElementById('header-dropdown-body');
var is_header_dropdown_active = false;



// document.body.addEventListener('click', () => {setTimeout(() => {
//     header_dropdown_button.addEventListener('click', () => {
//         if(is_header_dropdown_active){
//             header_dropdown.style.top = "-300px";
//             is_header_dropdown_active = false;
//         } else {
//             header_dropdown.style.top = "60px";
//             is_header_dropdown_active = true;
//         }
//     });
//     if(is_header_dropdown_active && !is_click_header_dropdown_active){
//         header_dropdown.style.top = "-300px";
//         is_header_dropdown_active = false;
//     }
// }, 100)});

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }