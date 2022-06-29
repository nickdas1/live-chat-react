import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

import { Context } from "../contexts/Store";

export default function Messages({ activeTopic }) {
    const { allChats } = React.useContext(Context);

    return (
        <Box sx={{ width: "70%", height: "300px", padding: "20px" }}>
            {allChats[activeTopic].map((chat, index) => (
                <Box key={index} sx={{display: "flex", marginBottom: "10px"}}>
                    <Stack direction="row" spacing={1} sx={{alignItems: "center"}}>
                        <Chip
                            avatar={<Avatar>{chat.from[0]}</Avatar>}
                            label={chat.from}
                        />
                        <Typography variant="p" component="p">
                            {chat.msg}
                        </Typography>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
}
