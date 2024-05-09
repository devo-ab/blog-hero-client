import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary text-center"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;