"use strict";

// STEP ONE: target elements

var doLabel = document.getElementById("doLabel");
var addButton = document.getElementById("addButton");
var mainList = document.getElementById("mainList");
var resetButton = document.getElementById("resetButton");

var doArray = [];
var newListItem = "";



// STEP TWO: create function

function render() {
    mainList.innerHTML = "";
    newListItem = "";

    for (var i = 0; i < doArray.length; i++) {
        newListItem = newListItem + doArray[i];
        mainList.innerHTML = newListItem;
    }
}


// STEP THREE: Add event listener

// clear text in input text area
doLabel.addEventListener("click", clearText);

// add list item to array when button is clicked and add it to the printed list
addButton.addEventListener("click", function() {
    doArray.push(doLabel.value);
    render();
});



// reset ALL list data and start over
resetButton.addEventListener("click", function() {
    var doArray = [];
    var newListItem = "";
    mainList.innerHTML = "";
});


function clearText(){
  document.getElementById("doLabel").value = "";
}

