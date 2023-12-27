import FormItem from './../FormItem/FormItem.jsx';
import Button from './../Button/Button.jsx';

function FormBehance() {
    return (
        <form className="form-behance">
            <FormItem label="In development..." disabled={true} />
            <Button className="form-behance__button" disabled={true}>Check</Button>
        </form>
    );
}

export default FormBehance;
