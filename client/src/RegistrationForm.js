import { Button } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

import {
  PageWrapper,
  Input
} from './Styles'

const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(40, 'Must be 40 characters or less')
    .required('Required'),
  birthDate: Yup.string()
    .required('Enter Birthdate'),
  address: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  state: Yup.string()
    .required('Required'),
  zipcode: Yup.string()
    .min(5, 'Must contain at least 5 numbers')
    .required('Required'),
  phoneNumber: Yup.string()
    .required('Required')
    .min(10, 'Must be valid phone number of 10 numbers, ex: 555-555-5555'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required')
})

const RegistrationForm = () => {
  const [ formValues, setFormValues ] = useState();


  return (
    <Formik
      initialValues={ {
        fullName: '',
        birthDate: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phoneNumber: '',
        email: ''
      } }
      validationSchema={ validationSchema }
      onSubmit={ (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
      } }
    >
      { formik => (
        <PageWrapper>
          <form onSubmit={ formik.handleSubmit }>
            <label htmlFor='fullName'>Full Name</label>
            <Input
              id='fullName'
              name='fullName'
              type='text'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.fullName }
            />
            { formik.touched.fullName && formik.errors.fullName ? (
              <div>{ formik.errors.fullName }</div>
            ) : null }

            <label htmlFor='birthDate'>Birth Date</label>
            <Input
              id='birthDate'
              name='birthDate'
              type='date'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.birthDate }
            />
            { formik.touched.birthDate && formik.errors.birthDate ? (
              <div>{ formik.errors.birthDate }</div>
            ) : null }

            <label htmlFor='address'>Street Address</label>
            <Input
              id='address'
              name='address'
              type='text'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.address }
            />
            { formik.touched.address && formik.errors.address ? (
              <div>{ formik.errors.address }</div>
            ) : null }

            <label htmlFor='city'>City</label>
            <Input
              id='city'
              name='city'
              type='text'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.city }
            />
            { formik.touched.city && formik.errors.city ? (
              <div>{ formik.errors.city }</div>
            ) : null }

            <label htmlFor='state'>State</label>
            <Input
              id='state'
              name='state'
              type='text'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.state }
            />
            { formik.touched.state && formik.errors.state ? (
              <div>{ formik.errors.state }</div>
            ) : null }

            <label htmlFor='zipcode'>Zipcode</label>
            <Input
              id='zipcode'
              name='zipcode'
              type='text'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.zipcode }
            />
            { formik.touched.zipcode && formik.errors.zipcode ? (
              <div>{ formik.errors.zipcode }</div>
            ) : null }

            <label htmlFor='phoneNumber'>Phone Number</label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              type='text'
              placeholder='608-555-5555'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.phoneNumber }
            />
            { formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{ formik.errors.phoneNumber }</div>
            ) : null }

            <label htmlFor='email'>Full Name</label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='example@ex.com'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.email }
            />
            { formik.touched.email && formik.errors.email ? (
              <div>{ formik.errors.email }</div>
            ) : null }

            <Button variant='contained' type="submit">Submit</Button>
          </form>
        </PageWrapper>
      ) }
    </Formik>
  )
}

export default RegistrationForm;