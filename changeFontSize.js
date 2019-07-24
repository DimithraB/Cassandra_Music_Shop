function changeFontSize(id, increaseFactor){
    var txt = document.getElementById(id);
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var currentSize = parseInt(style);
    txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

function setDefault(id) {
    var txt = document.getElementById(id);
    txt.style.fontSize = defaultStatus;
}

