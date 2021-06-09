import styled from 'styled-components';

import {
    NavLink
} from 'react-router-dom';

import {
    device
} from '../../data/globaldata';


export const SideMenu = styled.div`
    background-color: #07074D;
    flex: 1 0 296px;
    min-height: 100vh;
    padding-bottom: 20px;
    overflow-y: auto;
    max-width: 296px;
    display: none;

    &::-webkit-scrollbar {
        width: 6px;
        background-color: #046af326;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FFF;
     }

     @media ${device.laptop} {

        display: block

     }
`;


export const SideMenuLogo = styled.div`
    margin-top: 35.61px;
    margin-left: 62.62px;
`;

export const SideMenuLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 61px;
`;

export const SideMenuLink = styled(NavLink)`
    color: #FFF;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    display: block;
    margin: 10px auto;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.5s ease-in-out;


    & > div > svg {
        fill: #FFF;
        transition: fill 0.5s ease-in-out;
    }
    
    &:hover, &.active{
    background-color: #046af326;
    border-radius: 8px;
        & > div > svg {
            fill: #046AF3;
        }
    }

`

export const SideMenuLinkIcon = styled.div`
    margin-left: 38.79px;
    margin-right: 18.08px;
`;