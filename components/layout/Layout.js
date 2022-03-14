import Head from "next/head";
import React, { Fragment, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children, title="Ecommerce"}) => {
     //console.log("layout", title)
     const [mobileNavsidebar, setMobileNavsidebar] = useState(false);
     
  //console.log("mobile sidebar", mobileNavsidebar)

  return (
    <Fragment>
      
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <div className="flex bg-gray-100 min-h-screen relative">
        
          <Sidebar mobileNavsidebar={mobileNavsidebar} />
          <div className="flex-grow text-gray-800">
            <Header mobileNavsidebar={mobileNavsidebar} setMobileNavsidebar={setMobileNavsidebar} />
              {children}
          </div>
          
        <Footer />
       </div> 
        

    </Fragment>
  );
};

export default Layout;
