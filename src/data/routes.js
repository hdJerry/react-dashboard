import {
    Dashboard as DashboardIcon,
    Fingerprint,
    Shuffle,
    Chat,
    MonetizationOn,
} from '@material-ui/icons';


import Dashboard from '../pages/dashboard';



const routes = [
    {
        icon: DashboardIcon,
        link: 'Dashboard',
        to: '/dashboard',
        component: Dashboard,
    },
    {
        icon: Chat,
        link: 'Borrowers',
        to: '/borrowers',
        component: Dashboard,
    },
    {
        icon: DashboardIcon,
        link: 'Transactions',
        to: '/transactions',
        component: Dashboard,
    },
    {
        icon: Shuffle,
        link: 'Loans',
        to: '/loans',
        component: Dashboard,
    },
    {
        icon: DashboardIcon,
        link: 'Repayments',
        to: '/repayments',
        component: Dashboard,
    },
    {
        icon: DashboardIcon,
        link: 'Collateral register',
        to: '/collateral-register',
        component: Dashboard,
    },
    {
        icon: Fingerprint,
        link: 'Weekly /Monthly Calendars',
        to: '/calendars',
        component: Dashboard,
    },
    {
        icon: DashboardIcon,
        link: 'Collection sheets',
        to: '/transactions',
        component: Dashboard,
    },
    {
        icon: MonetizationOn,
        link: 'Savings',
        to: '/loans',
        component: Dashboard,
    },
    {
        icon: DashboardIcon,
        link: 'Investors',
        to: '/collateral-register',
        component: Dashboard,
    },
    {
        icon: Fingerprint,
        link: 'Account Managers',
        to: '/repayments',
        component: Dashboard,
    },
    {
        icon: Fingerprint,
        link: 'Varification Managers',
        to: '/calendars',
        component: Dashboard,
    },
];

export default routes;