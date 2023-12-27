import { useState } from 'react';

import Title from './../Title/Title.jsx';
import TabsHeader from './../TabsHeader/TabsHeader.jsx';
import TabsBody from './../TabsBody/TabsBody.jsx';

import { tabsItems } from './../../data/tabsItems.js';

function Users() {
    const [activeId, setActiveId] = useState(tabsItems[0].id);

    function handleClick(e, id) {
        e.preventDefault();
        setActiveId(id);
    }

    return (
        <section className="users">
            <Title className="users__title" level="2">Users</Title>
            <TabsHeader className="users__tabs-header" items={tabsItems} activeTab={activeId} handleClick={handleClick} />
            <TabsBody className="users__tabs-body" items={tabsItems} activeTab={activeId} />
        </section>
    );
}

export default Users;
