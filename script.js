const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const resetButton = document.getElementById('reset');
const myTextInput = document.getElementById('myTextInput');
const labelInput = document.getElementById('labelInput');
const myP = document.getElementsByTagName('p');


myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
    myHeading.textContent = myTextInput.value;
});

resetButton.addEventListener('click', () => {
    myHeading.style.color = 'black';
    myHeading.textContent = 'Javascript and the DOM';
});

labelInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        myP.textContent = labelInput.value;
    }
});