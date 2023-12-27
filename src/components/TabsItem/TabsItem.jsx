import Title from './../Title/Title.jsx';
import UsersList from './../UsersList/UsersList.jsx';
import UsersItem from './../UsersItem/UsersItem.jsx';
import UsersMessage from './../UsersMessage/UsersMessage.jsx';

function TabsItem({ className, id, ariaLabelledby, title, items, loading, error }) {
    console.log('loading:', loading);
    console.log('error:', error);

    let usersMessage = 'Enter your nickname and check followers...';

    if (loading) {
        usersMessage = 'Is Loading...';
    }

    if (error) {
        usersMessage = error;
    }

    const renderItems = items.map(item =>
        <UsersItem className="users-list__users-item" key={item.id}>{item.login}</UsersItem>
    );

    return (
        <li className={`tabs-item ${className ? className : ''}`} id={id} aria-labelledby={ariaLabelledby}>
            <Title className="tabs-item__title" level="3">{title}</Title>
            {items.length > 0 ?
                <UsersList className="tabs-item__users-list">{renderItems}</UsersList>
                :
                <UsersMessage className="tabs-item__users-message" text={usersMessage} />
            }
        </li>
    );
}

export default TabsItem;
