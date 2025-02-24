const frame = 'section';
const box = 'article';
const speed = 'o.2s';
let grid;

window.addEventListener("load", ()=>{
  init();
});

function init(){
  grid = new Isotope(frame, {
    itemSelector : box,
    columWidth : box,
    trnasitionDuration: speed
  });
}

/*  -----------top button------------- */
let Top = document.querySelector('.btn-top');

Top.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth'});
})
