import { AppBar, Toolbar, Typography } from "@mui/material";
import useUser from "../../hooks/useUser";
import AvatarMenu from "./AvatarMenu";

const NavBar = () => {

    const {
        currentUser
    } = useUser();

    return (
        <>
            <Toolbar/>
            <AppBar
                component={"nav"}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                        <Typography>HomeworkDB Remake</Typography>
                        {currentUser && (<AvatarMenu/>)}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;