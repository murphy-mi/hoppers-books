import React, { useState } from "react";
import styled from "styled-components";

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;

const Wrapper = styled.div`
  color: red;
  background-color: mistyrose;
  border-radius: 6px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const Alert = styled.span`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
`;

function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        // fetch("/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         password: password,
        //         password_confirmation: passwordConfirmation,
        //         admin: false
        //     }),
        // }).then((r) => {
        //     setIsLoading(false);
        //     if (r.ok) {
        //         r.json().then((user) => onLogin(user));
        //     } else {
        //         r.json().then((err) => setErrors(err.errors));
        //     }
        // });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
            </FormField>
            <FormField>
                <Label htmlFor="password">Password Confirmation</Label>
                <Input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
            </FormField>
            <FormField>
                <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            </FormField>
            <FormField>
                {errors.map((err) => (
                    <Wrapper key={err}>
                        <Alert>!</Alert>
                        <Message>{err}</Message>
                    </Wrapper>
                ))}
            </FormField>
        </form>
    );
}

export default SignUpForm;