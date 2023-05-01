import { Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "../screens/ChatPage";
import LoginPage from "../screens/Auth/Login";
import PrivateRoute from "./PrivateRoute";

const RoutesContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/login"}/>}/>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/chat" element={<PrivateRoute><ChatPage/></PrivateRoute>}></Route>
        </Routes>
    );
}

export default RoutesContainer;