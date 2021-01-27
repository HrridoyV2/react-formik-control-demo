import React from 'react'
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControls';
function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'option 1', value: 'option1' },
        { key: 'option 2', value: 'option2' },
        { key: 'option 3', value: 'option3' },
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: ''
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required')
    });
    const onSubmit = (values) => console.log("Form data", values)
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <FormikControl control='input'
                    type='email'
                    label='Email'
                    name='email'
                    />
                    <FormikControl control='textarea' label='Description' name='description' /><br />
                    <button  type="submit">Submit</button>
                </Form>
                <FormikControl control='select' label='Select a Topic'
                name='selectOption'
                options={dropdownOptions}
                />

            </Formik>
        </div>
    )
}

export default FormikContainer;
