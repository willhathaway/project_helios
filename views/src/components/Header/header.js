import React from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import "./header.css"
import 'bulma/css/bulma.css';

export default function Header() {
  const { isLoading, user, logout } = useAuth0();

  return (
      <nav className="navbar has-background-dark">
        <div className="container">
          <div className="navbar-menu is-active has-background-dark">
            {/* logo */}
            <div className="navbar-brand">
              <button className="navbar-item has-text-light is-primary">Helios Day Planner</button>
            </div>

            {/* menu items */}
            <div className="navbar-end">
              {/* if there is no user. show the login button */}
              {!isLoading && !user && (
                  <div></div>
              )}

              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <button className="navbar-item has-text-light">{user.name}</button>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item has-text-light"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
  );
}