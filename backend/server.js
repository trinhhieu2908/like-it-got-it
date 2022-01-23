const route = require('./route')

//const databaseServer = require('./integration/sql')
//const syncDatabase = require('./integration/sql/boostrap')

server = require('http').Server(route);

async function bootstrap(argument) {
    //await databaseServer.connect()
    server.listen(3005, () => {
        console.log("http App is running at port 3005");
    });
}

bootstrap()