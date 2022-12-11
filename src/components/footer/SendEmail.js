import React, {useState} from 'react';
import {footerContent, translations} from "../../utils/config";

function SendEmail() {
    const {
        sendEmail: {title, inputPlaceholder}
    } = footerContent;

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const onHandlerEmailSend = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        setError('');

        if (email && regExp.test(email)) {
            alert(translations.SUCCESS);
            setEmail('');
            setError('');
            return false;
        } if(email && !regExp.test(email)) {
            setError(translations.ERROR);
        } else {
            setError(translations.EMPTY_EMAIL);
        }
    }

    const onHandlerEmailInput = (e) => {
        setError('');
        setEmail(e.target.value);
    }

    return (
        <div className="send_email_box">
            {title && <h3 className="send_email_box-title">{title}</h3>}
            <form action="">
                <input type="email"
                       required
                       placeholder={inputPlaceholder}
                       onChange={onHandlerEmailInput}
                       value={email}/>
                <button type="submit" onClick={onHandlerEmailSend} className="btn btn_send_email"></button>
                {error && <div className="send_email_error">*{error}</div>}
            </form>
        </div>
    );
}

export default SendEmail;