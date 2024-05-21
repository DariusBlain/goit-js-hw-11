import{i as c,S as y}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const b="/goit-js-hw-11/assets/error-74a0cd69.svg",l=document.querySelector(".form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader");let a;function L(){d.style.display="block"}function m(){d.style.display="none"}l.addEventListener("submit",w);function w(i){i.preventDefault();const s=i.target;if(s.elements.input.value.trim()===""){c.warning({theme:"dark",position:"topRight",message:"Input is empty",backgroundColor:"rgb(255, 150, 0)",progressBarColor:"rgb(180, 70, 0)"});return}const t=s.elements.input.value.trim();u.innerHTML="",L(),q(t)}function S(i){const s="https://pixabay.com",t="/api",o=new URLSearchParams({key:"43998690-c32ec46c3205eb1d30dd41df5",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${s}${t}?${o}`}function q(i){const s=S(i);fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>v(t)).catch(t=>{console.log("Error fetching photos:",t)}).finally(()=>m())}function v(i){if(!i.hits.length){c.error({theme:"dark",position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:b,message:"Sorry, there are no images matching your search query. Please try again!"}),m();return}const s=i.hits.map(o=>{const{webformatURL:e,largeImageURL:r,tags:n,likes:g,views:p,comments:f,downloads:h}=o;return`<li class="gallery-item hidden">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${n}"
            />
            <div class="img-descr-container">
              <p class="img-descr-subtitle">Likes<span class="img-descr-qty">${g}</span></p>
              <p class="img-descr-subtitle">Views<span class="img-descr-qty">${p}</span></p>
              <p class="img-descr-subtitle">Comments<span class="img-descr-qty">${f}</span></p>
              <p class="img-descr-subtitle">Downloads<span class="img-descr-qty">${h}</span></p>
            </div>
          </a>
        </li>`}).join("");u.innerHTML=s,document.querySelectorAll(".gallery-item").forEach((o,e)=>{setTimeout(()=>{o.classList.remove("hidden"),o.classList.add("fade-in")},e*100)}),a?a.refresh():(a=new y(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",scrollZoom:!1}),a.on("error.simplelightbox",function(o){console.log(o)})),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
