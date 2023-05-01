import React, { ReactNode, useEffect, useState } from "react";
import { auth, firebaseApp } from "../firebase";

const useUser = () => {

    const [currentUser, setCurrentUser] = useState<null | any>(null);
    const [firstLoad, setFirstLoad] = useState<boolean>(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            setCurrentUser(user);
            setFirstLoad(true);
        });
    }, []);

    return {
        firstLoad,
        currentUser
    };
}

export default useUser;