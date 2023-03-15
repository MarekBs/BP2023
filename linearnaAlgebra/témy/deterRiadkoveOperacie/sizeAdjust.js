const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");

// update the margin of the main element on window resize
function updateMainMargin() {
  const sidebarWidth = sidebar.offsetWidth;
  main.style.marginLeft = `${sidebarWidth}px`;
  const availableWidth = document.body.clientWidth - sidebarWidth;
  main.style.width = `${availableWidth}px`;
  
}
updateMainMargin();
window.addEventListener("resize", updateMainMargin);
