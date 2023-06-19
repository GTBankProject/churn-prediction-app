import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBtn = (
    <Link className="to-login" to="/dashboard">
      <input className="login" type="submit" value="Login" />
    </Link>
  );

  return (
    <>
      <div className="flex flex-row flex-direction">
        <div className="basis-2/3 background"></div>
        <div className="basis-1/3 ">
          <div className="login-container">
            <div className="formstyle flex-col">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/1200px-GTBank_logo.svg.png"
                alt="Paris"
                className="w-55 h-20"
              />
              <form action="">
                {/* username */}
                <div className="">
                  <div>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                {/* password */}
                <div>
                  <div>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* login-btn */}
                <div>{loginBtn}</div>
                {/* password reset */}
                <div className="reset">Forgot Password?</div>
                {/* create new account */}
                <div className="new-user">GTBank STAFF</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
