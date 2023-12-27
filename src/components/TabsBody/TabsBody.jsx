import { useSelector } from 'react-redux';

import TabsItem from './../TabsItem/TabsItem.jsx';

function TabsBody({ className, items, activeTab }) {
    const { differenceFollowers, loading: loadingFollowers, error: errorFollowers } = useSelector(state => state.differenceFollowers);
    const { differenceFollowing, loading: loadingFollowing, error: errorFollowing } = useSelector(state => state.differenceFollowing);

    return (
        <ul className={`tabs-body ${className ? className : ''}`}>
            <TabsItem
                className={`tabs-body__tabs-item ${activeTab === items[0].id ? 'tabs-body__tabs-item_active' : ''}`}
                id={items[0].tabsItemId}
                ariaLabelledby={items[0].tabsLinkId}
                title={items[0].title}
                items={differenceFollowers}
                loading={loadingFollowers}
                error={errorFollowers}
            />
            <TabsItem
                className={`tabs-body__tabs-item ${activeTab === items[1].id ? 'tabs-body__tabs-item_active' : ''}`}
                id={items[1].tabsItemId}
                ariaLabelledby={items[1].tabsLinkId}
                title={items[1].title}
                items={differenceFollowing}
                loading={loadingFollowing}
                error={errorFollowing}
            />
        </ul>
    );
}

export default TabsBody;
