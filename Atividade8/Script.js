
function CarregarInputs(quantidade){

    clearGenerate();

    quantidade = parseInt(quantidade);

    if (isNaN(quantidade) || quantidade == null){
        
        let main = document.getElementById("main");
        let newE = document.createElement("p");
        newE.setAttribute("name","generate");
        newE.setAttribute("class","erro");
        newE.setAttribute("id","inputErro");
        newE.innerHTML = erro;
        main.appendChild(newE);

        console.log("ErroInput");

        return;
    }

    let main = document.getElementById("main");

    if (quantidade === 0){
        return;
    }

    // Adicionando inputs
    for (i = 0; i < quantidade; i++){

        let newP = document.createElement("p");
        newP.setAttribute("class", "pDados");
        newP.setAttribute("name","generate");

        let newPTitulo = document.createElement("p");
        newP.innerHTML = "Pessoa " + (i+1);
        newP.appendChild(newPTitulo);
        

        generateLabelInput(newP);

        main.appendChild(newP);
    }

    let buttonCalcular = document.createElement("button");
    buttonCalcular.setAttribute("name","generate");
    buttonCalcular.setAttribute("class","buttonCarregarInputs");
    buttonCalcular.setAttribute("onclick","realizarCalcNotas()");
    buttonCalcular.innerHTML = "Calcular notas";

    main.appendChild(buttonCalcular);
}

function realizarCalcNotas(){
    
    let elementsInputs = document.getElementsByClassName("pDados");
    let arrayInputs = new Array();

    for(i = 0; i < elementsInputs.length; i ++){

        let regex = /[1-4]/;
        if( !regex.test(elementsInputs[i].value) ) {
            alert("Nota " + (i+1) + " não atribuída.");    
            return;
        }   

        arrayInputs.push(parseInt(elementsInputs[i].value));
    }

    clearGenerate();

    // Demonstrando dados em tabela

    for(i = 0; i < elementsInputs.length; i++){

    }
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

function onlyMorH(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /[M|m|H|h]/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function onlyNumberUmQuatro(evt){
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /[1-4]/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function clearGenerate(){
    
    let elements = document.getElementsByName("generate");
    
    while(document.getElementsByName("generate").length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function generateLabelInput(parentNode){

    let newP = document.createElement("p");

    // Idade
    let labelIdade = document.createElement("label");
    labelIdade.setAttribute("class","labelDados");
    labelIdade.innerHTML = "Digite a idade: ";

    let inputIdade = document.createElement("input");
    inputIdade.setAttribute("class","inputDados");
    inputIdade.setAttribute("onkeypress","onlyNumber()");
    inputIdade.setAttribute("maxlength","2");

    parentNode.appendChild(newP);
    parentNode.appendChild(labelIdade);
    parentNode.appendChild(inputIdade);

    // Sexo

    newP = document.createElement("p");

    let labelSexo = document.createElement("label");
    labelSexo.setAttribute("class","labelDados");
    labelSexo.innerHTML = "Digite o sexo (M-H): ";

    let inputSexo = document.createElement("input");
    inputSexo.setAttribute("class","inputDados");
    inputSexo.setAttribute("onkeypress","onlyMorH()");
    inputSexo.setAttribute("maxlength","1");

    parentNode.appendChild(newP);
    parentNode.appendChild(labelSexo);
    parentNode.appendChild(inputSexo);

    // Nota

    newP = document.createElement("p");

    let labelNota = document.createElement("label");
    labelNota.setAttribute("class","labelDados");
    labelNota.innerHTML = "Digite a nota: ";

    let inputNota = document.createElement("input");
    inputNota.setAttribute("class","inputDados");
    inputNota.setAttribute("onkeypress","onlyNumberUmQuatro()");
    inputNota.setAttribute("maxlength","1");

    parentNode.appendChild(newP);
    parentNode.appendChild(labelNota);
    parentNode.appendChild(inputNota);
}