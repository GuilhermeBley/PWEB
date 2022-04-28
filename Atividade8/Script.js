function CarregarInputs(quantidade){

    clearGenerate();

    quantidade = parseInt(quantidade);

    if (isNaN(quantidade) || quantidade == null){
        
        let main = document.getElementById("main");
        let newE = document.createElement("p");
        newE.setAttribute("name","generate");
        newE.setAttribute("class","erro");
        newE.setAttribute("id","inputErro");
        newE.innerHTML = "erro";
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
        newP.setAttribute("id","dado"+(i+1));
        newP.innerHTML = "Pessoa " + (i+1);
        newP.appendChild(newPTitulo);
        
        generateLabelInput(newP, i);

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
    
    let pessoas = elementsInputs.length;
    let maisVelho = 0; // Exibir mais velho
    let maisNovo = 0; // Exibir mais novo
    let somaIdade = 0;  // Exibir média de idades
    let qtddPessimo = 0; // Exibir quantidade de pessoas que respondeu péssimo
    let totalOtimoeBom = 0; // Total de ótimos e bom em porcentagem
    let totalHomens = 0; // Total homens
    let totalMulheres = 0; // Total mulheres

    for(i = 0; i < elementsInputs.length; i ++){
        
        let valueSexo;
        let valueNota;
        let idade;
        try{
            valueSexo = elementsInputs[i].querySelector('input[name="sexo'+(i+1)+'"]:checked').value;
            valueNota = elementsInputs[i].querySelector('input[name="nota'+(i+1)+'"]:checked').value;
            idade = document.getElementById("idade"+(i+1)).value;
        }catch{
            
        }
        
        // H e M
        if(valueSexo == 'Homem')
            totalHomens++;
        else if (valueSexo == 'Mulher')
            totalMulheres++;            
        else{
            alert("Valor de sexo não adicionado para Pessoa " + (i+1));
            return;
        }

        // NOTAS
        if (isNaN(valueNota) || valueNota == null || typeof valueNota === "undefined"){
            alert("Valor de nota não adicionado para Pessoa " + (i+1));
            return;
        }

        // Total Otimo e bom
        if (valueNota == '4' || valueNota == '3')
            totalOtimoeBom++;

        // Total péssimo
        else if (valueNota == '1')
            qtddPessimo++;


        // IDADE
        if (isNaN(idade) || idade == null || typeof idade === "undefined"){
            alert("Valor de idade não adicionado para Pessoa " + (i+1));
            return;
        }

        idade = parseInt(idade);

        if (!Number.isInteger(idade)){
            alert("Idade inválida da Pessoa " + (i+1));
            return;
        }

        if (idade < 1){
            alert("Idade inválida (deve ser maior que zero) da Pessoa " + (i+1));
            return;
        }

        // Somando idade
        somaIdade += idade;

        // Verificando mais novo
        if (idade < maisNovo || maisNovo == 0)
            maisNovo = idade;

        if (idade > maisVelho || maisVelho == 0)
            maisVelho = idade;
    }

    clearGenerate();

    let main = document.getElementById("main");

    // Lista de dados
    let div = document.createElement("div");
    div.setAttribute("class","dadosResponse");
    div.setAttribute("name","generate");

    listItemsAdd(div,"Mais velho: ", maisVelho + (maisVelho<2?" ano.":" anos."));
    listItemsAdd(div, "Mais novo: ", maisNovo + (maisNovo<2?" ano.":" anos."));
    listItemsAdd(div, "Média das idades: ", (somaIdade/pessoas));
    listItemsAdd(div, "Total notas péssimas: ", qtddPessimo);
    listItemsAdd(div, "Total ótimo e bom: ", totalOtimoeBom);
    listItemsAdd(div, "Total homens: ", totalHomens);
    listItemsAdd(div, "Total mulheres: ", totalMulheres);

    div.appendChild(document.createElement("p"));

    let btnLimpar = document.createElement("button");
    btnLimpar.setAttribute("onclick","clearGenerate()");
    btnLimpar.innerHTML = "Limpar";

    div.appendChild(btnLimpar);

    main.appendChild(div);
}

function generateLabelInput(parentNode, index){

    let newP = document.createElement("p");

    // Idade
    let labelIdade = document.createElement("label");
    labelIdade.setAttribute("class","labelDados");
    labelIdade.innerHTML = "Digite a idade: ";

    let inputIdade = document.createElement("input");
    inputIdade.setAttribute("id","idade"+(index+1));
    inputIdade.setAttribute("class","inputDados");
    inputIdade.setAttribute("onkeypress","return onlynumber()");
    inputIdade.setAttribute("maxlength","2");

    parentNode.appendChild(newP);
    parentNode.appendChild(labelIdade);
    parentNode.appendChild(inputIdade);

    // Sexo

    newP = document.createElement("p");

    let labelSexo = document.createElement("label");
    labelSexo.setAttribute("class","labelDados");
    labelSexo.innerHTML = "Insira o sexo: ";
    
    let inputSexo = document.createElement("div");
    
    let radioButtonSexoH = document.createElement("input");
    radioButtonSexoH.setAttribute("type","radio");
    radioButtonSexoH.setAttribute("value","Homem");
    radioButtonSexoH.setAttribute("name", "sexo"+(index+1));    
    
    let radioButtonSexoM = document.createElement("input");
    radioButtonSexoM.setAttribute("type","radio");
    radioButtonSexoM.setAttribute("value","Mulher");
    radioButtonSexoM.setAttribute("name", "sexo"+(index+1));

    inputSexo.setAttribute("class","inputDados");
    
    inputSexo.appendChild(radioButtonSexoH);
    let labelSHomem = document.createElement("label");
    labelSHomem.innerHTML = "Homem";
    inputSexo.appendChild(labelSHomem);
    inputSexo.appendChild(radioButtonSexoM);
    let labelSMulher = document.createElement("label");
    labelSMulher.innerHTML = "Mulher";
    inputSexo.appendChild(labelSMulher);

    parentNode.appendChild(newP);
    parentNode.appendChild(labelSexo);
    parentNode.appendChild(inputSexo);

    // Nota

    newP = document.createElement("p");

    let labelNota = document.createElement("label");
    labelNota.setAttribute("class","labelDados");
    labelNota.innerHTML = "Digite a nota: ";

    let inputNota = document.createElement("div");
    inputNota.setAttribute("class","inputDados");


    let radioBtnPessimo = document.createElement("input");
    radioBtnPessimo.setAttribute("type","radio");
    radioBtnPessimo.setAttribute("value","1");
    radioBtnPessimo.setAttribute("name", "nota"+(index+1));
    
    
    let radioBtnRegular = document.createElement("input");
    radioBtnRegular.setAttribute("type","radio");
    radioBtnRegular.setAttribute("value","2");
    radioBtnRegular.setAttribute("name", "nota"+(index+1));

    let radioBtnBom = document.createElement("input");
    radioBtnBom.setAttribute("type","radio");
    radioBtnBom.setAttribute("value","3");
    radioBtnBom.setAttribute("name", "nota"+(index+1));
    
    
    let radioBtnOtimo = document.createElement("input");
    radioBtnOtimo.setAttribute("type","radio");
    radioBtnOtimo.setAttribute("value","4");
    radioBtnOtimo.setAttribute("name", "nota"+(index+1));
    
    inputNota.appendChild(radioBtnPessimo);
    let labelSPessimo = document.createElement("label");
    labelSPessimo.innerHTML = "Pessimo";
    inputNota.appendChild(labelSPessimo);

    inputNota.appendChild(radioBtnRegular);
    let labelSRegular = document.createElement("label");
    labelSRegular.innerHTML = "Regular";
    inputNota.appendChild(labelSRegular);

    inputNota.appendChild(radioBtnBom);
    let labelSBom = document.createElement("label");
    labelSBom.innerHTML = "Bom";
    inputNota.appendChild(labelSBom);

    inputNota.appendChild(radioBtnOtimo);
    let labelSOtimo = document.createElement("label");
    labelSOtimo.innerHTML = "Otimo";
    inputNota.appendChild(labelSOtimo);

    parentNode.appendChild(newP);
    parentNode.appendChild(labelNota);
    parentNode.appendChild(inputNota);
}

function clearGenerate(){
    
    let elements = document.getElementsByName("generate");
    
    while(document.getElementsByName("generate").length > 0){
        elements[0].parentNode.removeChild(elements[0]);
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

function listItemsAdd(parent, title, data){
    let p = document.createElement("p");
    p.innerHTML = title;

    let b = document.createElement("b");
    b.innerHTML = data;

    parent.appendChild(p);
    parent.appendChild(b);
}
