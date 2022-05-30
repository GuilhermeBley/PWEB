function resultForm(){
    var e = document.getElementById("selectArea");
    var number = e.options[e.selectedIndex].value;

    // 1
    if (number == 1){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_ads.asp')
    }
    // 2
    else if (number == 2){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_ea.asp')
    }
    // 3
    else if (number == 3){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_fm.asp')
    }
    // 4
    else if (number == 4){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_gq.asp')
    }
    // 5
    else if (number == 5){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_log.asp')
    }
    // 6
    else if (number == 6){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_ma.asp')
    }
    // 7
    else if (number == 7){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_pol.asp')
    }
    // 8
    else if (number == 8){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_pm.asp')
    }
    // 9
    else if (number == 9){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_proj.asp')
    }
    // 10
    else if (number == 10){
        openInNewTab('http://www.fatecsorocaba.edu.br/curso_sb.asp')
    }
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}