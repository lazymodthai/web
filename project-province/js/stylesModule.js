import { itemsTour, itemsFood, itemsTrip, itemsCarousel } from "./constants.js";

window.onscroll = function() {appear()};
const appear = () => {
  const oneVhInPixels = window.innerHeight * 0.01;
  const txtLogo = document.getElementById("txt-logo");
  const navbar = document.getElementById("navbar");

  if (document.documentElement.scrollTop > 150) {
    txtLogo.classList.add("hidden");
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    navbar.style.transition = "all ease 0.3s";
  } else {
    txtLogo.classList.remove("hidden");
    navbar.style.backgroundColor = "";
  }

  if (document.documentElement.scrollTop > oneVhInPixels) {
    // Add any behavior for this case if needed
  }
};

window.onresize = ()=>nav()

const nav = () => {
  const nav = document.getElementById("navbar");
  if(window.innerWidth < 900){
    nav.className = "navbar hidden"
  }else{
    nav.className = "navbar"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  tour();
  food();
  trip();
  carousel();
  nav();
});

const tourCards = document.querySelectorAll(".navbar ul li");
  tourCards.forEach(nav => {
    const navb = document.getElementById("navbar");
    nav.addEventListener("click", (e) => {
      navb.className = window.innerWidth < 900 ? "navbar hidden" : "navbar"
    });
});

const tour = () => {
  const t = document.getElementById("tour");
  const show = itemsTour.map((i, index) =>
    `<div class="card-container card-tour" data-toggle="modal" data-target="#modal" data-index="${index}">
        <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="${(index+1)*100}">
          <div class="card-header">${i.title}</div>
          <img class="card-img-top" src="${i.img}" alt="${i.title}">
          <div class="card-body">
            <p class="card-text">${i.info}</p>
          </div>
        </div>
      </div>`
  );
  t.innerHTML = show.join("");

  const tourCards = document.querySelectorAll(".card-tour");
  tourCards.forEach(card => {
    card.addEventListener("click", (e) => {
      const index = e.currentTarget.getAttribute("data-index");
      setId(index, 'tour');
    });
  });
};

const food = () => {
  const t = document.getElementById("food");

  const show = itemsFood.map((i, index) =>
    i.title !== '' ?
    `<div class="card-container card-food" data-toggle="modal" data-target="#modal" data-index="${index}">
        <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="${(index+1) * 100}">
          <div class="card-header">${i.title}</div>
          <img class="card-img-top" src="${i.img}" alt="${i.title}">
          <div class="card-body">
            <p class="card-text">${i.info}</p>
          </div>
        </div>
      </div>` : ''
  );

  t.innerHTML = show.join("");

  const foodCards = document.querySelectorAll(".card-food");
  foodCards.forEach(card => {
    card.addEventListener("click", (e) => {
      const index = e.currentTarget.getAttribute("data-index");
      setId(index, 'food');
    });
  });
};

const setId = (index, type) => {
  const id = index;
  const mt = document.getElementById("modal-title");
  const mb = document.getElementById("modal-body")
  mt.innerHTML = type == 'tour' ? itemsTour[id].title : itemsFood[id].title;
  mb.innerHTML = type == 'tour' ? itemsTour[id].detail : itemsFood[id].detail;
};

const trip = () => {
  const t = document.getElementById("trip");
  const show = itemsTrip.map((i, index) =>
    i.place !== '' ?
    `<li data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
      <a href=${i.url}><span>${i.day}:</span> ${i.title}<br><img src="${i.img}" alt=""></a>
      <p class="mt-2">${i.info}</p>
    </li>` : ''
  );
  t.innerHTML = show.join("");
};

const carousel = () => {
  const c = document.getElementById("carouselTour");
  const id = document.getElementById("carouselID");
  
  const show = itemsCarousel.map((i, index) =>
    `<div class="carousel-item ${index === 0 ? 'active' : ''}">
      <img class="d-block w-100" src=${i.img} alt=${i.alt}>
    </div>`
  );
  
  const showID = itemsCarousel.map((i, index) =>
    i.title !== '' ?
    `<li data-target="#carouselIndicators" data-slide-to="${index}" class="${index === 0 ? "active" : ""}"></li>` : ''
  );

  c.innerHTML = show.join("");
  id.innerHTML = showID.join("");
};
