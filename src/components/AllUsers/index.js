import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.css';

import Header from '../Header';

import { fetchAllUsers } from './actions';

function AllUsers({ fetchAllUsers, loading, allUsers, apiError }) {

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const renderUsers = () => {
        return allUsers.map((user) => <tr><td>{user.firstName} {user.lastName}</td><td>{user.email}</td><td>{user.dateOfBirth}</td></tr>);
    }

    return (
        <div className='all-users-container'>
            <Header />
            <div className='all-users-title'>List of all the users.</div>
            {loading ? <div>Loading...</div> :
                apiError ? <div>An error occurred. Please try after some time.</div> :
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Email address</th>
                            <th>Date of birth</th>
                        </thead>
                        <tbody>
                            {renderUsers()}
                        </tbody>
                    </table>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.allUsersReducer.loading,
        allUsers: state.allUsersReducer.allUsers,
        apiError: state.allUsersReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllUsers))
