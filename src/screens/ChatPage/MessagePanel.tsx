import { Box, Button, TextField } from "@mui/material";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const MessagePanel = () => {

    const [message, setMessage] = useState<string>();

    const {
        currentUser
    } = useUser();

    const db = getFirestore(firebaseApp);
    const messagesCollectionRef = collection(db, "messages");

    const sendMessage = async () => {
        await addDoc(messagesCollectionRef, {
            message,
            name: "Nome temporário",
            uniquename: currentUser?.email,
            timestamp: Date.parse(new Date().toString())
        });
    }

    const handleSubmit = () => {
        sendMessage();
        setMessage("");
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "80%"
            }}
        >
            <TextField
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                placeholder={"Digite algo aqui..."}
                sx={{
                    flex: 1
                }}
            />
            <Button
                onClick={handleSubmit}
            >
                Enviar
            </Button>
        </Box>
    )
}

export default MessagePanel;