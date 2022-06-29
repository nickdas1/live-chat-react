import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { Context } from "../contexts/Store";

export default function SendMessage({ activeTopic }) {
    const { sendChatAction, user } = React.useContext(Context);
    const [textValue, setTextValue] = useState("");
    
    return (
        <Box sx={{ display: "flex" }}>
            <TextField
                label="Send a message"
                variant="standard"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                sx={{ width: "85%" }}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginLeft: "10px", padding: "0 40px" }}
                onClick={() => {
                    sendChatAction({
                        from: user,
                        msg: textValue,
                        topic: activeTopic,
                    });
                    setTextValue("");
                }}
            >
                Send
            </Button>
        </Box>
    );
}
