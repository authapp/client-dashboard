import React from "react";
import styled from "styled-components";
import {useAuth} from "./AuthProvider";
import {Navigate} from "react-router-dom";


const LoginContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgb(188, 188, 188);
`

const LoginBody = styled.div`
    overflow-x: auto;
    padding: 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const AuthAppHeading = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: var(--secondary-color);
    margin: auto;
`

const LoginButton = styled.button`
    margin-top: 20px;
    height: 40px;
    width: 100px;
    border-radius: 8px;
    background-color: var(--primary-color);
    color: white;
    font-size: 15px;
    border: none;
    cursor: pointer;

    &:hover {
        scale: 120%;
        font-weight: bold;
    }
`

const Login = () => {
    const {user, onLogin} = useAuth();
    if (user) {
        return <Navigate to="/dashboard/registrations" replace/>
    }
    return (
        <LoginContainer>
            <LoginBody>
                <AuthAppHeading>Welcome to AuthApp</AuthAppHeading>
                <LoginButton onClick={onLogin}>Log in</LoginButton>
            </LoginBody>
        </LoginContainer>
    )
}

export default Login