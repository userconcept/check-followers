import NavItem from './../NavItem/NavItem.jsx';

import { navItems } from './../../data/navItems.js';

function NavList({ className }) {
    const renderItems = navItems.map(item =>
        <NavItem className="nav-list__nav-item" href={item.href} key={item.id}>{item.text}</NavItem>
    );

    return (
        <ul className={`nav-list ${className ? className : ''}`}>{renderItems}</ul>
    );
}

export default NavList;
