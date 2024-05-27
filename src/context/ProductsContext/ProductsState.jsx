import axios from "axios";
import ProductsReducer from './ProductsReducer';
import { createContext, useReducer } from "react";


const API_URL = 'http://localhost:3001';

const initialState = {
    products: []
};

export const ProductsContext = createContext(initialState)

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts = async () =>{
        const res = await axios.get(API_URL + '/products');
        dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data
            
        })
        return res;
    };

    return(
        <ProductsContext.Provider
            value={{
                products: state.products,
                getProducts
            }}
         >
            {children}
        </ProductsContext.Provider>
    )

}

