import * as Yup from 'yup';

    const emailRegex =  "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/



export const validation = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(4, 'Must be 4 characters or above')
        .required('FirstName missing'),

    lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(4, 'Must be 4 characters or above')
        .required('LastName missing'),
        
    email: Yup.string()
        .matches(emailRegex, "Invalid email address")
        .required('Please enter your email'),

    password: Yup.string()
        .matches(passwordRegex, "Password must minimum eight characters")
        .required('Password must Required'),
  })