
function changeTheme() {
    const body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");
}
function toggleSideMenu() {
    const sideMenu = document.querySelector(".side-menu");
    sideMenu.classList.toggle("displayed");
}

