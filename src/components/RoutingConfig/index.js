import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const Sandwiches = () => {
    return (
        <div>Sandwitches</div>
    )
}
// Nested routing example using a routing config -> simillar functionality as NestedRouting
const Tacos = ({ routes }) => {
    return (
        <div>
          <h2>Tacos</h2>
          <ul>
            <li>
              <Link to="/tacos/bus">Bus</Link>
            </li>
            <li>
              <Link to="/tacos/cart">Cart</Link>
            </li>
          </ul>
    
          <Switch>
            {routes.map((route, i) => (
              <RouteTo key={i} {...route} />
            ))}
          </Switch>
        </div>
      );
}

const Bus = () => {
    return (
        <div>Bus</div>
    )
}

const Cart = () => {
    return (
        <div>Cart</div>
    )
}

// Routing config is used inside the <Switch>
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: '/tacos/bus',
                component: Bus
            },
            {
                path: '/tacos/cart',
                component: Cart
            }
        ]
    }
];

export default function RoutingConfig() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>
                <Switch>
                    {
                        routes.map((route, i) => (
                            <RouteTo key={i} {...route} />
                        ))
                    }
                </Switch>
            </div>
        </Router>
    )
}

const RouteTo = (route) => {
    console.log('route: ', route)
    return (
        <Route
            path={route.path}
        >
            <route.component routes={route.routes} />
        </Route>
    )
}