/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/layout/Layout';
import usePrivateRoute from '../utils/usePrivateRoute';


const  bannerPage = ()=> {
  
  return (
    <Layout title='brand'>
        <Banner />
    </Layout>
  )
}

export default usePrivateRoute(bannerPage)
