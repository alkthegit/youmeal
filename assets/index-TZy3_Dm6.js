(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();c();function c(){!document||(document.addEventListener("DOMContentLoaded",()=>{const o=new Date,n=`${o.toLocaleDateString()} ${o.toLocaleTimeString()}`,r=document.createElement("aside");r.classList.add("app-stamp"),r.insertAdjacentHTML("beforeend",`
            <p>${n}</p>
        `),r.setAttribute("aria-hidden",!0),document.body.append(r)}),document.querySelector("head")==null)}
