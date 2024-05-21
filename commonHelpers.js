import{i as l,S as b}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c="/goit-js-hw-11/assets/error-74a0cd69.svg",u=document.querySelector(".form"),d=document.querySelector(".gallery"),m=document.querySelector(".loader");let a;function L(){m.style.display="block"}function g(){m.style.display="none"}u.addEventListener("submit",w);function w(o){o.preventDefault();const s=o.target;if(s.elements.input.value.trim()===""){l.warning({theme:"dark",position:"topRight",message:"Input is empty",backgroundColor:"rgb(255, 150, 0)",progressBarColor:"rgb(180, 70, 0)"});return}const r=s.elements.input.value.trim();d.innerHTML="",L(),q(r)}function S(o){const s="https://pixabay.com/api",r=new URLSearchParams({key:"43998690-c32ec46c3205eb1d30dd41df5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return`${s}?${r}`}function q(o){const s=S(o);fetch(s,{referrerPolicy:"unsafe-url"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>v(r)).catch(r=>{console.log("Error fetching photos:",r),l.error({theme:"dark",position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:c,message:r.message})}).finally(()=>g())}function v(o){if(!o.hits.length){l.error({theme:"dark",position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:c,message:"Sorry, there are no images matching your search query. Please try again!"}),g();return}const s=o.hits.map(i=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:p,views:f,comments:h,downloads:y}=i;return`<li class="gallery-item hidden">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${n}"
            />
            <div class="img-descr-container">
              <p class="img-descr-subtitle">Likes<span class="img-descr-qty">${p}</span></p>
              <p class="img-descr-subtitle">Views<span class="img-descr-qty">${f}</span></p>
              <p class="img-descr-subtitle">Comments<span class="img-descr-qty">${h}</span></p>
              <p class="img-descr-subtitle">Downloads<span class="img-descr-qty">${y}</span></p>
            </div>
          </a>
        </li>`}).join("");d.innerHTML=s,document.querySelectorAll(".gallery-item").forEach((i,e)=>{setTimeout(()=>{i.classList.remove("hidden"),i.classList.add("fade-in")},e*100)}),a?a.refresh():(a=new b(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",scrollZoom:!1}),a.on("error.simplelightbox",function(i){console.log(i)})),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
