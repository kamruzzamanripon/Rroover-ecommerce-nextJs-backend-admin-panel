/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '../components/layout/Layout';
import SubCategory from '../components/SubCategory';
import usePrivateRoute from '../utils/usePrivateRoute';


 const subCategoryPage = ()=> {
  return (
    <Layout title='Sub-Category'>
        <SubCategory />
    </Layout>
  )
}

export default usePrivateRoute(subCategoryPage)
