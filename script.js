const balloon1 = document.getElementById('balloon1');
const balloon2 = document.getElementById('balloon2');
const balloon3 = document.getElementById('balloon3');
const balloon4 = document.getElementById('balloon4');
const balloon5 = document.getElementById('balloon5');
const balloon6 = document.getElementById('balloon6');
const startAnimationButton = document.getElementById('startAnimation');
let score = 0;

startAnimationButton.addEventListener('click', () => {
    balloon1.style.animationPlayState = 'running';
    balloon2.style.animationPlayState = 'running';
    balloon3.style.animationPlayState = 'running';
    balloon4.style.animationPlayState = 'running';
    balloon5.style.animationPlayState = 'running';
    balloon6.style.animationPlayState = 'running';
});

// this is to pop the balloons and score system
document.getElementById('balloon1').onclick = function() {
    document.getElementById('balloon1').style.display = 'none';
}

document.getElementById('balloon2').onclick = function() {
    document.getElementById('balloon2').style.display = 'none';
}

document.getElementById('balloon3').onclick = function() {
    document.getElementById('balloon3').style.display = 'none';
}

document.getElementById('balloon4').onclick = function() {
    document.getElementById('balloon4').style.display = 'none';
}

document.getElementById('balloon5').onclick = function() {
    document.getElementById('balloon5').style.display = 'none';
}

document.getElementById('balloon6').onclick = function() {
    document.getElementById('balloon6').style.display = 'none';
}