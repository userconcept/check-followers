function Label({ className, htmlFor, children }) {
    return (
        <label className={`label ${className ? className : ''}`} htmlFor={htmlFor}>{children}</label>
    );
}

export default Label;
