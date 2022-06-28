import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { Header } from "./StyledComponents";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { Context } from "./Store";

export default function Dashboard() {
    const { allChats, sendChatAction, user } = React.useContext(Context);
    const topics = Object.keys(allChats);

    const [textValue, setTextValue] = useState("");
    const [activeTopic, setActiveTopic] = useState(topics[0]);

    return (
        <div>
            <Header elevation={3}>
                <Typography variant="h4" component="div">
                    Chat app
                </Typography>
                <Typography variant="h6" component="div">
                    {activeTopic}
                </Typography>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="topicsWindow">
                        <List>
                            {topics.map((topic) => (
                                <ListItem
                                    key={topic}
                                    button
                                    onClick={() => setActiveTopic(topic)}
                                >
                                    <ListItemText
                                        primary={topic}
                                    ></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className="chatWindow">
                        {allChats[activeTopic].map((chat, index) => (
                            <div style={{ display: "flex" }} key={index}>
                                <Stack direction="row" spacing={1}>
                                    <Chip
                                        avatar={<Avatar>M</Avatar>}
                                        label={chat.from}
                                        sx={{ marginBottom: "10px" }}
                                    />
                                    <Typography variant="p" component="p">
                                        {chat.msg}
                                    </Typography>
                                </Stack>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <TextField
                        label="Send a message"
                        variant="standard"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        className="chatBox"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginLeft: "10px", padding: "0 40px" }}
                        onClick={() => {
                            sendChatAction({from: user, msg: textValue, topic: activeTopic});
                            setTextValue('');
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Header>
        </div>
    );
}
