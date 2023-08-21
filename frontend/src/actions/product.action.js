import axios from "axios"
import { store } from '../index';



export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL"
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST"
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL"



export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get("http://127.0.0.1:8000/api/product/")

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/detail/${id}/`)
        

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




