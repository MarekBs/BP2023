


// get references to the sidebar and main elements
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector("main");

// update the margin of the main element on window resize
function updateMainMargin() {
  const sidebarWidth = sidebar.offsetWidth;
  main.style.marginLeft = `${sidebarWidth}px`;
  console.log(sidebarWidth);
  const availableWidth = document.body.clientWidth - sidebarWidth;
  main.style.width = `${availableWidth}px`;
}

window.addEventListener("resize", updateMainMargin);
updateMainMargin();

