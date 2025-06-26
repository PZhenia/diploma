import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const token = useSelector(state => state.auth.token);
    const location = useLocation();

    if(!token) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />
    }

    return children;
}

export default PrivateRoute;