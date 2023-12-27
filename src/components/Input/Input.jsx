function Input({ className, id, name, onChange, disabled }) {
    return (
        <input className={`input ${className ? className : ''}`} type="text" id={id} name={name} onChange={onChange} disabled={disabled} />
    );
}

export default Input;
