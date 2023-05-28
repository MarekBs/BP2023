



const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");


function updateMainMargin() {
  const sidebarWidth = sidebar.offsetWidth;
  main.style.marginLeft = `${sidebarWidth}px`;
  const availableWidth = document.body.clientWidth - sidebarWidth;
  main.style.width = `${availableWidth}px`;
}

window.addEventListener("resize", updateMainMargin);
updateMainMargin();





