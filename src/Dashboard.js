import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { ChatBox } from "./StyledComponents";
import Messages from "./components/Messages";
import SendMessage from "./components/SendMessage";
import Topics from "./components/Topics";
import { Context } from "./contexts/Store";

export default function Dashboard() {
    const { allChats } = React.useContext(Context);
    const topics = Object.keys(allChats);

    const [activeTopic, setActiveTopic] = useState(topics[0]);

    return (
        <ChatBox elevation={3}>
            <Typography variant="h4" component="div">
                Live Chat
            </Typography>
            <Typography variant="h6" component="div">
                #{activeTopic}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Topics topics={topics} setActiveTopic={setActiveTopic} />
                <Messages activeTopic={activeTopic} />
            </Box>
            <SendMessage activeTopic={activeTopic} />
        </ChatBox>
    );
}
