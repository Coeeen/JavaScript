const MainText = document.querySelector('.MainText')
const PanelAdctivity = document.querySelector('.AdctivityPanel')
const textInput = document.getElementsByClassName("AddActivity")[0];
const addButton = document.querySelector('.SumbitAdctivity');
const Activity = document.querySelector('.Adctivity')

let max = 0

addButton.addEventListener('click', function () {
  SaveActivity()
});


MainText.addEventListener("click", function () {
  var box = document.querySelector('.box');
  if (box.style.display === 'none') {
    box.style.opacity = 0;
    box.style.display = 'flex';
    setTimeout(function () {
      box.style.opacity = 1;
    }, 10);
  } else {
    box.style.opacity = 0;
    setTimeout(function () {
      box.style.display = 'none';
    }, 10);
  }
});

const SaveActivity = function () {
  const inputValue = textInput.value;
  if (inputValue === '') {
    console.log('Wprowadź wartość w pole tekstowe');
  } else {
    if (max <= 5) {
      max++
      console.log(max);
      const newActivityRow = `<div class="Adctivity__row">
      ${inputValue}
      <input type="checkbox" class="CheckBox">
    </div>`;
      Activity.insertAdjacentHTML('beforeend', newActivityRow);
      const checkboxes = document.querySelectorAll('.CheckBox');
      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
          if (this.checked) {
            const activityRow = this.parentNode;
            activityRow.remove();
            if (max > 0) {
              max--;
              console.log(max);
            }
          }
        });
      });
    }
  }
}