import React, { useRef, useEffect, useContext, useState } from "react";
import disableScroll from "disable-scroll";
import { MainContext } from "../Context/MainContext";
import TextField from "@material-ui/core/TextField";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setShow) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        disableScroll.off();
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShow]);
}

/**
 * Component that alerts if you click outside of it
 */

export default function SignInPopup(props) {
  const { setShowSignInPopup, setIsLoggedin, userTools, /*setUserTools */} = useContext(MainContext);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowSignInPopup);
  const [showClose, setShowClose] = useState(false);
  const handleClick = () => setShowSignInPopup(false);
  const handleMouseOver = () => setShowClose(true);
  const handleMouseLeave = () => setShowClose(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password, userTools };
    fetch("/api/v1/users/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("token", data.key);
          setShowSignInPopup(false);
          setIsLoggedin(true);
        } else {
          localStorage.clear();
          setErrors(data);
        }
      });
  };
  return (
    <div className="signup-background">
      <div
        className="signup-popup"
        ref={wrapperRef}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {showClose && (
          <div className="close-popup" onClick={handleClick}>
            x
          </div>
        )}
        <p className="popup-title">Sign in</p>
        <p className="popup-details">
          Provide your username, email adress and password to log in
        </p>
        <form className="inputs" onSubmit={onSubmit}>
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: true,
            }}
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: true,
            }}
            type="email"
            name="email"
            placeholder="Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: true,
            }}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" className="signup-btn signin-btn" value="Sign in" />
          <div className="signin-error"><p>{errors.non_field_errors}</p></div>
        </form>
      </div>
    </div>
  );
}
