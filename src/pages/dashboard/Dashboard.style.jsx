import styled, { css } from 'styled-components';

import {
    device
} from '../../data/globaldata'


const FlexBox = css `
    width: 100%;
    display: flex;
    align-items: center;
`;

const LeftIcons = css `
    position: absolute;
    left: 26.26px;
    top: 35%;  
`;

const RightIcons = css `
    position: absolute;
    right: 10.26px;
    top: 35%;  
`;


export const HeaderContainer = styled.div `
    ${FlexBox}
`;

export const Main = styled.div `
    width: 95%;
    max-width: 1440px;
    margin: 49px auto 0;
    padding: 0 20px;
    @media ${device.laptop} {
        width: 95%;
     }

    @media ${device.laptopL} {
        width: 1049px;
     }
`;

export const SearchInputContainer = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 10px;
    flex: 1 1 100%;
    height: 57px;
    position: relative;

    border: 2px solid ${props => props.isActive ? '#046AF376' : '#fff'};
        input {
            width: 100%;
            height: 100%;
            padding: 0 20px 0 50px;
            border: none;
            outline: none;
            font-size: 16px;
            color: #07074D;
        }
    `;



export const SearchIcon = styled.div `
    ${LeftIcons}
`;

    
export const NotificationConatiner = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 10px;
    height: 57px;
    flex: 1 0 254.83px;
    margin-left: 25.75px;
    position: relative;
`;

export const BellIcon = styled.div`
    ${LeftIcons}
`;

export const MoreIcon = styled.div`
    ${RightIcons}
`;

export const Profile = styled.div`
    ${FlexBox}
    justify-content: flex-end;
    width: unset;
    margin: -2px 10px 0 auto;
`;

export const ProfilePics = styled.div `
    overflow: hidden;
    width: 38.78px;
    height: 39.96px;
    margin-left: 17px;
`;
export const ProfileName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: right;

    color: #79828E;
`;



export const TabContainer = styled.div `
    ${FlexBox}
    justify-content: flex-end;

    margin-top: 31px;

`;


export const TabValue = styled.span `
    ${FlexBox}
    width: unset;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000;
    padding: 5px 15px;
    justify-content: center;
    margin-left: 20px;
    border-radius: 100px;

    &.active {
        color: #fff;
        background: #046AF3;
    }

`;

export const Card = styled.div `
    flex: 0 1 ${props => props.width || '300px'};
    background-color: ${props => props.background || '#FFFFFF'};
    padding: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    height: ${props => props.height || '410px'};
    border-radius: 10px;
    &:not(:last-child){
        margin-right: 19px;
    }

     @media ${device.mobileL} {
         flex: 1 1 ${props => props.width || '300px'};

         &:not(:last-child){
                margin-right: unset;
         }
         margin-bottom: 19px;
     }

     @media ${device.tablet} {
        &:not(:last-child){
                margin-right: 19px;
         }
     }
`;

export const FlexContainerRow = styled.div `
    ${FlexBox}
    width: ${props => props.width || '100%'};
    flex-wrap: wrap;
    justify-content: ${props => props.justify || 'flex-start'};
    // padding: 10px;
    margin-top: ${props => props.top || ''};
    margin-bottom: ${props => props.bottom || ''};
    overflow: auto;
    
    @media ${device.tablet} {
        flex-wrap: nowrap;
     }
`;