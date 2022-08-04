const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth")
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

/**
 * http://localhost:3001/api
 * 
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "New user creation"
 *          description: "New user creation"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: Success
 *                  '403':
 *                      description: Validation error
 */
router.post("/register", validatorRegister, registerCtrl);
/**
 * Login user
 * @openapi
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Login user"
 *      description: Sessions start
 *      responses:
 *        '200':
 *          description: Get the object detail.
 *        '422':
 *          description: Validation error.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/authLogin"
 *    responses:
 *      '201':
 *        description: Success
 */
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
