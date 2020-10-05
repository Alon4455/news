import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/User";
import Admin from "./components/Admin";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/user">user</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}
export default withAuthenticator(App);
