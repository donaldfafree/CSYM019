function changeHeading() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'Change heading';
   }

function changeParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'Change paragraph';
   }

function changeColour () {
    var element = document.getElementById('paragraph');
    element.style.color = 'Blue';
}

function changeColourBack () {
    var element = document.getElementById('paragraph');
    element.style.color = 'Black';
}

function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', changeHeading);
   
    var element = document.getElementById('paragraph');
    element.addEventListener('click', changeParagraph);

    var element = document.getElementById('paragraph');
    element.addEventListener('mouseenter', changeColour);

    var element = document.getElementById('paragraph');
    element.addEventListener('mouseleave', changeColourBack);
   }
document.addEventListener('DOMContentLoaded', myLoadFunction);
   