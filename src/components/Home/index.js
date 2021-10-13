import { withRouter } from 'react-router-dom'

import Header from '../Header';

import './index.css';

function Home({ history }) {

    const onAddUserClick = () => {
        history.push('/addUser');
    }

    const onSeeUsersClick = () => {
        history.push('/allUsers');
    }

    return (
        <div className='home-container'>
            <Header />
            <div className='home-title'>What would you like to do?</div>
            <div className='home-buttons-container'>
                <button onClick={() => onAddUserClick()}>Add a user</button>
                <button onClick={() => onSeeUsersClick()}>See all users</button>
            </div>
        </div>
    );
}

export default withRouter(Home);
