import styled from 'styled-components'
import { rightlog, leftlog } from "../../assets";

// position:fixed;
export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const MainHeaderBar = styled.div`
    transition: 1s;
    position: fixed;
    z-index: 1;
    padding: 0 10vw;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 14vh;
    background-color: rgba(203, 47, 29, 0.8);
    align-items: flex-end;
    border-bottom: 20px solid #952511;
`;

export const BottomHeaderBar = styled.div`
    transition: 1s;
    width: 100%;
    height: 20px;
    background-color: #952511;
    opacity: 1;
`;

export const LeftLog = styled.div`
    transition: .5s;
    margin: 0 5vw 0 5vw;
    width: 300px;
    height: 100%;
    background-image: url(${leftlog});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const RightLog = styled.div`
    transition: .5s;
    margin: 0 5vw 0 5vw;
    width: 250px;
    height: 100%;
    background-image: url(${rightlog});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;