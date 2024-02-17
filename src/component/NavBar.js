import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useAuth} from "./AuthProvider";

const NavContainer = styled.nav`
    height: calc(100vh - 70px);
    width: 250px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: all 0.5s ease-in-out;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        display: none;
    }
`

const DashboardNavBarItem = styled(NavLink)`
    background-color: #eee;
    color: black;
    display: block;
    padding: 15px 15px 15px 25px;
    text-decoration: none;

    &:hover {
        background-color: #ccc;
        font-weight: 500;
    }

    &.active {
        background-color: var(--Border-color);
        font-weight: 500;
        color: white;
    }
`

const NavBar = () => {
    const {onLogout} = useAuth();
    return (
        <NavContainer>
            <DashboardNavBarItem to="/dashboard/registrations">Registrations</DashboardNavBarItem>
            <DashboardNavBarItem to="/dashboard/authentications">Authentications</DashboardNavBarItem>
            <DashboardNavBarItem to="/dashboard/billing">Billing</DashboardNavBarItem>
            <DashboardNavBarItem to="/" onClick={onLogout}>Logout</DashboardNavBarItem>
        </NavContainer>
    )
}

export default NavBar