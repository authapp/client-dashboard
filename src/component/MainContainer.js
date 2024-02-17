import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
    display: flex;
    width: 100vw;
    position: relative;
    top: 70px;
    z-index: 1;
`

const Main = styled.main`
    height: calc(100vh - 70px);
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`
const ReportContainer = styled.div`
    min-height: 200px;
    max-width: 1200px;
    margin: 20px auto 10px auto;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgb(188, 188, 188);
    padding: 0px 20px 20px 20px;
`
const ReportHeader = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 10px 20px;
    border-bottom: 2px solid rgba(185, 217, 235, 0.59);
`


const ReportBody = styled.div`
    max-width: 1160px;
    overflow-x: auto;
    padding: 20px;
`

const ReportTopicHeading = styled.div`
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Items = styled.div`
    width: 1120px;
    margin-top: 15px;
`

const Item = styled(ReportTopicHeading)`
    margin-top: 20px;
`

const Top = styled.h3`
    font-size: 18px;
    letter-spacing: 0px;
`

const TopNext = styled.h3`
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 600;
`
const TopNextLabelTag = styled(TopNext)`
    width: 100px;
    text-align: center;
    background-color: var(--secondary-color);
    color: white;
    border-radius: 4px;
`

const MainContainer = ({child}) => {
    return (
        <Container>
            <NavBar/>
            <Main>
                <ReportContainer>
                    <ReportHeader>
                        {child}
                    </ReportHeader>
                    <ReportBody>
                        <ReportTopicHeading>
                            <Top>Username</Top>
                            <Top>Transaction Id</Top>
                            <Top>Timestamp</Top>
                            <Top>Status</Top>
                        </ReportTopicHeading>

                        <Items>
                            <Item>
                                <TopNext>Article 73</TopNext>
                                <TopNext>2.9k</TopNext>
                                <TopNext>210</TopNext>
                                <TopNextLabelTag>Published</TopNextLabelTag>
                            </Item>

                            <Item>
                                <TopNext>Article 72</TopNext>
                                <TopNext>1.5k</TopNext>
                                <TopNext>360</TopNext>
                                <TopNextLabelTag>Published</TopNextLabelTag>
                            </Item>

                            <Item>
                                <TopNext>Article 71</TopNext>
                                <TopNext>1.1k</TopNext>
                                <TopNext>150</TopNext>
                                <TopNextLabelTag>Published</TopNextLabelTag>
                            </Item>

                            <Item>
                                <TopNext>Article 70</TopNext>
                                <TopNext>1.2k</TopNext>
                                <TopNext>420</TopNext>
                                <TopNextLabelTag>Published</TopNextLabelTag>
                            </Item>

                        </Items>
                    </ReportBody>
                </ReportContainer>
            </Main>
        </Container>
    )
}

export default MainContainer