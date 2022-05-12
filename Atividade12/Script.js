function janelaQuebra(){
    clearImg();

    let element = document.createElement('img');
    element.setAttribute("src","janelaquebra.png");
    element.setAttribute("id","janela");
    element.setAttribute("onmouseleave","janelaFechada()");

    element.setAttribute("width","500");
    element.setAttribute("height","600");

    document.getElementById("generate").appendChild(element);
}

function janelaFechada(){
    clearImg();

    let element = document.createElement('img');
    element.setAttribute("src","janelafechada.png");
    element.setAttribute("id","janela");
    element.setAttribute("onmouseover","janelaAberta()");
    
    element.setAttribute("width","500");
    element.setAttribute("height","600");

    document.getElementById("generate").appendChild(element);
}

function janelaAberta(){
    clearImg();

    let element = document.createElement('img');
    element.setAttribute("src","janelaaberta.png");
    element.setAttribute("id","janela");
    element.setAttribute("onmouseleave","janelaFechada()");
    element.setAttribute("onclick","janelaQuebra()");
    
    element.setAttribute("width","500");
    element.setAttribute("height","600");

    document.getElementById("generate").appendChild(element);
}

function clearImg(){
    try{
        let element = document.getElementById("janela");
        element.parentNode.removeChild(element);
    }catch{}
}