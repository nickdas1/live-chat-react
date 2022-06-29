import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Topics({ topics, setActiveTopic }) {
    return (
        <Box
            sx={{
                width: "30%",
                height: "300px",
                borderRight: "1px solid grey",
            }}
        >
            <List>
                {topics.map((topic) => (
                    <ListItem
                        key={topic}
                        button
                        onClick={() => setActiveTopic(topic)}
                    >
                        <ListItemText primary={topic}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
