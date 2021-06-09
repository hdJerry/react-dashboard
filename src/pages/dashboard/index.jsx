import React, { useState } from 'react';

import displayPics from '../../assets/images/profile.svg';

import {
HeaderContainer,
NotificationConatiner,
SearchInputContainer,
SearchIcon,
TabContainer,
TabValue,
BellIcon,
MoreIcon,
ProfilePics,
Profile,
ProfileName,
Card,
FlexContainerRow,
Main,
} from './Dashboard.style';

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [activeSearch, setActiveSearch] = useState(0);
    const tabs = [
        {
            id: 1,
            value: 'Today'
        },
        {
            id: 2,
            value: 'Last 7 days'
        },
        {
            id: 3,
            value: 'Last 30 days'
        },
        {
            id: 4,
            value: 'All Time'
        },
        {
            id: 5,
            value: 'Custom'
        },
    ];

    return (
       <Main>
           <HeaderContainer>
               <SearchInputContainer isActive={activeSearch}>
                    <SearchIcon>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2934 11.062H11.5344L11.2654 10.8026C12.2069 9.70741 12.7737 8.28555 12.7737 6.7388C12.7737 3.28983 9.97806 0.494141 6.52908 0.494141C3.08011 0.494141 0.284424 3.28983 0.284424 6.7388C0.284424 10.1878 3.08011 12.9835 6.52908 12.9835C8.07584 12.9835 9.4977 12.4166 10.5929 11.4751L10.8523 11.7441V12.5031L15.6559 17.2971L17.0874 15.8656L12.2934 11.062ZM6.52908 11.062C4.1369 11.062 2.20586 9.13098 2.20586 6.7388C2.20586 4.34661 4.1369 2.41557 6.52908 2.41557C8.92127 2.41557 10.8523 4.34661 10.8523 6.7388C10.8523 9.13098 8.92127 11.062 6.52908 11.062Z" fill="#046AF3" />
                        </svg>
                    </SearchIcon>
                    <input onFocus={() => setActiveSearch(1)} onBlur={() => setActiveSearch(0)} />
               </SearchInputContainer>

               <NotificationConatiner>

                    <BellIcon>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.40749 1.7663L4.12027 0.479079C1.95989 2.12637 0.537643 4.66481 0.411621 7.54531H2.21194C2.34696 5.1599 3.57117 3.07153 5.40749 1.7663ZM16.5604 7.54531H18.3608C18.2257 4.66481 16.8035 2.12637 14.6521 0.479079L13.3739 1.7663C15.1922 3.07153 16.4254 5.1599 16.5604 7.54531ZM14.7871 7.99539C14.7871 5.23191 13.3109 2.9185 10.7364 2.3064V1.69429C10.7364 0.947161 10.1333 0.344055 9.38619 0.344055C8.63906 0.344055 8.03595 0.947161 8.03595 1.69429V2.3064C5.4525 2.9185 3.98524 5.22291 3.98524 7.99539V12.4962L2.18493 14.2965V15.1967H16.5874V14.2965L14.7871 12.4962V7.99539ZM9.38619 17.8971C9.51221 17.8971 9.62923 17.8881 9.74625 17.8611C10.3314 17.7351 10.8084 17.339 11.0425 16.7989C11.1325 16.5829 11.1775 16.3489 11.1775 16.0968H7.57687C7.58587 17.087 8.38701 17.8971 9.38619 17.8971Z" fill="#046AF3" />
                        </svg>
                    </BellIcon>

                    <Profile>
                        <ProfileName>
                            Jon Camp
                        </ProfileName>
                        <ProfilePics>
                            <img src={displayPics} alt="Profile" />
                        </ProfilePics>

                    </Profile>


                    <MoreIcon>
                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.39252 3.695C3.27267 3.695 3.99279 2.97488 3.99279 2.09473C3.99279 1.21457 3.27267 0.494446 2.39252 0.494446C1.51236 0.494446 0.792236 1.21457 0.792236 2.09473C0.792236 2.97488 1.51236 3.695 2.39252 3.695ZM2.39252 5.29528C1.51236 5.29528 0.792236 6.01541 0.792236 6.89556C0.792236 7.77572 1.51236 8.49584 2.39252 8.49584C3.27267 8.49584 3.99279 7.77572 3.99279 6.89556C3.99279 6.01541 3.27267 5.29528 2.39252 5.29528ZM2.39252 10.0961C1.51236 10.0961 0.792236 10.8162 0.792236 11.6964C0.792236 12.5766 1.51236 13.2967 2.39252 13.2967C3.27267 13.2967 3.99279 12.5766 3.99279 11.6964C3.99279 10.8162 3.27267 10.0961 2.39252 10.0961Z" fill="#046AF3" />
                        </svg>
                    </MoreIcon>

               </NotificationConatiner>
               
           </HeaderContainer>

            <TabContainer>
                {
                    tabs.map((res, index) => (
                        <TabValue key={index} className={index === activeTab ? 'active' : ''} onClick={() => setActiveTab(index)}>
                            {res.value}
                        </TabValue>
                    ))
                }
            </TabContainer>


            <FlexContainerRow top={'20px'} bottom={'57px'}>
                <Card width={'337px'} height={'100px'}/>
                <Card width={'337px'} height={'100px'} />
                <Card width={'337px'} height={'100px'} />
            </FlexContainerRow>

            <FlexContainerRow top={'20px'} bottom={'57px'}>
                <Card width={'693px'} height={'410px'} />
                <Card width={'337px'} height={'410px'} />
            </FlexContainerRow>

       </Main>
    );
}

export default Dashboard;
