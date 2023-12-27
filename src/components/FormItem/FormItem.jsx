import Label from './../Label/Label.jsx';
import Input from './../Input/Input.jsx';

function FormItem({ label, onChange, disabled }) {
    return (
        <div className="form-item">
            <Label className="form-item__label" htmlFor="f-service-nickname">{label}</Label>
            <Input className="form-item__input" id="f-service-nickname" name="f-service-nickname" onChange={onChange} disabled={disabled} />
        </div>
    );
}

export default FormItem;
