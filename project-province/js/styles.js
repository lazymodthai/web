window.onscroll = function() {myFunction()};

function myFunction() {
  var txtLogo = document.getElementById("txt-logo");
  var navbar = document.getElementById("navbar");
  if (document.documentElement.scrollTop > 150) {
    txtLogo.className = "hidden"
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    navbar.style.transition = "all ease 0.3s"
  } else {
    txtLogo.className = "visible"
    navbar.style.backgroundColor = ""
  }
}
