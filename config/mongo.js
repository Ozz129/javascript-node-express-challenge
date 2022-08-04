const mongoose = require("mongoose");

const dbConnect = async () => {
  const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xms2qxx.mongodb.net/ada_test?retryWrites=true&w=majority`
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
        if(!err){
            console.log('**** CONEXION CORRECTA ****')
        }else{
            console.log('**** ERROR DE CONEXION ****' + err)
        }
    }
  );
};

module.exports = dbConnect;
