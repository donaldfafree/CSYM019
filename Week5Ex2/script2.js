function changeColour () {
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
}

function myLoadFunction () {
    var element = document.getElementById('circle');
    element.addEventListener('click', changeColour);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);