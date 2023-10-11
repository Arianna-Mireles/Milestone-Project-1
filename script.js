const balloon1 = document.getElementById('balloon1');
const balloon2 = document.getElementById('balloon2');
const balloon3 = document.getElementById('balloon3');
const balloon4 = document.getElementById('balloon4');
const balloon5 = document.getElementById('balloon5');
const balloon6 = document.getElementById('balloon6');
const startAnimationButton = document.getElementById('startAnimation');
const msg = document.getElementById('message')
let io = document.querySelectorAll('#function span');
let score = 0;


// make balloons 'float' to the top of the screen
startAnimationButton.addEventListener('click', () => {
    balloon1.style.animationPlayState = 'running';
    balloon2.style.animationPlayState = 'running';
    balloon3.style.animationPlayState = 'running';
    balloon4.style.animationPlayState = 'running';
    balloon5.style.animationPlayState = 'running';
    balloon6.style.animationPlayState = 'running';
});

// timer for the end of the game
startAnimationButton.addEventListener('click', () => {
    setTimeout(() => {
        msg.textContent = 'Game Over! Refresh the page to play again'
    }, 10000);
});

// this is to pop the balloons and score system
// this can be turned into a function eventually
document.getElementById('balloon1').onclick = function() {
    document.getElementById('balloon1').style.display = 'none';
    score = score += 1;
    io[0].textContent = score;
};

document.getElementById('balloon2').onclick = function() {
    document.getElementById('balloon2').style.display = 'none';
    score = score += 1;
    io[0].textContent = score;
};

document.getElementById('balloon3').onclick = function() {
    document.getElementById('balloon3').style.display = 'none';
    score = score += 1;
    io[0].textContent = score;
};

document.getElementById('balloon4').onclick = function() {
    document.getElementById('balloon4').style.display = 'none';
    score = score += 1;
    io[0].textContent = score;
};

document.getElementById('balloon5').onclick = function() {
    document.getElementById('balloon5').style.display = 'none';
    score = score += 1;
    io[0].textContent = score;
};

document.getElementById('balloon6').onclick = function() {
    document.getElementById('balloon6').style.display = 'none';
    score = score += 1;
    io[0].textContent = score;
};