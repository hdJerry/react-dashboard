import React from 'react';
import { AppContainer, MainContents } from '../../App.styles';
import SideMenuContainer from '../SideMenu';


const DashboardContainer = ({children}) => {

    return (
        <AppContainer>
            <SideMenuContainer />
            <MainContents>
                {children}
            </MainContents>

        </AppContainer>
    )
}


export default DashboardContainer;