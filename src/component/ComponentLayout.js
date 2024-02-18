import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuth} from "./AuthProvider";
import DashboardHeader from "./DashboardHeader";
import MainContainer from "./MainContainer";

export const ComponentLayout = () => {
    const {user} = useAuth();
    const location = useLocation();
    if (user) {
        console.log(user)
        return <>
            <DashboardHeader user={user}/>
            <MainContainer child={<Outlet/>}/>
        </>
    }
    return <Navigate to="/login" replace state={{from: location}}/>
}





