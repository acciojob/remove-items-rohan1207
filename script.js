// Function to remove the selected color
function removeColor() {
    const select = document.getElementById("colorSelect");
    const selectedOption = select.options[select.selectedIndex];  // Get the selected option

   
    if (selectedOption) {
        select.remove(select.selectedIndex);
    }
}
