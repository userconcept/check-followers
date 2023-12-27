import { NavLink, useMatch } from 'react-router-dom';

function NavItem({ className, href, children }) {
    const match = useMatch(href);

    return (
        <li className={`nav-item ${className ? className : ''} ${match ? 'nav-item_active' : ''}`}>
            <NavLink className="nav-item__link" to={href}>{children}</NavLink>
        </li>
    );
}

export default NavItem;
