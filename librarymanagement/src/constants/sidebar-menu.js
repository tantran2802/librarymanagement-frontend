import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: ProductIcon,
        path: '/orders',
        title: 'Customer',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/products',
        title: 'Books',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/profile',
        title: 'Borrow Note',
    },
    {
        id: 5,
        icon: UserIcon,
        path: '/profile',
        title: 'Response',
    }
]

export default sidebar_menu;