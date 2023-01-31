import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmMarchantKey,paytmParams } from '../app.js';
import e, { request, response } from 'express';

export const addPaymentGateway = async(request,response) => {
    try {
        let paytmcheckSum = await paytmchecksum.generateSignature(paytmMarchantKey,paytmParams);
        let params={
            ...paytmParams,'CHECKSUMHASH':paytmcheckSum
        }
        response.status(200).json(params);


    } catch (error) {
        response.status(500).json({error:error.message})
    }
}


export const paytmResponse = (request,response) => {
    
}