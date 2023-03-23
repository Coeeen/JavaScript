const Gender = document.querySelector(".genderApi");
const Species = document.querySelector(".speciesApi");
const Status = document.querySelector(".statusApi");
const locationApi = document.querySelector(".locationApi");
const Character = document.querySelector(".Character");
const image = document.querySelector(".CharacterImage");
const body = document.querySelector("body");
const left = document.querySelector(".left");
const inputButton = document.querySelector(".inputButton");
const hide = document.querySelector(".hide");
const nav = document.querySelector("nav");

const getCharacterData = function (character) {
  const inputValue = document.querySelector(".input_text").value;
  fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      Gender.textContent = data.results[0].gender;
      Species.textContent = data.results[0].species;
      Status.textContent = data.results[0].status;
      locationApi.textContent = data.results[0].location.name;
      Character.textContent = data.results[0].name;
      left.style.opacity = 1;
      image.src = data.image = data.results[0].image;
      image.style.opacity = 1;
    })
    .catch(function (error) {
      console.error("Character not found + ", error);
    });
};

inputButton.addEventListener("click", function () {
  getCharacterData();
});

body.addEventListener("click", () => {
  body.style.backgroundImage = "url('Pictures/Background_1.png')";
  hide.style.opacity = 1;
  nav.style.opacity = 1;
});
