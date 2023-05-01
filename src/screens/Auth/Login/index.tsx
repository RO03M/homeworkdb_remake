import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../../routes/AuthProvider";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import useUser from "../../../hooks/useUser";
import { Navigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { currentUser } = useUser();

    const login = async () => {
        try {
            const teste = await signInWithEmailAndPassword(auth, email, password);
            
        } catch(error) {
            if (error instanceof FirebaseError) {
                console.log(error.code);
            }
        }
    }

    if (currentUser) return <Navigate to={"/chat"}/>

    return (
        <Box>
            <TextField
                name={"email"}
                placeholder={"E-mail"}
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <TextField
                name={"password"}
                type={"password"}
                placeholder={"Senha"}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Button
                onClick={login}
                variant={"contained"}
            >
                Entrar
            </Button>
        </Box>
    );
}

export default LoginPage;