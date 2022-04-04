import { ActionTypes } from "../Contents/Action-typs";


const initialState={
    products:[
            
    ],
};

export const productReducer=(state=initialState,{type,payload})=>
{
  
    // console.log(type);
    switch(type){

        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {...state,products:payload};
    

        default :
            return {...state};

        
    }


}