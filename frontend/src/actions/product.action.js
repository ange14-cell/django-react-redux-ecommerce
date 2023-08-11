import axios from "axios"


export const  PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST"

export const listProducts = () => {
    return (dispatch) => {
        return axios.get("http://127.0.0.1:8000/api/product/").then((res) => {            
            dispatch({type: PRODUCT_LIST_REQUEST, payload: res.data})
        })
    }
}


export const listProductDetails = (id) => {
    return (dispatch) => {
        return axios.get(`http://127.0.0.1:8000/api/detail/${id}`).then((res) => {         
            console.log(res);   
            dispatch({type: PRODUCT_DETAILS_REQUEST, payload: res.data})
        })
    }
}

