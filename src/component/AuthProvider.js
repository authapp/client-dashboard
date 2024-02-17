import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

const AuthContext = React.createContext(null);
const AuthProvider = ({children}) => {
    const [token, setToken] = React.useState(null)

    const location = useLocation()

    const navigate = useNavigate()

    const handleLogin = async () => {
        const token = "11234"
        setToken(token)
        const origin = location.state?.from?.pathname || '/dashboard/registrations';
        navigate(origin);
    }

    const handleLogout = () => {
        setToken(null)
        navigate('/')
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return React.useContext(AuthContext);
}

export default AuthProvider