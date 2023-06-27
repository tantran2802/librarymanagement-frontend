import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/home',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/customer',
        title: 'Customer',
    },
    {
        id: 3,
        icon: ProductIcon,
        path: '/customers',
        title: 'Customer',
    },
    {
        id: 4,
        icon: ShippingIcon,
        path: '/bookservice',
        title: 'Books',
    },
    {
        id: 5,
        icon: ShippingIcon,
        path: '/books',
        title: 'Books',
    },
    {
        id: 6,
        icon: UserIcon,
        path: '/borrownote',
        title: 'Borrow Note',
    },
    {
        id: 7,
        icon: UserIcon,
        path: '/response',
        title: 'Response',
    }
]

export default sidebar_menu;