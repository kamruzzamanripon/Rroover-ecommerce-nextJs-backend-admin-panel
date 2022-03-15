/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Brand from '../components/Brand';
import Category from '../components/Category';
import Layout from '../components/layout/Layout';
import usePrivateRoute from '../utils/usePrivateRoute';


const  brandPage = ()=> {
  
  return (
    <Layout title='brand'>
        <Brand />
    </Layout>
  )
}

export default usePrivateRoute(brandPage)
