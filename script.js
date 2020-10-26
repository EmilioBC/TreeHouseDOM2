const myHeading = document.getElementById('myHeading');
const buttonChangeColor = document.getElementById('buttonChangeColor');
const resetButton = document.getElementById('reset');
const inputChangeColor = document.getElementById('inputChangeColor');
const labelInput = document.getElementById('labelInput');
const myP = document.getElementsByTagName('p');
const p = document.querySelector('p.description');
const inputNew = document.getElementById('inputNew');
const buttonNew = document.querySelector('button#buttonNew');
const buttonRemove = document.getElementById('buttonRemove');
const listDiv = document.getElementById('list');


listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
}
});

listDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
}
});

///////////////// USEFUL FOR CHECKING TARGET EVENTS //////////////////
// document.addEventListener('click', (event) => {
//     console.log(event.target);
// });

buttonChangeColor.addEventListener('click', () => {
    myHeading.style.color = inputChangeColor.value;
    myHeading.textContent = inputChangeColor.value;
    inputChangeColor.value = 'Type a color...';
});

resetButton.addEventListener('click', () => {
    myHeading.style.color = 'black';
    myHeading.textContent = 'Javascript and the DOM';
});

labelInput.addEventListener('keypress', (e) => {
    if(e.code ==  'Enter') {
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

// buttonNew.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.createElement('li');
//     li.textContent = inputNew.value;
//     ul.appendChild(li);
//     inputNew.value = 'Type New Item';
// });

// buttonRemove.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild(li);
// });

buttonNew.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = inputNew.value;
    ul.appendChild(li);
    inputNew.value = 'Type New Item...'
})

buttonRemove.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child')
    ul.removeChild(li);
})






////////////////////////////////////////////////////////////////////////////////////// TEMP JS FUNCTION IN FUNCTION ///////////////////////////////////////////////////////////////////////////////////////

// function exec(func,arg) {
//     func(arg);
// }

// exec((something) => {
//     console.log(something);
// }, 'Greetings, everyone!');


window.setTimeout((something) => {
    console.log(something);
}, 3000, 'Greetings, everyone!');


function add(num1, num2) {
    console.log(num1+num2);
}

window.setTimeout(add,5000,2,2);