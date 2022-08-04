const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt")

const authMiddleware = async (req, res, next) => {
  try {

    if(!req.headers.authorization){
        handleHttpError(res, "NEED_SESSION", 401);
        return
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken(token);

    // console.log(dataToken);
    if(!dataToken){
        handleHttpError(res, "TOKEN_NOT_PROVIDED", 401);
        return
    } else {
      next();
    }

  } catch (e) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};

module.exports = authMiddleware;
