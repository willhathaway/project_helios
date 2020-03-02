import React from "react";

function Form({ handleUsernameChange, handlePasswordChange, handleLogin, username, password }) {
    return (
        <div>
            <h1 style={{ color: "white" }} className="text-center">Login</h1>
            <form>
                <div>
                    <label style={{ color: "white" }}>Username:</label>
                    <input
                        className="form-control"
                        id="username"
                        type="text"
                        value={username}
                        placeholder="username"
                        name="username"
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div>
                    <label style={{ color: "white" }}>Password:</label>
                    <input
                        className="form-control"
                        id="password"
                        type="text"
                        value={password}
                        placeholder="password"
                        name="password"
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="btn btn-lg btn-danger float-right"
                    >
                        Login
        </button>
                </div>
            </form>
        </div>
    );
}

export default Form;