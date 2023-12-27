import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProfile } from './../../asyncActions/fetchProfile.js';

import FormItem from './../FormItem/FormItem.jsx';
import FormLoader from './../FormLoader/FormLoader.jsx';
import FormError from './../FormError/FormError.jsx';
import Button from './../Button/Button.jsx';

function FormGitHub() {
    const [nickname, setNickname] = useState('');

    const {loading, error} = useSelector(state => state.network);

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(fetchProfile(nickname));
    }

    return (
        <form className="form-github" onSubmit={handleSubmit}>
            <FormItem label="Nickname" onChange={e => setNickname(e.target.value)} />
            {loading && <FormLoader className="form-github__form-loader" />}
            {error && <FormError className="form-github__form-error" text={error.message} />}
            <Button className="form-github__button">Check</Button>
        </form>
    );
}

export default FormGitHub;
