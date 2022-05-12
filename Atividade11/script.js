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

function Ret(x,y) { // classe
    this.altura = x;
    this.largura = y; // ATT

    this.CalcArea = function(){ // METODO
        return this.altura*this.largura;
    }
}

function ViewRet(){

    var ret = new Ret(
        document.getElementById('numero1').value,
        document.getElementById('numero2').value
    );

    area = ret.CalcArea();
    
    try{
        document.getElementById("generate").removeChild(document.getElementsByClassName("tres")[0]);
    }catch{}
    
    let element = document.createElement("div");
    element.setAttribute("class","tres");
    element.innerHTML = "Area = " + area;
    document.getElementById("generate").appendChild(element);
    
}

function Conta(){
    this.nome;
    this.banco;
    this.numero;
    this.saldo;

    // nome
    this.getNome = function () {
        return nome;
    };
    this.setNome = function (value) {
        this.nome = value;
    };
    
    // banco
    this.getBanco = function () {
        return banco;
    };
    this.setBanco = function (value) {
        this.banco = value;
    };
    
    // numero
    this.getNumero = function () {
        return numero;
    };
    this.setNumero = function (value) {
        this.numero = value;
    };
    
    // saldo
    this.getSaldo = function () {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };
    
}

function Corrente(){
    this.saldoEspecial;

    // poupanca
    this.getSaldoEspecial = function () {
        return saldoEspecial;
    };
    this.setSaldoEspecial = function (value) {
        this.saldoEspecial = value;
    };
}

function Poupanca(){
    this.juros; 
    this.dataVencimento;

    // juros
    this.getJuros = function () {
        return juros;
    };
    this.setJuros = function (value) {
        this.juros = value;
    };

    // dataVencimento
    this.getDataVencimento = function () {
        return dataVencimento;
    };
    this.setDataVencimento = function (value) {
        this.dataVencimento = value;
    };
}