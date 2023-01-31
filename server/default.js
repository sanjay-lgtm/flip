import { async } from "regenerator-runtime";
import { products } from "./constants/data"
import Product from "./model/product-schema";
const DefaultData = async() => {
    try {
   
        await Product.insertMany(products);
        console.log('Data import successfully');
    } catch (error) {
        console.log('Error while insurting default data',error.message);
    }
}

export default DefaultData;