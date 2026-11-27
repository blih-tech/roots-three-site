'use strict';
const menu=document.querySelector('.menu');const nav=document.querySelector('#nav');const links=Array.from(nav.querySelectorAll('a'));
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.querySelector('span').textContent='+';}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.querySelector('span').textContent=open?'−':'+';});
links.forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
if('IntersectionObserver' in window){const sections=links.map(link=>document.querySelector(link.hash)).filter(Boolean);const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-20% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));}
