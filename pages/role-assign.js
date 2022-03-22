/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Layout from '../components/layout/Layout';
import RoleAssign from '../components/RoleAssign';
import usePrivateRoute from '../utils/usePrivateRoute';


const  roleAssignPage = ()=> {
  
  return (
    <Layout title='Role-Assign'>
        <RoleAssign />
    </Layout>
  )
}

export default usePrivateRoute(roleAssignPage)
