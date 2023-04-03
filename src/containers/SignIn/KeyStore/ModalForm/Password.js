import React, {useState} from 'react';
import InputText from "../../../../components/InputText";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {setTxKeyStorePassword} from "../../../../store/actions/transactions/keyStore";
import {PasswordValidation, ValidateSpace} from "../../../../utils/validations";
import Icon from "../../../../components/Icon";

const Password = () => {
    const {t} = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const password = useSelector((state) => state.keyStore.password);
    const dispatch = useDispatch();

    const onChange = (evt) => {
        dispatch(setTxKeyStorePassword({
            value: evt.target.value,
            error: PasswordValidation(evt.target.value)
        }));
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="form-field password-field">
                <p className="label info">{t("PASSWORD")}</p>
                <div className="password-field-container">
                    <InputText
                        className="form-control"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required={true}
                        error={password.error}
                        onKeyPress={ValidateSpace}
                        placeholder={t("ENTER_PASSWORD")}
                        autofocus={false}
                        onChange={onChange}
                        autoComplete={"new-password"}
                    />
                    <span className="password-icon-section" onClick={handleShowPassword}
                    >
                        <Icon
                            viewClass="password-icon"
                            icon={showPassword ? "show-password" : "hide-password"}/>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Password;
