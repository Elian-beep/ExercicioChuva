let areaPNT = document.getElementById('areaPNT');
let btnPNT = document.getElementById('btnPNT');


let areaHNT = document.getElementById('areaHNT');
let btnHNT = document.getElementById('btnHNT');

let btnPsNT = document.getElementById('btnPsNT');
let areaPsNT = document.getElementById('areaPsNT');

let areaCards2 = document.getElementById('areaCards2');
let areaComments = document.getElementById('areaComments');
let comments = false;

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

areaCards2.addEventListener('click', (e) => {
    if(!comments){ //Se os comentários estiverem escondidos 
        areaComments.style.display = 'flex';
        comments = true;
    }else if(comments){
        areaComments.style.display = 'none';
        comments = false;
    }
});