import React from "react"
import './App.css'
import {Routes, Route} from "react-router-dom";
import Login from "./component/Login"
import Registrations from "./component/Registrations";
import Authentications from "./component/Authentications";
import Billing from "./component/Billing";
import {ComponentLayout} from "./component/ComponentLayout";
import AuthProvider from "./component/AuthProvider";
import { Amplify } from 'aws-amplify';
import { defaultStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

const authConfig = {
    Cognito: {
        userPoolId: 'eu-north-1_YVjIocZxe',
        userPoolClientId: '74k3kup3o8ej9cfh8vg97kmdd5',
        signUpVerificationMethod: 'code',
    }
}

Amplify.configure({
    Auth: authConfig
})

cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);

const App = () => {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route index element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="dashboard" element={<ComponentLayout/>}>
                        <Route index element={<Registrations/>}/>
                        <Route path="registrations" element={<Registrations/>}/>
                        <Route path="authentications" element={<Authentications/>}/>
                        <Route path="billing" element={<Billing/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    )
}
export default App
