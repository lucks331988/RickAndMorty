const PORT = 3001;
const { sequelize } = require("./DB_connection");
const server = require("./app");
const saveApiData = require('./controllers/saveApiData');

server.listen(PORT, async () => {
    await sequelize.sync({ force: true });
    await saveApiData();
    console.log('Servidor en funcionamiento en el puerto ' + PORT);
});
