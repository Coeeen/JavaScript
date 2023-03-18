const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');
const btnFour = document.querySelector('.four');
const btnFive = document.querySelector('.five');
const btnSix = document.querySelector('.six');
const btnNewGame = document.querySelector('.NG');
const h1 = document.querySelector('h1');

let game = true;
let btnAll = [btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix];
let color;
let randomButtonAnswer = Math.floor(Math.random() * 7);


function randomizeColors() {
    for (let i = 0; i < btnAll.length; i++) {
        let Rcolor = Math.floor(Math.random() * 256);
        let Gcolor = Math.floor(Math.random() * 256);
        let Bcolor = Math.floor(Math.random() * 256);
        color = "rgb(" + Rcolor + "," + Gcolor + "," + Bcolor + ")";
        btnAll[i].style.backgroundColor = color;
    }
    let randomcolorBlock = Math.floor(Math.random() * 6);
    let takeRGB = btnAll[randomcolorBlock]
    let colorAnswer = takeRGB.style.backgroundColor;
    h1.textContent = colorAnswer;
}


function disableButtons() {
    for (let i = 0; i < btnAll.length; i++) {
        btnAll[i].disabled = true;
    }
}

function enableButtons() {
    for (let i = 0; i < btnAll.length; i++) {
        btnAll[i].disabled = false;
    }
}

btnNewGame.addEventListener('click', function () {
    randomizeColors();
    for (let i = 0; i < btnAll.length; i++) {
        btnAll[i].classList.remove('hidden')
        btnAll[i].classList.remove('won')
        enableButtons();
    }
});

for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener('click', function () {
        if (btnAll[i].style.backgroundColor != h1.textContent) {
            btnAll[i].classList.add('hidden');
        }
        if (btnAll[i].style.backgroundColor == h1.textContent) {
            h1.textContent = '👑 YOU WON 👑!'
            btnAll[i].classList.toggle('won')
            disableButtons();
        }

    });
}

randomizeColors();