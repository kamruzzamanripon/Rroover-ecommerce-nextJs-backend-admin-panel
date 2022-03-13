/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Category from '../components/Category';
import Layout from '../components/layout/Layout';
import usePrivateRoute from '../utils/usePrivateRoute';


const  categoryPage = ()=> {
  
  return (
    <Layout title='Category'>
        <Category />
    </Layout>
  )
}

export default usePrivateRoute(categoryPage)
