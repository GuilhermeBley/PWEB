const sql = require ('mssql');

// para acessar o arquivo de config voltar 1 nivel
//D:\PWEBNode\Exercicios\app\config
var dbConnection = require('../config/dbConnection');
module.exports = function(app){
    app.get('/informacao/professores', function(req,res){ 
            async function getProfessores() {
            try {
                const pool = await dbConnection(); // executando a funcao
                const results = await pool.request().query("SELECT * FROM PROFESSORES");
                res.render('informacao/professores',{profs : results.recordset});
            } catch (err) {
                console.log(err)
            }
        }
        const professores = getProfessores();
    });
};
