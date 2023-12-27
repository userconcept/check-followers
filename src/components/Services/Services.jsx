import { Outlet, useLocation } from 'react-router-dom';

import Title from './../Title/Title.jsx';

import { navItems } from './../../data/navItems.js';

function Services() {
    const location = useLocation();
    const { text } = navItems.find(item => item.href === location.pathname) || navItems[0];

    return (
        <section className="services">
            <Title className="services__title" level="2">{text}</Title>
            <Outlet />
        </section>
    );
}

export default Services;
