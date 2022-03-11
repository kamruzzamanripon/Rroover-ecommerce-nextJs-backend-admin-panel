import Head from "next/head";
import React, { Fragment, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children, title="Ecommerce"}) => {
     //console.log("layout", title)
     const [sidebarOpen, setSidebarOpen] = useState(false);
     


  return (
    <Fragment>
      
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <div className="flex bg-gray-100 min-h-screen">
        
          <Sidebar />
          <div className="flex-grow text-gray-800">
            <Header />
              {children}
          </div>
          
       </div> 
        <Footer />
        

    </Fragment>
  );
};

export default Layout;
