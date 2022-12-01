'use strict';

console.log('js file linked!');
let nameHeaderEl = document.getElementById('nameHeader');
/**
 * link this file to the HTML file and add your event listeners!
 */

// this is an observable object
let submitBtn = document.getElementById('submit-btn');
console.log(submitBtn);

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('submitted');
});

// find the text input, and do something on 'input'
let nameInput = document.getElementById('name');

nameInput.addEventListener('input', (event) => {

  // what is on the event object?]
  console.log(event.target.value);
  nameHeaderEl.textContent = event.target.value;
  console.log('typing!!');
})
