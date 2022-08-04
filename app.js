require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express")
const morganBody = require("morgan-body");
const openApiConfigration = require("./docs/swagger")
const dbConnectNoSql = require("./config/mongo");
const app = express();
var bodyParser = require('body-parser');

const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
/**
 * 
 */
morganBody(app, {
  noColors: true,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

const port = process.env.PORT || 3000;
/**
 * Definir ruta de documentación
 */

app.use('/documentation',
 swaggerUI.serve, 
 swaggerUI.setup(openApiConfigration))

/**
 * Aqui invocamos a las rutas! 😎
 */
app.use("/api", require("./routes"));

if(NODE_ENV !== 'test'){
  app.listen(port);
}

dbConnectNoSql() 

module.exports = app;
