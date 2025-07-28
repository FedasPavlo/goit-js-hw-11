import{a as d,S as f,i}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="51524426-5f5867281f4474c06ca0f1208";async function g(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><span>Likes</span> <br> ${t}</p>
        <p><span>Vievs</span> <br> ${n}</p>
        <p><span>Comments</span> <br> ${p}</p>
        <p><span>Downloads</span> <br> ${u}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query",position:"topRight"});return}b(),w();try{const o=await g(r);o.hits.length===0?i.info({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",backgroundColor:"#e53935",color:"white"}):L(o.hits)}catch{i.error({message:"Something went wrong. Please try again.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
