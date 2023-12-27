function Text({ className, children }) {
    return (
        <p className={`text ${className ? className : ''}`}>{children}</p>
    );
}

export default Text;
