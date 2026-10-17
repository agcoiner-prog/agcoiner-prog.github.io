!function(e,t){function n(e){const i=t.createElement("div");i.className="heart";i.style.left=e.clientX+"px",i.style.top=e.clientY+"px";const r=['#ff6b6b','#ffd93d','#6bcb77','#4d96ff'];
i.style.background="transparent";
i.style.width="16px";
i.style.height="16px";
i.style.position="fixed";
i.style.pointerEvents="none";
i.style.zIndex="9999";
i.style.animation="heartMove 1s ease-out forwards";
i.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="${r[Math.floor(Math.random()*r.length)]}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
t.body.appendChild(i);
setTimeout(()=>{
  if(i.parentNode) t.body.removeChild(i);
},1000)}
const o=t.createElement("style");
o.textContent=`
@keyframes heartMove{
0%{transform:scale(1);opacity:1}
100%{transform:translateY(-80px) scale(0);opacity:0}
}
`;
t.head.appendChild(o),t.addEventListener("click",n)}(window,document);

