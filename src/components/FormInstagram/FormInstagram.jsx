import FormItem from './../FormItem/FormItem.jsx';
import Button from './../Button/Button.jsx';

function FormInstagram() {
    return (
        <form className="form-instagram">
            <FormItem label="In development..." disabled={true} />
            <Button className="form-instagram__button" disabled={true}>Check</Button>
        </form>
    );
}

export default FormInstagram;
