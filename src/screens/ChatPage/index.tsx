import { Box } from "@mui/material";
import MessageRow from "./MessageRow";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, getFirestore, onSnapshot } from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import MessagePanel from "./MessagePanel";

const ChatPage = () => {

    const [messageList, setMessageList] = useState<any[]>([]);

    const db = getFirestore(firebaseApp);
    const messagesCollectionRef = collection(db, "messages");

    useEffect(() => {
        const getMessages = async () => {
            const data = await getDocs(messagesCollectionRef);
            setMessageList([...data.docs.map(doc => ({...doc.data()}))]);
        }
        const messagesSnapshot = onSnapshot(messagesCollectionRef, (doc) => {
            getMessages();
        });
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3
            }}
        >
            <MessagePanel/>
            <Box>
                {messageList.sort((a, b) => a.timestamp < b.timestamp ? 1 : (b.timestamp < a.timestamp ? -1 : 0)).map(message => (
                    <MessageRow
                        name={message?.name}
                        uniquename={message?.uniquename}
                        message={message?.message}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default ChatPage;