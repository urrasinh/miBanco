
const { Pool } = require("pg")
const { solicitarCuenta, solicitarTransacciones, realizarTransacciones } = require('./consultas')


const config = {
    user: "postgres",
    host: "localhost",
    password: "1313",
    database: "banco",
    port: 5432,
};
const pool = new Pool(config);

const argumentos = process.argv // devuelve una matriz que contiene los argumentos pasados ​​en línea de comandos. 

// process.argv[0] == "node"
// process.argv[1] == "index.js"
const accionSql = argumentos[2]
const param1 = argumentos[3]
const param2 = argumentos[4]
const param3 = argumentos[5]
const param4 = argumentos[6]




pool.connect(async (errorConexion, client, release) => { // “connect()” contiene una función callback asíncrona
    if (errorConexion) { // si hay error en la conxión
        console.error(errorConexion.code)
    } else { // todo Ok
        switch (accionSql) { // selección de argumentos
            case 'solicitarCuenta':
                await solicitarCuenta(client, release, param1)
                break
            case 'solicitarTransacciones':
                await solicitarTransacciones(client, release, param1)
                break
            case 'realizarTransacciones':
                await realizarTransacciones(client, release, param1, param2, param3, param4)
                break
            default:
                console.log('error')
                break
        }

        pool.end()
    }
})

