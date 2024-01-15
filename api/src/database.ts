import mongoose from "mongoose";

// import config from "./config/config";


mongoose.connect('mongodb://localhost:27017/exploservice')
    .then(() => console.log('Connected to exploservice DB'))
    .catch((err) => console.log('Error en exploservice DB: ', err))

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('ExploserviceDB from once');
});