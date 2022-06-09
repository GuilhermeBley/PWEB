var soma = 0;
var max = process.argv.lenght-1;
for (var i = 2; i <= max; i++){
    soma +=Number(process.argv[i]);
}
console.log("soma="+soma);