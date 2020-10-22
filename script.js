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
    if(e.code == 'Enter') {
        myP.textContent = labelInput.value;
    }
});


const myList = document.getElementsByTagName('li');
for(let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');
for(let i = 0; i < errorNotPurple.length; i++) {
    errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i <evens.length; i++) {
    evens[i].style.color = 'lightgray';
}