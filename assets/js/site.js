const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver((entries)=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}