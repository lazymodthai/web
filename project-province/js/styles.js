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
  { type: 2, district: 'ทุ่งช้าง', size: 760.811, population: 18935},
  { type: 2, district: 'เฉลิมพระเกียรติ', size: 518.690, population: 9832},
]



const showDistrict = (param) => {
  let svg = document.getElementsByClassName("svg-map");
  for (let i = 0; i < svg.length; i++) {
    if (i+1 === param) {
      svg[i].classList.add("active-map");
    } else {
      svg[i].classList.remove("active-map");
    }
  }
  const t = document.getElementById("tb1");
  const d = document.getElementById("tb2");
  t.innerHTML = param === -1 ? "จังหวัด" : "อำเภอ";
  d.innerHTML = spec[param].district;
  runCounter(param);
};


const runCounter = (num) => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = counter.id == 'size' ? spec[num || 0].size : spec[num || 0].population;
    counter.innerText = target/2;
    const updateCounter = () => {
      const count = +counter.innerText;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + target / 200)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCounter();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  runCounter();
  tour();
});

const tour = () => {
  // https://travel.trueid.net/detail/aqP4e528vNd
  const t = document.getElementById("tour")
  const items = [
    {title: "ถนนคนเดินเมืองน่าน", info: "ถนนคนเดินเมืองเหนือ ใช่ว่าจะมีแต่ที่เชียงใหม่ เชียงราย หรือปาย แม่ฮ่องสอน ที่น่านก็มีเช่นเดียวกันที่ ถนนคนเดินเมืองน่าน หรือ ถนนคนเดินกาดข่วงเมืองน่าน ซึ่งตั้งอยู่ที่ถนนผากอง ข้างวัดภูมินทร์และข่วงเมืองน่าน", img: "imgs/tour/001.jpg"},
    {title: "ปัว", info: "หลบไปใช้ชีวิตแบบช้าๆ กันที่อำเภอปัว จังหวัดน่าน ความสงบเรียบง่ายของที่นี่จะทำให้ต้องตกหลุมรัก โดยเฉพาะบรรยากาศทุ่งนาสีเขียวขจีที่โอบล้อมด้วยภูเขาในช่วงหน้าฝนที่ทุ่งนาต่างก็เขียวชอุ่ม สายฝนโปรยปรายให้สดชื่น", img: "imgs/tour/002.jpg"},
    {title: "เสาดินนาน้อย และ คอกเสือ", info: "เสาดินนาน้อย (ฮ่อมจ๊อม) และ คอกเสือ เป็นที่เที่ยวธรรมชาติที่สวยงาม อยู่ห่างจากที่ทำการอุทยานแห่งชาติศรีน่านประมาณ 24 กิโลเมตร ซึ่งที่นี่มีลักษณะเป็นเสาดินมีลักษณะแปลกตาคล้าย แพะเมืองผี ที่จังหวัดแพร่ นั่นเอง ทำให้ที่นี่กลายเป็นจุดท่องเที่ยวที่แปลกตา และถ่ายรูปสวยมากๆ", img: "imgs/tour/003.jpg"},
    {title: "4", info: "", img: "imgs/tour/004.jpg"},
    {title: "5", info: "", img: "imgs/tour/005.jpg"},
    {title: "6", info: "", img: "imgs/tour/006.jpg"},
    {title: "7", info: "", img: "imgs/tour/007.jpg"},
    {title: "บ่อเกลือสินเธาว์", info: "อำเภอบ่อเกลือ ห่างจากตัวเมืองน่านไปประมาณ 80 กิโลเมตร ที่นี่เป็น แหล่งผลิตเกลือสินเธาว์ เพราะมีบ่อน้ำเกลือสินเธาว์อยู่ถึง 9 บ่อด้วยกัน เป็นแหล่งเกลือสินเธาว์ขนาดใหญ่ที่มีความสำคัญมาแต่โบราณ และยังเป็นแหล่งเกลือภูเขาที่มีเพียงแห่งเดียวในโลกเท่านั้นอีกด้วย", img: "imgs/tour/008.jpg"},
  ]
  const show = items.map((i)=>
    `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${i.img} alt=${i.title}>
      <div class="card-body">
        <p class="card-text">${i.info}</p>
      </div>
    </div>`
  )
  t.innerHTML = show.join(",")
}


