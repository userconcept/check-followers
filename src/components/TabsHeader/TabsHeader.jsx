function TabsHeader({ className, items, activeTab, handleClick }) {
    const renderItems = items.map(item =>
        <li className={`tabs-header__item ${activeTab === item.id ? 'tabs-header__item_active' : ''}`} key={item.id}>
            <a className="tabs-header__link" href={`#${item.tabsItemId}`} id={item.tabsLinkId} onClick={e => handleClick(e, item.id)}>{item.title}</a>
        </li>
    );

    return (
        <ul className={`tabs-header ${className ? className : ''}`}>{renderItems}</ul>
    );
}

export default TabsHeader;
