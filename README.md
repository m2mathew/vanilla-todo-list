# Vanilla Todo List

Assignment from The Iron Yard-Austin

Week 3 - day 12

## Description
Create a very simple todo list.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to manipulate the DOM using JavaScript
* Understand how to listen for and respond to events
* Understand how to iterate over an array and build a string


### Performance Objectives

After completing this assignment, you be able to effectively use

* element.innerHTML
* document.addEventListener
* element.value


## Details

### Deliverables

* A repo containing at least:
  * `scripts/main.js`
  * `index.html`

### Requirements

* No ESLint warnings or errors
* No W3C validation errors


## Normal Mode
1. Create a simple web page that has an input text box, a button, and an empty section below the textbox and button.
2. Use an event listener and event handler to console.log whatever is in the input box whenever the button is clicked.
3. Create an empty array. Whenever the button is clicked, whatever is in the input box should be added to the array.
4. Create a function called `render` that clears out all of the html inside of the section.
5. Inside your render function, after the contents of your section is cleared, iterate over your array and build up a HTML string that contains all of the todo items in your array. Then set that newly created string to the contents of your section.

## Hard Mode
Notice that when you refresh your todo list app all of your todo items disappear. Read up on [window.localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to save todo items as they are added and re-load them when the page loads.
