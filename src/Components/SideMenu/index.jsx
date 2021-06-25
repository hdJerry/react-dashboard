import React from 'react';

import {
    SideMenu,
    SideMenuLogo,
    SideMenuLinks,
    SideMenuLink,
    SideMenuLinkIcon,
} from './SideMenu.style'

import routes from '../../data/routes';

const SideMenuContainer = () => {

    const links = routes;

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