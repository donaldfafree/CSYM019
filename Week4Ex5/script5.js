function myLoadfunction () {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'Change Heading';

    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'Change paragraph';    
}

document.addEventListener('click', myLoadfunction);