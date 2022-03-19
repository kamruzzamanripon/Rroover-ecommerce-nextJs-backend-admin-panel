import {
  AdjustmentsIcon, ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  CollectionIcon, DocumentAddIcon, DotsCircleHorizontalIcon, DuplicateIcon, PuzzleIcon
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Nav = ({ sidebarOutsideClick }) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);

  const sidebarClose = () => {
    setSidebarStatus(false);
  };

  const sidebarOpen = () => {
    setSidebarStatus(true);
  };

  const subMenuToggle = () => {
    setSubMenuToggleStatus(!subMenuToggleStatus);
  };

  //System Accesss Menu's SubMenu
  const systemAccessSubMenu = [
    {
      subMenuTitle: "Permission",
      linkHref: "/permission"
    },
    {
      subMenuTitle: "Role",
      linkHref: "/role"
    }
  ];

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(false);
    }
  }, [sidebarOutsideClick]);
  //console.log("sidebar Nav", sidebarOutsideClick)
  return (
    <>
      <nav className="flex flex-col mx-4 my-6 space-y-4">
        <div className="inline-flex items-center justify-center ">
          {sidebarStatus ? (
            <ArrowNarrowLeftIcon
              className="inline-block h-12 cursor-pointer"
              onClick={sidebarClose}
            />
          ) : (
            <ArrowNarrowRightIcon
              className="inline-block h-12 cursor-pointer"
              onClick={sidebarOpen}
            />
          )}
        </div>

        <NavItem
          hrefLink='/category'
          sidebarStatus={sidebarStatus}
          menuTitle="Category"
          subMenu={false}
          subMenuArray={null}
        >
          <DocumentAddIcon className="h-10 relative" />
          
        </NavItem> 

        <NavItem
          hrefLink='/sub-category'
          sidebarStatus={sidebarStatus}
          menuTitle="Sub-Category"
          subMenu={false}
          subMenuArray={null}
        >
          <DuplicateIcon className="h-10" />
        </NavItem> 

        <NavItem
          hrefLink='/brand'
          sidebarStatus={sidebarStatus}
          menuTitle="Brand"
          subMenu={false}
          subMenuArray={null}
        >
          <DotsCircleHorizontalIcon className="h-10" />
        </NavItem> 
        
        <NavItem
          hrefLink='/banner'
          sidebarStatus={sidebarStatus}
          menuTitle="Banner"
          subMenu={false}
          subMenuArray={null}
        >
          <CollectionIcon className="h-10" />
        </NavItem> 
        
        <NavItem
          hrefLink='/product'
          sidebarStatus={sidebarStatus}
          menuTitle="Product"
          subMenu={false}
          subMenuArray={null}
        >
          <PuzzleIcon className="h-10" />
        </NavItem> 
        
        <NavItem
          hrefLink=''
          sidebarStatus={sidebarStatus}
          menuTitle="System Access"
          subMenu={true}
          subMenuArray={systemAccessSubMenu}
        >
          <AdjustmentsIcon className="h-10" />
        </NavItem> 
       
      </nav>
    </>
  );
};

export default Nav;
