function changeOpacity () {
    var element = document.getElementById('circle');
    element.style.opacity = 1;

}

function myLoadFunction () {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;


    var element = document.getElementById('circle');
    element.addEventListener('click', changeOpacity);
}



document.addEventListener('DOMContentLoaded', myLoadFunction);