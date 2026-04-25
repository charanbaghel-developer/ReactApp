import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();   // ✅ VERY IMPORTANT
  const [isLogin, setIsLogin] = useState(true);
  const[isAdmin,setIsAdmin]=useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // hide error when typing
    setErrors({ ...errors, [name]: "" });
  };

  // validation logic
  const validate = () => {
    let temp = {};

    if (isLogin) {
      if (!form.username) temp.username = "Username is required";
      if (!form.password) temp.password = "Password is required";
    } else {
      if (!form.name) temp.name = "Name is required";
      if (!form.email) temp.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(form.email))
        temp.email = "Invalid email format";

      if (!form.mobile) temp.mobile = "Mobile number is required";
      else if (!/^[6-9]\d{9}$/.test(form.mobile))
        temp.mobile = "Invalid mobile number";

      if (!form.password) temp.password = "Password is required";
      else if (form.password.length < 6)
        temp.password = "Minimum 6 characters required";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    if (isLogin) {
       const role = isAdmin ? "admin" : "user";
       localStorage.setItem("role",role);
      console.log("LOGIN DATA", {
        username: form.username,
        password: form.password
        
      });
      // redirect
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/Home");
    }
    } else {
      console.log("REGISTER DATA", form);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {/* REGISTER ONLY */}
        {!isLogin && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              name="email"
              placeholder="Email ID"
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </>
        )}

        {/* LOGIN ONLY */}
        {isLogin && (
          <>
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          
            {errors.username && (
              <p className="error">{errors.username}</p>
            )}
          </>
        )}

        {/* COMMON */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
 <div className="role-row">
  <label className="checkbox-label">
    <input type="checkbox" checked={!isAdmin} onChange={()=>setIsAdmin(false)} /> User
  </label>

  <label className="checkbox-label">
    <input type="checkbox" checked={isAdmin} onChange={()=>setIsAdmin(true)} /> Admin
  </label>
</div>

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="toggle-text">
          {isLogin ? "New user?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
