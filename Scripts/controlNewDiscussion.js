let areaPNT = document.getElementById('areaPNT');
let btnPNT = document.getElementById('btnPNT');


let areaHNT = document.getElementById('areaHNT');
let btnHNT = document.getElementById('btnHNT');

let btnPsNT = document.getElementById('btnPsNT');
let areaPsNT = document.getElementById('areaPsNT');

btnPNT.addEventListener('click', (e) => {
    areaHNT.style.display = 'block';
    areaPNT.style.display = 'none';
});

btnHNT.addEventListener('click', (e) => {
    areaPsNT.style.display = 'flex';
    areaHNT.style.display = 'none';
})

btnPsNT.addEventListener('click', (e) => {
    areaHNT.style.display = 'block';
    areaPsNT.style.display = 'none';
});