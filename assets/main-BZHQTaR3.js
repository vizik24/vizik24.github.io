import{initializeApp as f}from"https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";import{getFirestore as y,doc as s,setDoc as h,getDoc as g,updateDoc as w,increment as b}from"https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const I={apiKey:"AIzaSyCfJ217xO99BO-uKaRJoydD_Oc3s3PGacQ",authDomain:"park-bench-socials.firebaseapp.com",projectId:"park-bench-socials",storageBucket:"park-bench-socials.appspot.com",messagingSenderId:"708422331207",appId:"1:708422331207:web:704171df5313a0ecb17a62",measurementId:"G-WJYFJQ0JQP"},S=f(I),l=y(S);function k(){return new Date().toISOString()}function E(e){const r="https://meet-me-outside.com/index.html",a=btoa(e);return`${r}?ref=${a}`}async function u(){const e=document.getElementById("name").value,r=document.getElementById("email").value,a=document.getElementById("updates").checked,c=k(),o=new URLSearchParams(window.location.search).get("ref");if(e&&r)try{const n=E(r),m=s(l,"waitlist",r);if(await h(m,{name:e,email:r,updates:a,timestamp:c,referralLink:n,referralNumber:0}),o){const p=atob(o),i=s(l,"waitlist",p);(await g(i)).exists()&&await w(i,{referralNumber:b(1)})}document.getElementById("unique-link").value=n,document.querySelector(".container-wrapper").style.display="none",document.querySelector(".thank-you-message").style.display="block",d(n)}catch(n){console.error("Error adding document: ",n),alert("Error! Please try again.")}else alert("Please enter your name and a valid email address.")}function L(){const e=document.getElementById("unique-link");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value).then(()=>{alert("Link copied to clipboard!")}).catch(r=>{console.error("Could not copy text: ",r)})}window.copyToClipboard=L;window.joinWaitlist=u;document.querySelector("button").addEventListener("click",u);function d(e){const r=document.getElementById("facebook-share");r.href=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}`;const a=document.getElementById("twitter-share");a.href=`https://twitter.com/intent/tweet?url=${encodeURIComponent(e)}&text=Join%20me%20on%20Meet%20Me%20Outside!`;const c=document.getElementById("instagram-share");c.href=`https://www.instagram.com/?url=${encodeURIComponent(e)}`}document.querySelector("button").addEventListener("click",()=>{const e=document.getElementById("unique-link").value;e&&d(e)});
