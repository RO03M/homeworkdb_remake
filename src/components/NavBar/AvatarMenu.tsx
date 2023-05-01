import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import { MouseEvent, useState } from "react";
import { auth } from "../../firebase";

const AvatarMenu = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const openMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    const closeMenu = () => setAnchorEl(null);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <IconButton
                onClick={openMenu}
            >
                <Avatar/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
            >
                <MenuItem>
                    Minha conta
                </MenuItem>
                <MenuItem
                    onClick={handleSignOut}
                >
                    Sair
                </MenuItem>
            </Menu>
        </>
    );
}

export default AvatarMenu;