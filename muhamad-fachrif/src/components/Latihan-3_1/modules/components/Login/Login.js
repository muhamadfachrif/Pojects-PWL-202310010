import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "admin@admin.com" && password === "admin") {
      setIsLoggedIn(true);
      <Navigate to='/home' replace={true} />
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Email atau password salah");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" replace={true} />;
    // return <div>Anda berhasil login</div>;
  }

  return (
    <div class="container mt-5 w-25">
      <form onSubmit={handleLogin}>
        <div class="form-group my-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            class="form-control"
            type="email"
            placeholder="Email here"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div class="form-grou my-3">
          <label for="exampleInputPassword1">Password</label>
          <input class="form-control"
            type="password"
            placeholder="Password here"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div class="row text-center">
          {error && <div className="error">{error}</div>}
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-outline-success w-100">Submit</button>
        </div>
      </form>
    </div>

  );
}

export default App;
