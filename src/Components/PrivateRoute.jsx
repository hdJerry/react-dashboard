import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, token, ...otherProps }) => {

    console.log();

    return (
        <Route
            {...otherProps}
            render={props => (
                    (
                     token
                        ?
                        <Component {...props} />
                        :
                        <Redirect to={otherProps.redirectTo ? otherProps.redirectTo : '/signin'} />
                    )
            )}
        />
    )

}

export default PrivateRoute;