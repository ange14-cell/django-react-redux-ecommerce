import React, { useEffect }  from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/product.action';

import Loader from '../components/Loader';




function HomeScreen({ history }) {

    
    const listProduct = useSelector(state => state.productList)
    const {products, loading, error} = listProduct
    
    const dispatch = useDispatch()

   useEffect(() => {
    dispatch(listProducts())

   }, [dispatch])




    return (
        <div>
            

            <h1>Latest Products</h1>
            {loading ? <Loader/>
                : error ? <h3 variant='danger'>{error}</h3>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        
                    </div>
            }
        </div>

    )
}

export default HomeScreen
