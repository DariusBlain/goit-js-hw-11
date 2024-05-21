import{i as c,S as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const y="/goit-js-hw-11/assets/error-74a0cd69.svg",l=document.querySelector(".form"),u=document.querySelector(".gallery"),m=document.querySelector(".loader");let a;function b(){m.style.display="block"}function d(){m.style.display="none"}l.addEventListener("submit",L);function L(o){o.preventDefault();const s=o.target;if(s.elements.input.value.trim()===""){c.warning({theme:"dark",position:"topRight",message:"Input is empty",backgroundColor:"rgb(255, 150, 0)",progressBarColor:"rgb(180, 70, 0)"});return}const e=s.elements.input.value.trim();u.innerHTML="",b(),S(e)}function w(o){const s="https://pixabay.com",e="/api",n=new URLSearchParams({key:"43998690-c32ec46c3205eb1d30dd41df5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${s}${e}?${n}`}function S(o){const s=w(o);fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>q(e)).catch(e=>{console.log("Error fetching photos:",e)}).finally(()=>d())}function q(o){if(!o.hits.length){c.error({theme:"dark",position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:y,message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}const s=o.hits.map(e=>{const{webformatURL:n,largeImageURL:r,tags:t,likes:i,views:g,comments:p,downloads:f}=e;return`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${t}"
            />
            <div class="img-descr-container">
              <p class="img-descr-subtitle">Likes<span class="img-descr-qty">${i}</span></p>
              <p class="img-descr-subtitle">Views<span class="img-descr-qty">${g}</span></p>
              <p class="img-descr-subtitle">Comments<span class="img-descr-qty">${p}</span></p>
              <p class="img-descr-subtitle">Downloads<span class="img-descr-qty">${f}</span></p>
            </div>
          </a>
        </li>`}).join("");u.innerHTML=s,a?a.refresh():(a=new h(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",scrollZoom:!1}),a.on("error.simplelightbox",function(e){console.log(e)})),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
