//This file is not in use.
// Error occurs cuz react router v6 when tried to "Create a component to protect React Router paths",https://auth0.com/blog/complete-guide-to-react-user-authentication/#Protecting-Routes
//  tried these two solutions, didn't work. 
// https://community.auth0.com/t/implementing-auth0-protected-routes-using-react-router-v6/75667/3
// https://developer.auth0.com/resources/guides/spa/react/basic-authentication#add-route-guards-to-react


import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Route } from "react-router-dom";
import AuthLoading from '../components/auth-loading';

export const ProtectedRoute = ({ component, ...args }) => (
    <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: () => (
                <div>
                    <AuthLoading />
                </div>
            ),
        })}
        {...args}
    />
);