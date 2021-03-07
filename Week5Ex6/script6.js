function changeOpacity () {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.01;

}

setInterval (changeOpacity, 1000);

function myLoadFunction () {
    var element = document.getElementById('circle');
    element.addEventListener('click', changeOpacity);
    element.style.opacity = 1;  
}



document.addEventListener('DOMContentLoaded', myLoadFunction);