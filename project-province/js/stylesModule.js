import { itemsTour, itemsFood, itemsTrip, itemsCarousel } from "./constants.js";
window.onscroll = function() {appear()};
const appear = () => {
  const oneVhInPixels = window.innerHeight * 0.01;
  const txtLogo = document.getElementById("txt-logo");
  const navbar = document.getElementById("navbar");

  if (document.documentElement.scrollTop > 150) {
    txtLogo.className = "hidden"
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
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
  food();
  trip();
  carousel();
});

const tour = () => {
  const t = document.getElementById("tour")
  const show = itemsTour.map((i, index)=>
    `<div class="card-container card-tour">
        <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay=${(index+1)*100}>
        <div class="card-header">${i.title}</div>
        <img class="card-img-top" src=${i.img} alt=${i.title}>
        <div class="card-body">
          <p class="card-text">${i.info}</p>
        </div>
      </div>
    </div>`
  )
  t.innerHTML = show.join("")
}

const food = () => {
  const t = document.getElementById("food")
  const show = itemsFood.map((i, index)=>
    i.title != '' ?
    `<div class="card-container card-food">
        <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay=${(index+1)*100}>
        <div class="card-header">${i.title}</div>
        <img class="card-img-top" src=${i.img} alt=${i.title}>
        <div class="card-body">
          <p class="card-text">${i.info}</p>
        </div>
      </div>
    </div>` : ''
  )
  t.innerHTML = show.join("")
}

const trip = () => {
  const t = document.getElementById("trip")
  const show = itemsTrip.map((i, index)=>
    i.place != '' ?
    `<li>
      <a href=${i.url}><span>${i.day}:</span> ${i.title}<br><img src="${i.img}" alt=""></a>
      <p class="mt-2">${i.info}</p>
    </li>` : ''
  )
  t.innerHTML = show.join("")
}

const carousel = () => {
  const c = document.getElementById("carouselTour")
  const id = document.getElementById("carouselID")
  const show = itemsCarousel.map((i, index)=>
    `<div class="carousel-item ${index == 0 ? 'active' : ''}">
      <img class="d-block w-100" src=${i.img} alt=${i.alt}>
    </div>`
  );
  const showID = itemsCarousel.map(
    (i, index) =>
      i.title != '' ?
      `<li data-target="#carouselIndicators" data-slide-to="${index}" class=${
        index == 0 ? "active" : ""
      }></li>` : ''
  )
  c.innerHTML = show.join("")
  id.innerHTML = showID.join("")
}


