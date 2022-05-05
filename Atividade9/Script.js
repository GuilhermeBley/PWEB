
// Calculo média
function CalcularMaior(){

    try{
        let elementRemove = document.getElementById("resultMaior");
        elementRemove.parentNode.removeChild(elementRemove);
    }catch{}
    
    var numeros = [
        Number.parseInt(document.getElementById("numero1").value),
        Number.parseInt(document.getElementById("numero2").value),
        Number.parseInt(document.getElementById("numero3").value)
    ]

    if (numeros.length === 0){
        alert("Adicione os números.");
        return;
    }

    for (let i = 0; i < numeros.length; i++){
        if (isNaN(numeros[i])){
            alert((i+1) +" - Número é inválido.");
            return;
        }
    }

    let maiorNumero = 0;

    maiorNumero = numeros.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity);

    var element = document.createElement("span");
    element.setAttribute("id","resultMaior");
    element.innerHTML = "Maior número -> " + maiorNumero;
    document.getElementById("main").appendChild(element);
}

function OrdenarCrescente(){

    try{
        let elementRemove = document.getElementById("resultOrder");
        elementRemove.parentNode.removeChild(elementRemove);
    }catch{}
    
    var numeros = [
        Number.parseInt(document.getElementById("numeroOrder1").value),
        Number.parseInt(document.getElementById("numeroOrder2").value),
        Number.parseInt(document.getElementById("numeroOrder3").value)
    ]

    if (numeros.length === 0){
        alert("Adicione os números.");
        return;
    }

    for (let i = 0; i < numeros.length; i++){
        if (isNaN(numeros[i])){
            alert((i+1) +" - Número é inválido.");
            return;
        }
    }

    let order = numeros.sort(function(a,b) { return a - b } );

    var element = document.createElement("span");
    element.setAttribute("id","resultOrder");
    element.innerHTML = "Maior número -> " + order;
    document.getElementById("main").appendChild(element);
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}


