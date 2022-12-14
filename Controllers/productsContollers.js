const  ProductsServices = require('../Services/products');
const { successResponse, badRequestResponse } = require("../utils/responseBuilder");

const { isDecimal } = require("../utils/validator");
async function getProducts(req,res){
    try {
        const {limit, offset}=req.query;
        const errorMessages = [];
        if(!limit && !offset){
            errorMessages.push("Parameter Need is required");
        }
        if(isDecimal(limit)||isDecimal(offset)){
        errorMessages.push("Parameter Integer is required");
        }
        if(errorMessages.length){
            res.status(400).send(errorMessages);
        }else{
            const products=await ProductsServices.getProducts(limit,offset);
            res.status(200).send(products);

        }
    } catch (exception) {
        res.status(500).send("internal server error");
    }
   
}

async function searchProduct(req,res){
    try{
        const {name}=req.query;

        const errorMessages = [];

        if(!name){ errorMessages.push("Parameter Need is required");}

        if(typeof name !== "string"){ errorMessages.push("name is not string");}

        if(errorMessages.length){res.status(400).send(badRequestResponse(errorMessages));}

        else{const products=await ProductsServices.searchProduct(name); res.status(200).send(products); }
        
    }catch(exception){
        return;    
    }

}

module.exports={
getProducts,
searchProduct

};