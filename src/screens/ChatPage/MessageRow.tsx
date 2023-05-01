import { Avatar, Box, Typography } from "@mui/material";

interface MessageRowProps {
    name: string;
    uniquename: string;
    //createdAt: string;
    message: string;
}

const MessageRow = (props: MessageRowProps) => {

    const {
        name,
        uniquename,
        message
    } = props;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 3
            }}
        >
            <Avatar></Avatar>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1
                    }}
                >
                    <Typography fontWeight={700}>{name}</Typography>
                    <Typography>@{uniquename}</Typography>
                </Box>
                <Box>
                    <Typography>{message}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default MessageRow;