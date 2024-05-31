import axios from "axios";

const API_URL = 'http://localhost:3001/orders';

const createOrder = async (cart) =>{
    const token = localStorage.getItem('token')
   const productIds = cart.map(product => product.id)
   console.log(productIds)
    await axios.post(API_URL,{ProductId:productIds},{
        headers:{
            Authorization:token
        }
    })
}

const orderService = {
    createOrder
}

export default orderService