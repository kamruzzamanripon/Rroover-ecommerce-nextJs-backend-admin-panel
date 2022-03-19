/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Layout from '../components/layout/Layout';
import Permission from '../components/Permission';
import usePrivateRoute from '../utils/usePrivateRoute';


const  permissionPage = ()=> {
  
  return (
    <Layout title='Permission'>
        <Permission />
    </Layout>
  )
}

export default usePrivateRoute(permissionPage)
