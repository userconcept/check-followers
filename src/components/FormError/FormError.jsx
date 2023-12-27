function FormError({ className, text }) {
    return (
        <div className={`form-error ${className ? className : ''}`}>{text}</div>
    );
}

export default FormError;
