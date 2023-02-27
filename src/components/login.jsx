import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let handleSubmit = ()=>{

    }
    return (
        <div className="Login container">
            <div className="card mt-5 px-5">
                <div className="card-body">
                    <h1 className="text-center">Login</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group px-5">
                            <div className="email my-4">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="email address"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="password my-4">
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="enter password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="loginButton my-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="registerButton my-4">
                                <p>Are you a new user?</p>
                                <Link
                                    to="/signup"
                                    className="btn btn-outline-primary px-5"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;