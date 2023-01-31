import mongoose from "mongoose";
const db = require('./config').get('local').db;
import dotenv from 'dotenv';
dotenv.config();
console.log(db);

var mongourl =`mongodb://${db.host}:${db.portno}/${db.dbname}`;
console.log(mongourl);



export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongourl)
        console.log("connection success");
    }
    catch(e){
        throw e 
    }
}