import sql  from 'mssql'
import config from '../config'

const dbSettings ={
    // user: "usr_ausentismos",
    // password: "4Au$s3Ent1I$mo0oS",
    // server: "10.99.1.77",
    // database:"EDLHEON",
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database:config.dbDatabase,
    options:{
        encrypt:true,
        trustServerCertificate: true,
    },
};

// async function getConnection(){
//     const pool = await sql.connect(dbSettings);
//     const result = await pool.request().query('SELECT 1');
//     console.log(result);
// }

// getConnection();

export async function getConnection(){

    try {
        const pool = await sql.connect(dbSettings)
        return pool;  
    } catch (error) {
        console.error(error);
        console.log(' no se ha realizado la conexion a la BD');
    }
   

}

export { sql };
