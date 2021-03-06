(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// target elements
var doLabel = document.getElementById("doLabel");
var addButton = document.getElementById("addButton");
var mainList = document.getElementById("mainList");
var resetButton = document.getElementById("resetButton");

var doArray = [];
var newListItem = "";

// create functions
function clearText() {
    document.getElementById("doLabel").value = "";
}

function render() {
    mainList.innerHTML = "";
    newListItem = "";

    for (var i = 0; i < doArray.length; i++) {
        newListItem += doArray[i] + "<br>";
        mainList.innerHTML = newListItem;
    }
}

// add event listeners
// clear text in input text area
doLabel.addEventListener("click", clearText);

// add list item to array when button is clicked and add it to the printed list
addButton.addEventListener("click", function () {
    doArray.push(doLabel.value);
    render();
});

// reset ALL list data and start over
resetButton.addEventListener("click", function () {
    doArray = [];
    newListItem = "";
    mainList.innerHTML = "";
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map