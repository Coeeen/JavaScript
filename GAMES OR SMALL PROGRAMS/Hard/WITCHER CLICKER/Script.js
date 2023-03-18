const Monster = document.querySelector('.image-button');
const Points = document.querySelector('.NumberOfPoints')
const TIP = document.querySelector('.TIP')
const CharacterShopMainOne = document.querySelector(".character-1")
const CharacterShopMainTwo = document.querySelector(".character-2")
const CharacterShopMainThree = document.querySelector(".character-3")
const CharacterShopMainFour = document.querySelector(".character-4")
const CharacterShopMainFive = document.querySelector(".character-5")
const CharacterShopMainSix = document.querySelector(".character-6")
const ButtonOneShop = document.querySelector('#ButtonOneShop')
const ButtonTwoShop = document.querySelector('#ButtonTwoShop')
const ButtonThreeShop = document.querySelector('#ButtonThreeShop')
const ButtonFourShop = document.querySelector('#ButtonFourShop')
const ButtonFiveShop = document.querySelector('#ButtonFiveShop')
const ButtonSixShop = document.querySelector('#ButtonSixShop')
const ButtonSevenShop = document.querySelector('#ButtonSevenShop')
const SwordsForSecond = document.querySelector('.SwordsForSecond')
const priceOfYen = document.querySelector('.priceb1')
const priceOfVernon = document.querySelector('.priceb2')
const priceOfLetho = document.querySelector('.priceb3')
const priceOfUhma = document.querySelector('.priceb4')
const priceOfInfantry = document.querySelector('.priceb5')
const priceofDijkstra = document.querySelector('.priceb6')
const multiplayerText = document.querySelector('.Multiplayer')
const NameOfMonsterText = document.querySelector('.name')
const ENDGAME = document.querySelector('.container')




let SumOfPoints = 0;
let multiplayer = 1;
let CostIncrease = 2;
let NumberOfPointsperSec = 0;
let NumberOfPointsperClick = 1
let YenCost = 10;
let VernonCost = 50;
let LethoCost = 200;
let UmaCost = 400;
let InfantryCost = 800;
let DijkstraCost = 2500;
let Tris = 5000;




Monster.addEventListener('click', function () {
    SumOfPoints += NumberOfPointsperClick * multiplayer;
    Points.textContent = SumOfPoints.toFixed(NumberOfPointsperSec >= 1 ? 1 : 0);
    TIP.classList.add('displayNo')
    Monster.classList.add('clicked');
    setTimeout(function () {
        Monster.classList.remove('clicked');
    }, 200);
})

ButtonOneShop.addEventListener('click', function () {
    if (SumOfPoints > YenCost) {
        NumberOfPointsperSec += 0.5;
        SumOfPoints -= YenCost;
        YenCost *= CostIncrease
        SwordsForSecond.textContent = NumberOfPointsperSec.toFixed(1)
        priceOfYen.textContent = YenCost;
    }

})
ButtonTwoShop.addEventListener('click', function () {
    if (SumOfPoints > VernonCost) {
        multiplayer += 0.5;
        SumOfPoints = SumOfPoints - VernonCost;
        multiplayerText.textContent = multiplayer;
        VernonCost *= CostIncrease;
        priceOfVernon.textContent = VernonCost;
    }
})
ButtonThreeShop.addEventListener('click', function () {
    if (SumOfPoints > LethoCost) {
        NumberOfPointsperSec += 1;
        SumOfPoints -= LethoCost;
        LethoCost *= CostIncrease
        SwordsForSecond.textContent = NumberOfPointsperSec;
        priceOfLetho.textContent = LethoCost
    }
})
ButtonFourShop.addEventListener('click', function () {
    if (SumOfPoints > UmaCost) {
        multiplayer += 1;
        SumOfPoints = SumOfPoints - UmaCost;
        multiplayerText.textContent = multiplayer;
        UmaCost *= CostIncrease;
        priceOfUhma.textContent = UmaCost;

    }
})

ButtonFiveShop.addEventListener('click', function () {
    if (SumOfPoints > InfantryCost) {
        SumOfPoints = SumOfPoints * 2;
        Points.textContent = SumOfPoints;
        InfantryCost *= CostIncrease;
        Points.textContent = SumOfPoints.toFixed(1);
        priceOfInfantry.textContent = InfantryCost;
    }
})
ButtonSixShop.addEventListener('click', function () {
    if (SumOfPoints > DijkstraCost) {
        NumberOfPointsperSec += 3;
        multiplayer += 2;
        SumOfPoints -= DijkstraCost;
        DijkstraCost *= CostIncrease
        SwordsForSecond.textContent = NumberOfPointsperSec.toFixed(1)
        multiplayerText.textContent = multiplayer.toFixed(1);
        priceofDijkstra.textContent = DijkstraCost
    }
})


ButtonSevenShop.addEventListener('click', function () {
    if (SumOfPoints > Tris) {
        NumberOfPointsperSec += 10;
        multiplayer += 20;
        SumOfPoints -= Tris;
        
    }
})



const AddPointsperSecond = function () {
    SumOfPoints += NumberOfPointsperSec;
    Points.textContent = SumOfPoints.toFixed(NumberOfPointsperSec >= 1 ? 1 : 0);
}



const check = function () {
    if (SumOfPoints >= 10) {
        ButtonOneShop.style.backgroundImage = 'url("Pictures/Yen.png")'
        CharacterShopMainOne.setAttribute("src", "Pictures/Blind/Noblind-1.png");
    }
    if (SumOfPoints >= 50) {
        ButtonTwoShop.style.backgroundImage = 'url("Pictures/Vernon.png")'
        CharacterShopMainTwo.setAttribute("src", "Pictures/Blind/Noblind-2.png");
    }
    if (SumOfPoints >= 200) {
        ButtonThreeShop.style.backgroundImage = 'url("Pictures/Letho.png")'
        Monster.style.backgroundImage = 'url("Pictures/Monster-2.png")'
        NameOfMonsterText.textContent = 'Eevee'
        CharacterShopMainThree.setAttribute("src", "Pictures/Blind/Noblind-3.png");
    }
    if (SumOfPoints >= 400) {
        ButtonFourShop.style.backgroundImage = 'url("Pictures/Umma.png")'
        Monster.style.backgroundImage = 'url("Pictures/Monster-3.png")'
        NameOfMonsterText.textContent = 'Squirtle'
        CharacterShopMainFour.setAttribute("src", "Pictures/Blind/Noblind-4.png");
    }
    if (SumOfPoints >= 800) {
        ButtonFiveShop.style.backgroundImage = 'url("Pictures/PoorFInfantry.png")'
        Monster.style.backgroundImage = 'url("Pictures/Monster-4.png")'
        NameOfMonsterText.textContent = 'Charmander'
        CharacterShopMainFive.setAttribute("src", "Pictures/Blind/Noblind-5.png");
    }
    if (SumOfPoints >= 2500) {
        ButtonSixShop.style.backgroundImage = 'url("Pictures/Dijkstra.png")'
        Monster.style.backgroundImage = 'url("Pictures/Monster-5.png")'
        NameOfMonsterText.textContent = 'vaporeon'
        CharacterShopMainSix.setAttribute("src", "Pictures/Blind/Noblind-6.png");

    }
    if (SumOfPoints >= 5000) {
        ButtonSevenShop.style.backgroundImage = 'url("Pictures/Tris.png")'
        Monster.style.backgroundImage = 'url("Pictures/Monster-6.png")'
        NameOfMonsterText.textContent = 'Metapod'
    }

}



setInterval(AddPointsperSecond, 1000)
setInterval(check, 1000);
localStorage();