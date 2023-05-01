import React, { ReactNode, useEffect, useState } from "react";
import { auth, firebaseApp } from "../firebase";

export const AuthContext = React.createContext(null);

const AuthProvider = (props: { children: ReactNode }) => {

    const [currentUser, setCurrentUser] = useState<null | any>(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={currentUser}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;