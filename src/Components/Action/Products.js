import { ActionTypes } from "../Contents/Action-typs"



export const setProduct=(products)=>{
// console.log("products",products)

    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    };
};



export const selectedProduct=(product)=>
{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};


export const removeSelectedProduct=(product)=>
{
    return{
        type:ActionTypes. REMOVE_SELECTED_PRODUCTS,

    };
};