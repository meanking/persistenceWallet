import React from 'react';
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setCoinType} from "../../../store/actions/changePassword";

const CoinType = () => {
    const {coinType} = useSelector((state) => state.changePassword);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(setCoinType(parseInt(event.target.value)));
    };

    return (
        <div className="form-field radio">
            <div className="d-flex mb-3">
                <Form.Check
                    type='radio'
                    label='Coin Type 750'
                    id='type750'
                    name='type750'
                    value="750"
                    aria-label="radio 2"
                    className='mr-3'
                    onChange={handleChange}
                    checked={coinType === 750}
                />
                <Form.Check
                    type='radio'
                    label='Coin Type 118'
                    id='type118'
                    name='type118'
                    value="118"
                    aria-label="radio 1"
                    onChange={handleChange}
                    checked={coinType === 118}
                />
                {/*<p className="input-error">{error.message}</p>*/}
            </div>
        </div>
    );
};


export default CoinType;
