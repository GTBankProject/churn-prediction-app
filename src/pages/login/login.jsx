import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard", { replace: true });
    } else {
      alert("wrong credentials");
    }
  };

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
                      autoComplete="false"
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
                      autoComplete="false"
                    />
                  </div>
                </div>
                {/* login-btn */}
                <button className="login" type="button" onClick={handleSubmit}>
                  Submit
                </button>
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
