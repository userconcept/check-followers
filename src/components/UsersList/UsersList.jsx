function UsersList({ className, children }) {
    return (
        <ul className={`users-list ${className ? className : ''}`}>{children}</ul>
    );
}

export default UsersList;
