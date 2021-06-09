import React from 'react';



import {
    Dashboard as DashboardIcon,
    Fingerprint,
    Shuffle,
    Chat,
    MonetizationOn,
} from '@material-ui/icons';

import {
    SideMenu,
    SideMenuLogo,
    SideMenuLinks,
    SideMenuLink,
    SideMenuLinkIcon,
} from './SideMenu.style'

const SideMenuContainer = () => {

    const links = [
        {
            icon: DashboardIcon,
            link: 'Dashboard',
            to: '/dashboard'
        },
        {
            icon: Chat,
            link: 'Borrowers',
            to: '/borrowers'
        },
        {
            icon: DashboardIcon,
            link: 'Transactions',
            to: '/transactions'
        },
        {
            icon: Shuffle,
            link: 'Loans',
            to: '/loans'
        },
        {
            icon: DashboardIcon,
            link: 'Repayments',
            to: '/repayments'
        },
        {
            icon: DashboardIcon,
            link: 'Collateral register',
            to: '/collateral-register'
        },
        {
            icon: Fingerprint,
            link: 'Weekly /Monthly Calendars',
            to: '/calendars'
        },
        {
            icon: DashboardIcon,
            link: 'Collection sheets',
            to: '/transactions'
        },
        {
            icon: MonetizationOn,
            link: 'Savings',
            to: '/loans'
        },
        {
            icon: DashboardIcon,
            link: 'Investors',
            to: '/collateral-register'
        },
        {
            icon: Fingerprint,
            link: 'Account Managers',
            to: '/repayments'
        },
        {
            icon: Fingerprint,
            link: 'Varification Managers',
            to: '/calendars'
        },
    ];

    return (
        <SideMenu>
            <SideMenuLogo>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="21.9541" cy="21.9422" r="21.3355" fill="#046AF3" />
                    <circle cx="21.9542" cy="21.9421" r="10" fill="white" stroke="#046AF3" stroke-width="10.6931" />
                </svg>
            </SideMenuLogo>

            <SideMenuLinks>

                {
                    links.map((res, index) => (
                        <SideMenuLink key={index} to={res.to}>
                            <SideMenuLinkIcon>
                                <res.icon />
                            </SideMenuLinkIcon>
                            {res.link}
                        </SideMenuLink>
                    ))
                }


            </SideMenuLinks>


        </SideMenu>

    );
}

export default SideMenuContainer;