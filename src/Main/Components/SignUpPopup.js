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

export default function SignUpPopup(props) {
  const { setShowSignUpPopup, setIsLoggedin } = useContext(MainContext);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowSignUpPopup);
  const [showClose, setShowClose] = useState(false);
  const handleClick = () => setShowSignUpPopup(false);
  const handleMouseOver = () => setShowClose(true);
  const handleMouseLeave = () => setShowClose(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    setErrors({});
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password1, password2 };
    fetch("/api/v1/users/auth/register/", {
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
          setShowSignUpPopup(false);
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
        <p className="popup-title">Sign up</p>
        <p className="popup-details">
          Provide a username, email adress and a password to save your data
        </p>
        <form className="inputs" onSubmit={onSubmit}>
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: !!!errors.username,
            }}
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            error={!!errors.username}
            helperText={!!errors.username? "Invalid username" : null}
          />
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: !!!errors.email,
            }}
            type="email"
            name="email"
            placeholder="Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: !!!errors.password1,
            }}
            type="password"
            name="password"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
            error={!!errors.password1}
            helperText={errors.password1}
          />
          <TextField
            className="text-input"
            InputProps={{
              className: "input-input",
              disableUnderline: !!!errors.non_field_errors,
            }}
            type="password"
            name="pwconfirm"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            error={!!errors.non_field_errors}
            helperText={errors.non_field_errors}
          />
          <input type="submit" className="signup-btn" value="Sign up" />
        </form>
      </div>
    </div>
  );
}
