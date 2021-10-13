import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.css';

import Header from '../Header';

import { addNewUser } from './actions';

function AddUser({ addNewUser, loading, apiError, errorMessage, success }) {
    const [firstNameInput, setFirstName] = useState('');
    const [lastNameInput, setLastName] = useState('');
    const [emailInput, setEmail] = useState('');
    const [dobInput, setDOB] = useState('');
    const [hasValidationError, setValidationError] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    useEffect(() => {
        setShowSuccessMsg(success);
    }, [success]);

    const onSubmit = () => {
        if (isFormValid()) {
            let userObject = {
                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput,
                dateOfBirth: new Date(dobInput).toISOString()
            };
            setValidationError(false);
            addNewUser(userObject);
        } else {
            setValidationError(true);
        }
    }

    const isFormValid = () => {
        return !!firstNameInput && !!lastNameInput && !!emailInput && !!dobInput && isEmailValid(emailInput);
    }

    const isEmailValid = (email) => {
        let regexForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexForEmail.test(email);
    }

    return (
        <div className='add-user-container'>
            <Header />
            <div className='add-user-title'>Add New User</div>
            <input
                type='text'
                value={firstNameInput}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='Enter First Name'
            />
            <input
                type='text'
                value={lastNameInput}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Enter Last Name'
            />
            <input
                type='email'
                value={emailInput}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email address'
            />
            <input
                type='date'
                value={dobInput}
                onChange={(e) => setDOB(e.target.value)}
                placeholder='Enter email address'
            />
            <button onClick={onSubmit}>Submit</button>
            {hasValidationError && <div className='error-msg'>Please fill all the fields with correct information.</div>}
            {apiError && <div className='error-msg'>{errorMessage}</div>}
            {showSuccessMsg && <div className='success-msg'>User added successfully.</div>}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        loading: state.addUserReducer.loading,
        apiError: state.addUserReducer.error,
        errorMessage: state.addUserReducer.errorMessage,
        success: state.addUserReducer.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (payload) => dispatch(addNewUser(payload)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUser))
