async function appendImageElem(keyword, index) {
  const accessKey = 'DwTpRJDDsBqe90JQDwn6gNnPrx8C1qBU-BfiQoV_wVE';
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&page=${index}&per_page=1&client_id=${accessKey}`);
  
  if (response.ok) {
    const data = await response.json();
    if (data.results.length > 0) {
      const imgElem = document.createElement('img');
      imgElem.src = data.results[0].urls.small;

      const galleryElem = document.querySelector('.gallery');
      galleryElem.appendChild(imgElem);
    }
  } else {
    console.error('Error:', response.statusText);
  }
}

function removePhotos() {
  const galleryElem = document.querySelector('.gallery');
  galleryElem.innerHTML = '';
}

function searchPhotos(event) {
  const keyword = event.target.value;

  if (event.key === 'Enter' && keyword) {
    removePhotos();

    for (let i = 1; i <= 9; i++) {
      appendImageElem(keyword, i);
    }
  }
}

function run() {
  const inputElem = document.querySelector('input');
  inputElem.addEventListener('keydown', searchPhotos);
}

run();
