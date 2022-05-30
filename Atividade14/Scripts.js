function validateForm(){

    let valid = true;

    let nome = document.forms["principal"]["nome"];
    let email = document.forms["principal"]["email"];
    let comentario = document.forms["principal"]["comentario"];

    if (nome.value.length < 10){
        nome.classList.add('is-invalid');
        valid = false;
    }else{
        nome.classList.remove('is-invalid');
        nome.classList.add('was-validated');
    }
    
    if (!validacaoEmail(email.value)){
        email.classList.add('is-invalid');
        valid = false;
    }else{
        email.classList.remove('is-invalid');
        email.classList.add('was-validated');
    }

    if (comentario.value.length < 20){
        comentario.classList.add('is-invalid');
        valid = false;
    }else{
        comentario.classList.remove('is-invalid');
        comentario.classList.add('was-validated');
    }


    if (valid === false)
        return false;

    // Verificar check box
    alert("Envio completo!")

    return true;
}

function validacaoEmail(field) {
    
    let usuario, dominio;
    
    try{
        usuario = field.substring(0, field.indexOf("@"));
        dominio = field.substring(field.indexOf("@")+ 1, field.length);
    }catch{
        return false;
    }
    
    
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