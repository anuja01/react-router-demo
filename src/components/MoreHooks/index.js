import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useHistory,
    useLocation
} from 'react-router-dom';
/**
 * useParams() - Provides access to search parameters in the URL
 * useRouteMatch() - Provides access to the match object. A primary use case would be to construct nested paths.
 * useLocation() - Provides access to the location prop in React Router, A primary use case for this would be to access the query params or the complete route string.
 * useHistory() - Provides access to the history prop in React Router. A primary use case would be for programmatic routing with functions, like push, replace, etc.
 * 
 */
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