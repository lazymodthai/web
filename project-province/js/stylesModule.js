import { items } from "./constants.js";
window.onscroll = function() {appear()};
const appear = () => {
  const oneVhInPixels = window.innerHeight * 0.01;
  const txtLogo = document.getElementById("txt-logo");
  const navbar = document.getElementById("navbar");

  if (document.documentElement.scrollTop > 150) {
    txtLogo.className = "hidden"
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    navbar.style.transition = "all ease 0.3s"
  } else {
    txtLogo.className = "visible"
    navbar.style.backgroundColor = ""
  }

  if (document.documentElement.scrollTop > oneVhInPixels) {
  }
}

document.addEventListener("DOMContentLoaded", () => {
  tour();
});

const tour = () => {
  // https://travel.trueid.net/detail/aqP4e528vNd
  const t = document.getElementById("tour")
  const show = items.map((i)=>
    `<div class="card">
      <div class="card-header">${i.title}</div>
      <img class="card-img-top" src=${i.img} alt=${i.title}>
      <div class="card-body">
        <p class="card-text">${i.info}</p>
      </div>
    </div>`
  )
  t.innerHTML = show.join("")
}


