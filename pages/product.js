/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Layout from '../components/layout/Layout';
import Product from '../components/Product';
import usePrivateRoute from '../utils/usePrivateRoute';


const  productPage = ()=> {
  
  return (
    <Layout title='Product'>
        <Product />
    </Layout>
  )
}

export default usePrivateRoute(productPage)
