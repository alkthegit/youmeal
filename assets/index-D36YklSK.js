(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c();function c(){if(!document)return;document.addEventListener("DOMContentLoaded",()=>{const o=new Date,n=`${o.toLocaleDateString()} ${o.toLocaleTimeString()}`,e=document.createElement("aside");e.classList.add("app-stamp"),e.insertAdjacentHTML("beforeend",`
            <p>${n}</p>
        `),e.setAttribute("aria-hidden",!0),document.body.append(e)});const i=document.querySelector("head");if(i==null)return;const r=document.createElement("style");r.setAttribute("type","text/css"),r.textContent=`
        .app-stamp {
            position: absolute !important;
            right: 0 !important;
            top: 0 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            backdrop-filter: brightness(10%);
            // background-color: rgb(56, 56, 56) !important;
            font-size: 11px !important;
            font-weight: bold;
            height: 1.5em;
            width: 10em;

            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;

            z-index: 999;

            p {
                color: #FFFFFFC0;
                line-height: 0;
            }
        }
    `,i.appendChild(r)}
