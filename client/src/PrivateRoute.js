import React , {useEffect} from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            alert('You need to log in to access this page.'); // gives alert on directly accessing page
        }
    }, [isAuthenticated]);
    return isAuthenticated ? element : <Navigate to="/login"/>; // if authenticated the dashboard will appear else it will redirect to the login page
};

export default PrivateRoute;
