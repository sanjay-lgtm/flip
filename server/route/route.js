import express from 'express';
import { userSignup, userLogin } from '../controller/usercontroller';
import { getProducts, getProductById } from '../controller/product-controller';
import { addPaymentGateway,paytmResponse } from '../controller/Payment-controller';
const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment',addPaymentGateway);
router.post('/callback',paytmResponse);


export default router;