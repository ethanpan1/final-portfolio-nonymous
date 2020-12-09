function openNav() {
  document.getElementById("sidenav").style.width = "75%";
  document.getElementById("main").style.right = "75%";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0%";
  document.getElementById("main").style.right = "0%";
  document.getElementById("nav").style.top = "0";
}