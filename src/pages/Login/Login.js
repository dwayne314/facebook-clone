import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import facebookLogoSrc from "../../assets/facebook-logo.png";
import facebookTextLogoSrc from "../../assets/facebook-text-logo.svg";
import "./Login.css";

function Login() {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  function login() {
    signInWithGoogle();
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="login">
      <div className="login__logo-header">
        <img src={facebookLogoSrc} alt="facebook logo" />
        <img
          id="login__text-logo"
          src={facebookTextLogoSrc}
          alt="facebook text logo"
        />
      </div>
      <div>
        <button className="login__action-btn bolded" onClick={login}>
          Signin With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
