import React from "react";
import { withRouter } from "react-router";

class Location extends React.Component {
    render() {
        const { match, location, history } = this.props;

        return <div>You are now at {location.pathname}</div>;
    }
}

const WithRouter = withRouter(ShowTheLocation);