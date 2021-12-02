const mongoose = require('mongoose');

const dbConnection = async () =>{
    await mongoose.connect(process.env.MONGOURL)
        .then(() => console.log("Connect mongoDB ready"))
        .catch(err => {
            console.log(`Error connect mongoDB: ${ err }`);
            throw new Error('Error al conectar la DB');
        });
}

module.exports = {
    dbConnection
}