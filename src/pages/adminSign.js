import React from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import "animate.css";
import { useState, useEffect } from "react";
import { Outlet, Link, Navigate, useLoaderData } from "react-router-dom";
import {
  BoxBackground,
  UserInput,
  PassInput,
  ButtonRegister,
  Title,
  ErrorMessage
} from "../styles/adminPageStyles";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(false);

  async function handlerSubmit(e) {
    setStatus("submitting");
    const result = await submitForm();
    setError("Usuário inválido.");
    setStatus("typing");
  }

  function userInputHandler(e) {
    setError(null);
    setUsername(e.target.value);
  }

  function passInputHandler(e) {
    setError(null);
    setPassword(e.target.value);
  }
  useEffect(() => {
    if (token) {
      localStorage.setItem("PAINEL_ADMIN", JSON.stringify(token));
    }
  }, [token]);

  function submitForm() {
    const storage = { token: "1234" };

    return new Promise((resolve, result) => {
      setTimeout(() => {
        setToken(storage);
        setAuth(true);
        resolve("");
      }, 1500);
    });
  }
  return (
    <>
      {auth === true ? (
        <Navigate to="dashboard" />
      ) : (
        <BoxBackground>
          <Title>PAINEL ADMIN </Title>
          <Paper
            className="animate__animated animate__bounce animate__slow"
            elevation="0"
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              padding: 2,
              width: 400,
              height: 260,
              borderRadius: 2
            }}
          >
            <p>
              <b>Seja Bem-Vindo</b>, Entrar
            </p>
            <UserInput
              value={username}
              onChange={userInputHandler}
              placeholder="Usuario"
            />
            <PassInput
              value={password}
              onChange={passInputHandler}
              placeholder="Senha"
            />
            <ButtonRegister
              disabled={username.length === 0 || password.length === 0}
              onClick={handlerSubmit}
            >
              {status === "submitting" ? "VERIFICANDO" : "ENTRAR"}
            </ButtonRegister>
            {error !== null && <ErrorMessage>{error}</ErrorMessage>}
          </Paper>
          <Box sx={{ position: "absolute", bottom: 0, fontSize: 10 }}>
            @2022 PAINEL ADMIN
          </Box>
        </BoxBackground>
      )}
    </>
  );
}
