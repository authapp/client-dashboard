import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {signIn, signOut, getCurrentUser, fetchAuthSession} from "aws-amplify/auth";

const AuthContext = React.createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        initUser()
    }, []);

    const initUser = async () => {
        currentAuthenticatedUser()
            .then(user => currentSession(user)
                .then(result => setUser(result)))
    }
    const currentAuthenticatedUser = async () => {
        try {
            const {username, userId, signInDetails} = await getCurrentUser();
            return {
                username: username,
                userId: userId,
                signInDetails: signInDetails
            }
        } catch (err) {
            console.log(err);
            return {}
        }
    }

    const handleLogin = async () => {
        try {
            const origin = location.state?.from?.pathname || '/dashboard/registrations';
            signIn({
                username: "katildheeraj@gmail.com", password: "Shubhika@123"
            })
                .then(output => initUser())
                .then(output => navigate(origin))
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const handleLogout = async () => {
        try {
            signOut()
                .then(output => {
                    setUser(null)
                    navigate('/')
                })

        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const currentSession = async ({user}) => {
        try {
            const {accessToken, idToken} = (await fetchAuthSession()).tokens ?? {}
            return {
                accessToken: accessToken,
                idToken: idToken,
                user: user
            }
        } catch (err) {
            console.log(err);
        }
    }

    const value = {
        user,
        onLogin: handleLogin,
        onLogout: handleLogout
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