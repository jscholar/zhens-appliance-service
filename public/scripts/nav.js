
// Toggle Nav Drawer
var toggleDrawer = () => {
    document.querySelector(".drawer").classList.toggle("closed");
}

document.querySelector(".drawer-open-button")
    .addEventListener("click", toggleDrawer);
