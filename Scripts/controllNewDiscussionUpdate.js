function showNewStep(idHidden, idShow, displayHidden, displayShow) {
    document.getElementById(idHidden).style.display = displayHidden;
    document.getElementById(idShow).style.display = displayShow;
}

let areaCards2 = document.getElementById('areaCards2');
let areaComments = document.getElementById('areaComments');
let comments2 = false;

let areaCards1 = document.getElementById('areaCards1');
let areaComments1 = document.getElementById('areaComments1');
let comments1 = false;

areaCards1.addEventListener('click', (e) => {
    if (!comments1) { //Se os comentários estiverem escondidos 
        areaComments1.style.display = 'flex';
        comments1 = true;
    } else if (comments1) {
        areaComments1.style.display = 'none';
        comments1 = false;
    }
});

areaCards2.addEventListener('click', (e) => {
    if (!comments2) { //Se os comentários estiverem escondidos 
        areaComments.style.display = 'flex';
        comments2 = true;
    } else if (comments2) {
        areaComments.style.display = 'none';
        comments2 = false;
    }
});