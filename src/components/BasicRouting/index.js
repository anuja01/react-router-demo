import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function BasicRouting() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/users'>
                        <Users />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

const About = () => (
    <div>About content</div>
)
const Users = () => (
    <div>Users content</div>
)
const Home = () => (
    <div>Home content</div>
)