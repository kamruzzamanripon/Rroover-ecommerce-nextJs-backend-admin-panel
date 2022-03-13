/* eslint-disable react-hooks/rules-of-hooks */
import Dashboard from '../components/Dashboard';
import Layout from '../components/layout/Layout';
import usePrivateRoute from '../utils/usePrivateRoute';


const Index = ()=> {
  return (
    <Layout title='Admin Panel'>
        <Dashboard />
    </Layout>
  )
}

export default usePrivateRoute(Index)
