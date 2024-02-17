import React from "react";
import styled from "styled-components";

const Header = styled.header`
    height: 70px;
    width: 100vw;
    padding: 0 30px;
    background-color: var(--background-color1);
    position: fixed;
    z-index: 100;
    box-shadow: 1px 1px 15px rgba(185, 217, 235, 0.825);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    font-size: 27px;
    font-weight: bold;
    color: var(--primary-color);
`
const DashboardHeader = () => {
    return (
        <Header>
            <Heading>
                AuthApp Client Dashboard
            </Heading>
        </Header>
    )
}

export default DashboardHeader