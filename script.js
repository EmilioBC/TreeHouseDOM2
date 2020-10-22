const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const resetButton = document.getElementById('reset');
const myTextInput = document.getElementById('myTextInput');


myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
    myHeading.textContent = myTextInput.value;
});

resetButton.addEventListener('click', () => {
    myHeading.style.color = 'black';
    myHeading.textContent = 'Javascript and the DOM';
});