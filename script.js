const balloon1 = document.getElementById('balloon1');
const balloon2 = document.getElementById('balloon2');
const balloon3 = document.getElementById('balloon3');
const balloon4 = document.getElementById('balloon4');
const balloon5 = document.getElementById('balloon5');
const balloon6 = document.getElementById('balloon6');
const startAnimationButton = document.getElementById('startAnimation');


startAnimationButton.addEventListener('click', () => {
    balloon1.style.animationPlayState = 'running';
    balloon2.style.animationPlayState = 'running';
    balloon3.style.animationPlayState = 'running';
    balloon4.style.animationPlayState = 'running';
    balloon5.style.animationPlayState = 'running';
    balloon6.style.animationPlayState = 'running';
});

// startAnimationButton.addEventListener('click', () => {
// });

// startAnimationButton.addEventListener('click', () => {
// });

// startAnimationButton.addEventListener('click', () => {
// });

document.getElementById('balloon1').onclick = function() {
    document.getElementById('balloon1').style.display = 'none';
}
