function ViewMin(){
    var text = document.getElementById('txt').value.toLowerCase();

    ToGenerate(text);
}

function ViewMai(){
    var text = document.getElementById('txt').value.toUpperCase();

    ToGenerate(text);
}

function ToGenerate(text){
    let parent = document.getElementById('generate');
    let elements = parent.childNodes;

    for (i = 0; i < elements.length; i++){
        elements[i].parentNode.removeChild(elements[i]);
    }

    let newE = document.createElement('p');

    newE.innerHTML = text;

    parent.appendChild(newE);
}
