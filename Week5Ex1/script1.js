function clickToPop () {
    alert('The button was pressed');
}

function myLoadFunction () {
    var element = document.getElementById('circle');
    element.addEventListener('click', clickToPop);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);