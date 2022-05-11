let areaPNT = document.getElementById('areaPNT');
let btnPNT = document.getElementById('btnPNT');

let areaHNT = document.getElementById('areaHNT');
let btnHNT = document.getElementById('btnHNT');

btnPNT.addEventListener('click', (e) => {
    areaHNT.style.display = 'block';
    areaPNT.style.display = 'none';
});