function AlterColor(){
    document.getElementById("pagina").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("pagina2").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}