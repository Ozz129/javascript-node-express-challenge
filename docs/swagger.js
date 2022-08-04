const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion ADA TEST REST Api",
    version: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    }
  ],
  components: {
    securitySchemes:{
        bearerAuth:{
            type:"http",
            scheme:"bearer"
        }
    },
    schemas: {
      authLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      authRegister: {
        type: "object",
        required: ["email", "password", "name"],
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      booking: {
        type: "object",
        required: ["name", "email", "origin", "destination", "apertureDate", "duration"],
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          origin: {
            type: "string",
          },
          destination: {
            type: "string",
          },
          apertureDate: {
            type: "string"
          },
          duration: {
            type: "integer",
          },
        },
      },
    },
  },
};

/**
 * Opciones
 */
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openApiConfigration = swaggerJsdoc(options);

module.exports = openApiConfigration;
