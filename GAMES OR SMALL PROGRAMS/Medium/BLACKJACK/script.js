const ScorePlayer0 = document.querySelector('#score--0');
const ScorePlayer1 = document.querySelector('#score--1');
const BotScore = document.querySelector('#current--1');
const PlayerScore = document.querySelector('#current--0');
const DrawACardButton = document.querySelector('.btn--roll')
const NextRoundButton = document.querySelector('.btn--next')
const HoldACardButton = document.querySelector('.btn--hold')
const Card = document.querySelector('.cards')
const LeftToHit = document.querySelector('#text--0')
const RoundText = document.querySelector('.round')
const DivHearts = document.querySelector('.HP')
const NewGame = document.querySelector('.btn--newGame')

NextRoundButton.classList.add('opacity')

let botPoints = Math.floor(Math.random() * (13 - 11 + 1)) + 11
let current = 0;
let Max_Point = 21;
let HP = 3;
let round = 0;
let BonusHealth = 0

function disableBtn(button) {
    button.disabled = true;
}

function removeHeart() {
    DivHearts.lastElementChild.remove();
}

function enableBtn(button) {
    button.disabled = false;
}

const EndTheGame = function () {
    if (HP == 0) {
        document.querySelector("main").classList.add('opacity')
        document.querySelector("h1").classList.add('opacity')
        setTimeout(function () {
            NewGame.style.opacity = 100;
        }, 1000);
    }
}
const BonusHearts = function () {
    if (round % 5 == 0) {
        BonusHealth++
        HP++;
        DivHearts.insertAdjacentHTML("afterbegin", `<img src="Pictures/Hearts.png"></img>`)
    }
    console.log(BonusHealth);
}


DrawACardButton.addEventListener('click', function () {
    let Randomcard = Math.floor(Math.random() * 10) + 1;
    Card.src = `Pictures/Card-${Randomcard}.png`
    current += Randomcard;
    PlayerScore.textContent = current
    ScorePlayer0.textContent = Max_Point - current;
    if (current > 21) {
        HP--
        disableBtn(DrawACardButton);
        removeHeart()
        LeftToHit.textContent = "Above 21!";
        BotScore.textContent = botPoints;
        EndTheGame()
        NextRoundButton.classList.remove('opacity')
    }
})


HoldACardButton.addEventListener('click', function () {
    BotScore.textContent = botPoints;
    disableBtn(DrawACardButton);
    disableBtn(HoldACardButton);
    if (current < botPoints) {
        HP--
        removeHeart()
    }
    EndTheGame()
    NextRoundButton.classList.remove('opacity')
})

const DifficultyLevel = function () {
    if (round <= 5) {
        botPoints = Math.floor(Math.random() * (13 - 11 + 1)) + 11;
    } else if (round <= 10) {
        botPoints = Math.floor(Math.random() * (16 - 11 + 1)) + 11;
    } else if (round < 15) {
        botPoints = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
    } else if (round < 20) {
        botPoints = Math.floor(Math.random() * (21 - 15 + 1)) + 15;
    } else {
        botPoints = Math.floor(Math.random() * (21 - 17 + 1)) + 17;
    }
}
NextRoundButton.addEventListener('click', function () {
    disableBtn(NextRoundButton);
    round++;
    RoundText.textContent = round;
    enableBtn(DrawACardButton)
    enableBtn(HoldACardButton)
    current = 0;
    ScorePlayer0.textContent = 0;
    PlayerScore.textContent = 0
    LeftToHit.textContent = "LEFT TO HIT";
    BotScore.textContent = `?`;
    NextRoundButton.classList.add('opacity')

    BonusHearts()
    DifficultyLevel()
    //Prevent spaming next round for free points
    setTimeout(function () {
        enableBtn(NextRoundButton);
    }, 1500);
})

NewGame.addEventListener('click', function () {
    enableBtn(DrawACardButton);
    enableBtn(HoldACardButton);
    current = 0
    HP = 3;
    round = 0;
    BonusHealth = 0
    RoundText.textContent = round;
    BotScore.textContent = `?`;
    document.querySelector("main").classList.remove('opacity')
    document.querySelector("h1").classList.remove('opacity')
    NewGame.style.opacity = 0;
    ScorePlayer0.textContent = 0;
    PlayerScore.textContent = 0
    DifficultyLevel();
    for (let i = 0; i < 3; i++) {
        DivHearts.insertAdjacentHTML("afterbegin", `<img src="Pictures/Hearts.png"></img>`)
    }
})