import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';
import AddUser from '../components/AddUser';
import AllUSers from '../components/AllUsers';

export const Routes = () => (
    <Router>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/addUser'>
            <AddUser />
        </Route>
        <Route exact path='/allUsers'>
            <AllUSers />
        </Route>
    </Router>
)