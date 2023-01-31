import express from 'express';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';
import cors from 'cors';
const app =   express();
import DefaultData from './default.js';
import{mongoconnection} from './db';
import Router from './route/route.js';


 mongoconnection();
 app.use(cors({origin:"*"}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
DefaultData();



app.use ("/uploads",express.static("Uploads"));
// app.use("/image", imageRoute);
app.use('/',Router);
export default app;

export let paytmMarchantKey = process.env.PAYTM_MURCHANT_KEY;
export let paytmParams= {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;

paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;

paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;

paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] ="1000";
paytmParams['CALLBACK_URL']="http://localhost:9918/callback";
paytmParams['EMAIL'] = "Sanjay@gmail.com";
paytmParams['MOBILE_NO'] ='123456789';




