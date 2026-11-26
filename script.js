/* script.js — สร้างหน้าเว็บจากข้อมูลใน data.js (ปกติไม่ต้องแก้) */
let _n=0;
const SC=[{a:"#BFDDF7",b:"#F6FAFE",s:[118,26],h:["#CFE6F2","#A9D3DC","#BFE3D3"],m:0},{a:"#CFE3FA",b:"#FFFFFF",s:[34,30],h:["#D6E9F5","#B4D9DE","#C9E8D8"],m:1},{a:"#B5D6F4",b:"#EEF6FD",s:[90,22],h:["#C3DCEF","#9CCBD3","#B5DFCB"],m:0},{a:"#D8E8FA",b:"#FBFDFF",s:[130,34],h:["#D0E4F3","#B0D6DC","#C4E6D4"],m:1}];
const cl=(x,y,k)=>`<g fill="#fff" opacity=".9"><ellipse cx="${x}" cy="${y}" rx="${14*k}" ry="${4.5*k}"/><ellipse cx="${x+8*k}" cy="${y-3*k}" rx="${9*k}" ry="${5*k}"/><ellipse cx="${x-8*k}" cy="${y-2*k}" rx="${8*k}" ry="${4*k}"/></g>`;
function scene(v){const c=SC[v%4],id="sg"+(++_n),[x,y]=c.s;
return `<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.a}"/><stop offset="1" stop-color="${c.b}"/></linearGradient></defs><rect width="160" height="100" fill="url(#${id})"/><circle cx="${x}" cy="${y}" r="16" fill="#fff" opacity=".55"/><circle cx="${x}" cy="${y}" r="8" fill="#FFF4D8"/>${cl((x+70)%130+12,22,1)}${cl((x+30)%120+18,40,.7)}${c.m?`<path d="M0 66L28 46 50 62 78 40 108 64 134 48 160 64V100H0Z" fill="${c.h[0]}"/>`:`<path d="M0 66Q40 50 80 64T160 58V100H0Z" fill="${c.h[0]}"/>`}<path d="M0 78Q50 62 100 76T160 72V100H0Z" fill="${c.h[1]}"/><path d="M0 90Q60 78 120 88T160 86V100H0Z" fill="${c.h[2]}"/></svg>`}
const $=id=>document.getElementById(id),dlg=$("dlg"),db=$("dbody");
const m=(o,k)=>`<div class="m ${k||""}">${o.img?`<img src="${o.img}" alt="${o.t}">`:scene(o.t.length)+(k==="cert"?"<span>ใส่ภาพเกียรติบัตร</span>":"")}</div>`;
const tg=a=>`<div class="tags">${a.map(x=>`<i>${x}</i>`).join("")}</div>`;
//$("feat").innerHTML=`${m(FEAT)}<div class="fb"><span class="badge">${FEAT.c}</span><h3>${FEAT.t}</h3><dl><div><dt>Challenge</dt><dd>${FEAT.q}</dd></div><div><dt>Approach</dt><dd>${FEAT.i}</dd></div><div><dt>My Contribution</dt><dd>${FEAT.r}</dd></div></dl>${tg(FEAT.g)}<button class="btn main" id="fbtn">View Details</button></div>`;

const featuredProjects = [FEAT, FEAT2];

$("feat").innerHTML = featuredProjects.map((p, i) => `
    <article class="featured-card">

        ${m(p)}

        <div class="fb">
            <span class="badge">${p.c}</span>
            <h3>${p.t}</h3>

            <dl>
                <div>
                    <dt>Challenge</dt>
                    <dd>${p.q}</dd>
                </div>

                <div>
                    <dt>Approach</dt>
                    <dd>${p.i}</dd>
                </div>

                <div>
                    <dt>My Contribution</dt>
                    <dd>${p.r}</dd>
                </div>
            </dl>

            ${tg(p.g)}

            <button class="btn main featured-detail"
                    data-index="${i}">
                View Details
            </button>

            ${renderProjectButtons(p)}
        </div>

    </article>
`).join("");

// $("grid").innerHTML=W.map((p,i)=>`<button class="card" data-i="${i}">${m(p)}<div class="b"><div class="meta">${p.c}</div><h3>${p.t}</h3><p>${p.d}</p></div></button>`).join("");

