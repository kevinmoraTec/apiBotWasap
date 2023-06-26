// const boom = require('@hapi/boom');

// const {
//   createBot,
//   createProvider,
//   createFlow,
//   addKeyword,
// } = require('@bot-whatsapp/bot'); // inpotamos estos metodos

// const QRPortalWeb = require('@bot-whatsapp/portal'); // Metodo opcional para poder crear una pagina par escaear el Qr

// const BaileysProvider = require('@bot-whatsapp/provider/baileys'); // aqui tenemos el provedor de servicio de Watsap

// const MySQLAdapter = require('@bot-whatsapp/database/mysql'); // ademas aqui es el Probedor de la base de datos

// class BotWhatsap {
//   constructor() {}

//   async scanQr() {

//     QRPortalWeb({port:4003}); // Mostrar una pagina con un qr
//     const data = this.inicializarBot()
//     return data
//   }

//   async inicializarBot() {
//     //addKeyword podemos pasrle un string o una array de Strings
//     const flowPrincipal = addKeyword(['hola', 'ola']).addAnswer(' Bienvenido ');
//     // const flujoSecundario = addKeyword('gracias').addAnswer('de nada ... ');

//     const main = async () => {
//       // const adapterDB = new MySQLAdapter({
//       //     host: MYSQL_DB_HOST,
//       //     user: MYSQL_DB_USER,
//       //     database: MYSQL_DB_NAME,
//       //     password: MYSQL_DB_PASSWORD,
//       //     port: MYSQL_DB_PORT,
//       // })
//       const adapterFlow = createFlow([flowPrincipal]); // aqui debomos pasarle todos lso array que se necesiten para lo flows de los chats
//       const adapterProvider = createProvider(BaileysProvider);
//       createBot({
//         flow: adapterFlow, // el flow de las cpneversaciones
//         provider: adapterProvider, // el provedor
//         //  database: adapterDB, // y la base de datos
//       });
//       return true
//     };

//     main()
//   }
// }

// /**
//  * Declaramos las conexiones de MySQL
// const MYSQL_DB_HOST = 'localhost'
// const MYSQL_DB_USER = 'usr'
// const MYSQL_DB_PASSWORD = 'pass'
// const MYSQL_DB_NAME = 'bot'
// const MYSQL_DB_PORT = '3306'
// */

// // Ejecutamos la aplicacion

// module.exports = BotWhatsap;
