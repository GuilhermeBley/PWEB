function validateForm(){

    let valid;

    let nome = document.forms["principal"]["nome"].value;

    if (nome.length < 10){
        alert("Nome inválido.");
        return false;
    }

    let email = document.forms["principal"]["email"].value;

    if (!validacaoEmail(email)){
        alert("Email inválido.");
        return false;
    }

    let comentario = document.forms["principal"]["comentario"].value;

    if (comentario.length < 20){
        alert("Comentário inválido.");
        return false;
    }



    // Verificar check box

}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    
        return true;
    }
    else{
        return false;
    }
}