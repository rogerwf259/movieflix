import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const RouteWithSubRoutes = (route) => (
    <Route exact path={route.path} render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}/>
)

const Dashboard = ({ routes }) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><NavLink to="/dashboard/popular">Popular</NavLink></li>
                <li><NavLink to="/dashboard/categories">Categories</NavLink></li>
                <li><NavLink to="/dashboard/watchlist">Watchlist</NavLink></li>
            </ul>
            {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
        </div>
    );
}

export default Dashboard;