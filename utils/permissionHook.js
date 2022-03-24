import Cookies from "js-cookie";



export  const can = (permission)=>{

    const userPermission = Cookies.get('user_info');
    const userPermissionParse = userPermission ? JSON.parse(userPermission) : [];
    const userPermissionList = userPermissionParse?.role_wise_permissions;

   return( 
           (userPermissionList || []).find((p)=> p === permission) ? true : false
       );
}
