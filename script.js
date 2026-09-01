const destinations = [
  {name:'Navagio Beach',country:'Greece',type:'beach',image:'assets/beach-navagio.svg',description:'A hidden cove framed by limestone cliffs and water in impossible shades of blue.'},
  {name:'Pink Sands Beach',country:'Bahamas',type:'beach',image:'assets/beach-pink.svg',description:'Three miles of blush-colored sand, gentle waves, and barefoot island mornings.'},
  {name:'Fushimi Inari',country:'Japan',type:'temple',image:'assets/temple-kyoto.svg',description:'Walk beneath thousands of vermilion gates winding through Kyoto’s sacred forest.'},
  {name:'Tanah Lot',country:'Indonesia',type:'temple',image:'assets/temple-bali.svg',description:'An ancient sea temple silhouetted against Bali’s fiery evening sky.'},
  {name:'Santorini',country:'Greece',type:'country',image:'assets/beach-santorini.svg',description:'Whitewashed villages, volcanic shores, and Aegean sunsets worth slowing down for.'},
  {name:'Arashiyama',country:'Japan',type:'country',image:'assets/japan-bamboo.svg',description:'Quiet paths through towering bamboo, gardens, and the timeless edges of Kyoto.'}
];

const grid=document.querySelector('#resultsGrid');
function render(items,query=''){
  if(!grid)return;
  grid.innerHTML=items.map(item=>`<article class="destination-card"><div class="card-image"><img src="${item.image}" alt="${item.name}, ${item.country}"><span class="card-tag">${item.type}</span></div><div class="card-body"><span class="card-location">${item.country}</span><h3>${item.name}</h3><p>${item.description}</p></div></article>`).join('');
  document.querySelector('#resultCount').textContent=`${items.length} recommendation${items.length===1?'':'s'}`;
  document.querySelector('#resultsTitle').textContent=query?`Results for “${query}”`:'Places worth the journey';
  document.querySelector('#emptyState').hidden=items.length!==0;
}
render(destinations);
const form=document.querySelector('#searchForm');
if(form){const input=document.querySelector('#searchInput');form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLowerCase();const filtered=destinations.filter(d=>`${d.name} ${d.country} ${d.type} ${d.description}`.toLowerCase().includes(q));render(q?filtered:destinations,input.value.trim());document.querySelector('#recommendations').scrollIntoView({behavior:'smooth'});});document.querySelector('#clearBtn').addEventListener('click',()=>{input.value='';render(destinations);input.focus()})}
document.querySelector('.menu-toggle')?.addEventListener('click',e=>{const nav=document.querySelector('.site-header nav');nav.classList.toggle('open');document.querySelector('.search')?.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formStatus').textContent='Thanks! Your message is ready for its next adventure.';e.currentTarget.reset()});
