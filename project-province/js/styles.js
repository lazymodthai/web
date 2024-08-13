window.onscroll = function() {appear()};

const appear = () => {
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

const spec = [
  { type: 1, district: 'น่าน', size: 11472.072, population: 472722},
  { type: 2, district: 'นาหมื่น', size: 785.608, population: 14256},
  { type: 2, district: 'นาน้อย', size: 1408.122, population: 32109},
  { type: 2, district: 'เวียงสา', size: 1894.893, population: 69581},
  { type: 2, district: 'บ้านหลวง', size: 338.210, population: 11511},
  { type: 2, district: 'เมืองน่าน', size: 813.126, population: 82060},
  { type: 2, district: 'ภูเพียง', size: 508.236, population: 35929},
  { type: 2, district: 'แม่จริม', size: 998.152, population: 16348},
  { type: 2, district: 'สันติสุข', size: 416.837, population: 15681},
  { type: 2, district: 'ท่าวังผา', size: 702.204, population: 50495},
  { type: 2, district: 'ปัว', size: 657.363, population: 64259},
  { type: 2, district: 'บ่อเกลือ', size: 848.341, population: 15316},
  { type: 2, district: 'เชียงกลาง', size: 277.115, population: 27097},
  { type: 2, district: 'สองแคว', size: 544.364, population: 12466},
  { type: 2, district: 'ทุ่งช้าง', size: 760811, population: 18935},
  { type: 2, district: 'เฉลิมพระเกียรติ', size: 518.690, population: 9832},
]

const showDistrict = (param) => {
  const t = document.getElementById("tb1")
  const d = document.getElementById("tb2")
  t.innerHTML = param+1 == 0 ? "จังหวัด" : "อำเภอ"
  d.innerHTML = spec[param+1].district
  runCounter(param)
}


const runCounter = (num) => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = counter.id == 'size' ? spec[num || 0].size : spec[num || 0].population;
    counter.innerText = target/2;
    
    const updateCounter = () => {
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  });
}

document.addEventListener("DOMContentLoaded", () => runCounter());


