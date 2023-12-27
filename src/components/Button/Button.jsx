function Button({ className, children, disabled }) {
    return (
        <button className={`button ${className ? className : ''}`} disabled={disabled}>{children}</button>
    );
}

export default Button;
