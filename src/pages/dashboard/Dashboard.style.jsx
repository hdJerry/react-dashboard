import styled, { css } from 'styled-components';


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

export const SearchInputContainer = styled.div `
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 10px;
    flex: 1 1 100%;
    height: 57px;
    position: relative;
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