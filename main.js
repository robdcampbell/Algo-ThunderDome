//
//
// side nav buttons to show/hide
const toggleSortOptions = document.getElementById("sorting__toggle");
const toggleArrayOptions = document.getElementById("array__toggle");
const toggleGeneralOptions = document.getElementById("general__toggle");
const toggleDataStructOptions = document.getElementById("dataStruct__toggle");

// event listeners for toggling
toggleSortOptions.addEventListener("click", sortOptionsMenu);
toggleArrayOptions.addEventListener("click", sortOptionsMenu);
toggleGeneralOptions.addEventListener("click", sortOptionsMenu);
toggleDataStructOptions.addEventListener("click", sortOptionsMenu);

function sortOptionsMenu(e) {
  e.target.nextElementSibling.classList.toggle("hidden");
}
