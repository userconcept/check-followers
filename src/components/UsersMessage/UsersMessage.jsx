function UsersMessage({ className, text }) {
    return (
        <div className={`users-message ${className ? className : ''}`}>{text}</div>
    );
}

export default UsersMessage;
