// =======================Imports==================================

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/error.svg';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ==============================================================

// =====================Form-Search=========================================
const formSearch = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

formSearch.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (form.elements.input.value.trim() === '') {
    iziToast.warning({
      theme: 'dark',
      position: 'topRight',
      message: 'Input is empty',
      backgroundColor: 'rgb(255, 150, 0)',
      progressBarColor: 'rgb(180, 70, 0)',
    });
    return;
  }

  const searchQuery = form.elements.input.value.trim();
  gallery.innerHTML = '';
  showLoader();
  fetchPhotos(searchQuery);
}

function buildApiUrl(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const params = new URLSearchParams({
    key: '43998690-c32ec46c3205eb1d30dd41df5',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return `${BASE_URL}${END_POINT}?${params}`;
}

function fetchPhotos(query) {
  const url = buildApiUrl(query);
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => handlePhotoData(data))
    .catch(error => {
      console.log('Error fetching photos:', error);
    })
    .finally(() => hideLoader());
}

function handlePhotoData(photoData) {
  if (!photoData.hits.length) {
    iziToast.error({
      theme: 'dark',
      position: 'topRight',
      progressBarColor: 'rgb(181, 27, 27)',
      backgroundColor: 'rgb(239, 64, 64)',
      iconUrl: iconError,
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    hideLoader();

    return;
  }
  const fragment = photoData.hits
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;

      return `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
            <div class="img-descr-container">
              <p class="img-descr-subtitle">Likes<span class="img-descr-qty">${likes}</span></p>
              <p class="img-descr-subtitle">Views<span class="img-descr-qty">${views}</span></p>
              <p class="img-descr-subtitle">Comments<span class="img-descr-qty">${comments}</span></p>
              <p class="img-descr-subtitle">Downloads<span class="img-descr-qty">${downloads}</span></p>
            </div>
          </a>
        </li>`;
    })
    .join('');

  gallery.innerHTML = fragment;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
      captionsData: 'alt',
      scrollZoom: false,
    });
    lightbox.on('error.simplelightbox', function (e) {
      console.log(e);
    });
  }
  formSearch.reset();
}
// ==============================================================
