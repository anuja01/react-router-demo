import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function NestedRouting() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/blah">About blah</Link>
                    </li>
                    <li>
                        <Link to="/about/lah">About lah</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about/:aboutId">
                        <About />
                    </Route>
                    <Route path="/topics">
                        {/* can use useRouteMatch() hook to get the url pattern
                            within Topics we have another set of routing */}
                        <Topics /> 
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    let match = useRouteMatch()
    console.log(match)
    return <h2>Home</h2>;
}

function About() {
    let match = useRouteMatch()
    console.log(match)
    let { aboutId } = useParams() // param given in <Switch><Route></></>
    console.log(aboutId)
    return <h2>About {aboutId}</h2>;
}

// separate routing within Topics component
function Topics() {
    let match = useRouteMatch();
    console.log('match: ', match)

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    {/* can use useParams() hook to get the passed parameter 
                    within the component */}
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // get the url parameter
    let { topicId } = useParams();
    console.log('topicId: ', topicId)
    return <h3>Requested topic ID: {topicId}</h3>;
}