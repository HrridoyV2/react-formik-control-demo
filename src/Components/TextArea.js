import { ErrorMessage, Field } from 'formik';
import React from 'react'

function TextArea(props) {
    const { label, name, ...rest } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextArea} />
        </div>
    )
}

export default TextArea;
