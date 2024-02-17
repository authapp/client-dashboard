import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuth} from "./AuthProvider";
import DashboardHeader from "./DashboardHeader";
import MainContainer from "./MainContainer";

export const ComponentLayout = () => {
    const {token} = useAuth();
    const location = useLocation();
    if(!token) {
        return <Navigate to="/login" replace state={{ from: location }} />
    }
    return (
        <>
            <DashboardHeader/>
            <MainContainer child={<Outlet/>}/>
        </>
    )
}





