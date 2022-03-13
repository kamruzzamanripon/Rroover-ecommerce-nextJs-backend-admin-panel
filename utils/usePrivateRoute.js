/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const usePrivateRoute = (WrappedComponent) => {
    return (props) => {
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
          const Router = useRouter();
    
          const passport_frontend = Cookies.get('passport_backend'); 
    
          // If there is no access token we redirect to "/" page.
          if (!passport_frontend) {
            Router.replace("/login");
            return null;
          }
    
          // If this is an accessToken we just render the component that was passed with all its props
    
          return <WrappedComponent {...props} />;
        }
    
        // If we are on server, return null
        return null;
      };
};

export default usePrivateRoute;


