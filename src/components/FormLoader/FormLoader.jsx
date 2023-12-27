function FormLoader({ className }) {
    return (
        <div className={`form-loader ${className ? className : ''}`}>Is Loading...</div>
    );
}

export default FormLoader;
