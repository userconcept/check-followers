function UsersItem({ className, children }) {
    return (
        <li className={`users-item ${className ? className : ''}`}>{children}</li>
    );
}

export default UsersItem;
