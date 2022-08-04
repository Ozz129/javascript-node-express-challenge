const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Debes de pasar el objecto del usario
 * @param {*} user
 */
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign
};

/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
  let access = false;
    try{
        jwt.verify(tokenJwt, JWT_SECRET, (err, decodedToken) => {
          access = err ? false : true;
        })

        return access;
    }catch(e){
        return false;
    }
};

module.exports = { tokenSign, verifyToken };
