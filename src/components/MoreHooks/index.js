import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useHistory,
    useLocation
} from 'react-router-dom';

export const MoreHooks = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <BackButton />
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    // can use useLocation() hook to send data to GA whenever location changes
    let location = useLocation()
    console.log('location: ', location)
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

// useHistory hook
function BackButton() {
    let history = useHistory()
    return (
        <input
            type='button'
            value='Go Back'
            onClick={() => history.goBack()}
        />
    )
}