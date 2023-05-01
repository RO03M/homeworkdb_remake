import { ReactNode } from "react";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const PrivateRoute = (props: { children: ReactNode }) => {
    const {
        firstLoad,
        currentUser
    } = useUser();

    if (!firstLoad) return <CircularProgress/>;
    else {
        if (currentUser) return <>{props.children}</>;
        else return <Navigate to={"/login"}></Navigate>;
    }
}

export default PrivateRoute;