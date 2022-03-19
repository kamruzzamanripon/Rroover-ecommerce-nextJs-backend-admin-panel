/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Layout from '../components/layout/Layout';
import Role from '../components/Role';
import usePrivateRoute from '../utils/usePrivateRoute';


const  rolePage = ()=> {
  
  return (
    <Layout title='Role'>
        <Role />
    </Layout>
  )
}

export default usePrivateRoute(rolePage)
