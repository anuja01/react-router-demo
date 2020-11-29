import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

export default function RoutingWithAuth() {
    return (
        <Router>
            <div>
                {/* show welcome or not logged in */}
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/protected">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute(props) {
    const {children, ...rest} = props
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // if not authenticated then move to login page, else show children
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    // NOTE:
                    // history.push(path) -> anvigate to any previous path
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
        </button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        );
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    console.log('LoginPage -> history: ', history)
    console.log('LoginPage -> location: ', location)

    let { from } = location.state || { from: { pathname: "/" } };

    console.log('LoginPage -> from: ', from)

    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Protected</h3>;
}