$("grid").innerHTML = W.map((p,i) => `
    <article class="project-item">

        <button class="card" data-i="${i}">
            ${m(p)}

            <div class="b">
                <div class="meta">${p.c}</div>
                <h3>${p.t}</h3>
                <p>${p.d}</p>
            </div>
        </button>

        ${renderProjectButtons(p)}

    </article>
`).join("");

$("cgrid").innerHTML=C.map((p,i)=>`<button class="card c" data-k="${i}">${m(p,"cert","พื้นที่ใส่เกียรติบัตร")}<div class="b"><h3>${p.t}</h3><div class="meta" style="margin:0">${p.c}</div></div></button>`).join("");
const gal=o=>o.imgs&&o.imgs.length?`<div class="gal">${o.imgs.map(s=>`<img src="${s}" alt="${o.t}" loading="lazy">`).join("")}</div>`:"";
const open=h=>{db.innerHTML=h;dlg.showModal()};
//$("ban").innerHTML=scene(7);
$("sgrid").innerHTML=S.map(p=>`<div class="sk2">${m(p,"","พื้นที่ใส่รูปประกอบ")}<div class="sb"><h3>${p.t}</h3><p>${p.d}</p><div class="ex"><b>Practical Experience</b>${p.e}</div></div></div>`).join("");
const tabs=[...document.querySelectorAll(".tab")];
function pick(t){tabs.forEach(x=>{const on=x===t;x.setAttribute("aria-selected",on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute("aria-controls")).hidden=!on});t.focus()}
tabs.forEach((t,i)=>{t.onclick=()=>pick(t);t.onkeydown=e=>{const d={ArrowRight:1,ArrowLeft:-1}[e.key];if(d){e.preventDefault();pick(tabs[(i+d+tabs.length)%tabs.length])}}});
$("go-works").onclick=()=>pick($("tab-works"));
//$("fbtn").onclick=()=>open(`${m(FEAT)}<div class="db"><div class="meta">${FEAT.c}</div><h3>${FEAT.t}</h3><p>${FEAT.q}</p><p>${FEAT.i}</p>${tg(FEAT.g)}${gal(FEAT)}</div>`);

document.querySelectorAll(".featured-detail").forEach(btn => {
    btn.onclick = () => {
        const p = featuredProjects[Number(btn.dataset.index)];

        open(`
            ${m(p)}

            <div class="db">
                <div class="meta">${p.c}</div>
                <h3>${p.t}</h3>

                <h4>Challenge</h4>
                <p>${p.q}</p>

                <h4>Approach</h4>
                <p>${p.i}</p>

                <h4>My Contribution</h4>
                <p>${p.r}</p>

                ${tg(p.g)}
                ${gal(p)}
                ${renderProjectButtons(p)}
            </div>
        `);
    };
});

$("grid").onclick=e=>{const b=e.target.closest(".card");if(!b)return;const p=W[+b.dataset.i];open(`${m(p)}<div class="db"><div class="meta">${p.c}</div><h3>${p.t}</h3><p>${p.l}</p>${tg(p.g)}${gal(p)}</div>`)};
$("cgrid").onclick=e=>{const b=e.target.closest(".card");if(!b)return;const p=C[+b.dataset.k];open(`${m(p,"cert","พื้นที่ใส่เกียรติบัตร")}<div class="db"><div class="meta">${p.c}</div><h3>${p.t}</h3></div>`)};
dlg.querySelector(".close").onclick=()=>dlg.close();
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};

/* Presentation and Google Colab */

function renderProjectButtons(p) {
    return `
        <div class="portfolio-actions">

            ${p.pdf ? `
                <a class="presentation-link"
                   href="${p.pdf}"
                   target="_blank"
                   rel="noopener noreferrer">
                    <strong>View Presentation ↗</strong>
                    <small>Project Slides · PDF</small>
                </a>
            ` : ""}

            ${p.colab ? `
                <a class="colab-link"
                   href="${p.colab}"
                   target="_blank"
                   rel="noopener noreferrer">
                    <strong>Open in Colab ↗</strong>
                    <small>Source Code · Notebook</small>
                </a>
            ` : ""}

        </div>
    `;
}

/* Featured Project */
// document.querySelector("#feat .fb")
//     .insertAdjacentHTML(
//         "beforeend",
//         renderProjectButtons(FEAT)
//     );

/* Other Projects */
$("grid").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;

    const p = W[Number(card.dataset.i)];
    if (!p) return;

    db.insertAdjacentHTML(
        "beforeend",
        renderProjectButtons(p)
    );
});

