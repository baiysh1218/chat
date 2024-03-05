import { useEffect } from "react";
import { AuthWrapper } from "../../shared/AuthWrapper/AuthWrapper";
import { Button } from "../../shared/Button/Button";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { Input } from "../../shared/Input/Input";
import { Label } from "../../shared/Label/Label";
import { Title } from "../../shared/Title/Title";
import { Wrapper } from "../../shared/Wrapper/Wrapper";
import React, { FormEvent, useState } from "react";
import { ButtonWrapper } from "../../shared/ButtonWrapper/ButtonWrapper";
import { ReactComponent as Google } from "../../assets/svg/google.svg";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import { ReactComponent as EyeClose } from "../../assets/svg/eyeClose.svg";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import {
  login,
  register,
  signInWithGoogle,
} from "../../app/redux/action/AuthActions";
import { auth, googleProvider } from "../../fire";
import { Error } from "../../shared/Error/Error";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [status, setStatus] = useState(false);
  const [passwordType, setPasswordType] = useState<string>("password");
  const [confirmPasswordType, setConfirmPasswordType] =
    useState<string>("password");
  const [check, setCheck] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordComparison, setPasswordComparison] = useState<boolean>(false);

  const { loading, error, authStatus } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const checkPasswordComparison = () => {
    if (password === passwordConfirm) {
      setPasswordComparison(true);
    } else {
      setPasswordComparison(false);
    }
  };

  const togglePasswordVisibility = (
    type: string,
    setType: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setType(type === "password" ? "text" : "password");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    checkPasswordComparison();

    if (passwordComparison) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    const formObject: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const { email, password } = formObject;

    if (status) {
      dispatch(login({ auth, email, password }));
    } else {
      dispatch(register({ auth, email, password }));
    }

    navigate(-1);
  };

  const handleClickWidthGoogle = () => {
    dispatch(signInWithGoogle({ auth, googleProvider }));
  };

  useEffect(() => {
    checkPasswordComparison();
  }, []);
  return (
    <AuthWrapper onSubmit={handleSubmit}>
      <Title>{status ? "Sign in" : "Sign up"}</Title>

      {error && <Error>{error.name}</Error>}

      {!passwordComparison && (
        <Error>Password error occurred (password may be repeated)</Error>
      )}

      {authStatus !== "pending" && <Label>{authStatus}</Label>}

      <Label style={{ alignSelf: "flex-start" }}>Email</Label>
      <Input name="email" required type="email" placeholder="Enter email" />
      <Label style={{ alignSelf: "flex-start" }}>Password</Label>
      <Wrapper $inputs>
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          name="password"
          required
          type={passwordType}
          placeholder="Enter password"
        />
        {passwordType === "password" ? (
          <Eye
            style={{ transform: "scale(0.5)" }}
            onClick={() =>
              togglePasswordVisibility(passwordType, setPasswordType)
            }
          />
        ) : (
          <EyeClose
            style={{ transform: "scale(1)", top: "7px", right: "-10px" }}
            onClick={() =>
              togglePasswordVisibility(passwordType, setPasswordType)
            }
          />
        )}
      </Wrapper>
      <Label style={{ alignSelf: "flex-start" }}>Confirm password</Label>
      <Wrapper $inputs>
        <Input
          onChange={e => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          name="confirmPassword"
          required
          type={confirmPasswordType}
          placeholder="Confirm password"
        />
        {confirmPasswordType === "password" ? (
          <Eye
            style={{ transform: "scale(0.5)" }}
            onClick={() =>
              togglePasswordVisibility(
                confirmPasswordType,
                setConfirmPasswordType
              )
            }
          />
        ) : (
          <EyeClose
            style={{ transform: "scale(1)", top: "7px", right: "-10px" }}
            onClick={() =>
              togglePasswordVisibility(
                confirmPasswordType,
                setConfirmPasswordType
              )
            }
          />
        )}
      </Wrapper>
      <Wrapper style={{ marginBottom: "32px" }}>
        <Checkbox
          onChange={() => setCheck(!check)}
          id="terms"
          name="terms"
          type="checkbox"
        />
        <Label htmlFor="terms">
          By clicking the button, you agree to the terms and conditions of this
          site
        </Label>
      </Wrapper>
      <Wrapper style={{ marginBottom: "32px", display: "flex", gap: "20px" }}>
        <ButtonWrapper type="button" onClick={handleClickWidthGoogle}>
          <Google />
        </ButtonWrapper>
      </Wrapper>
      <Button disabled={!check || loading} type="submit">
        {status ? "Sign in" : "Sign up"}
      </Button>
      <Label>
        {!status ? "Already have an account? " : "Don't have an account yet? "}
        <a
          onClick={() => setStatus(!status)}
          style={{
            marginTop: "10px",
            color: "#0077ee",
            textDecoration: "underline",
            cursor: "pointer",
          }}>
          {!status ? "Sign in" : "Sign up"}
        </a>
      </Label>
    </AuthWrapper>
  );
};

export default Auth;
