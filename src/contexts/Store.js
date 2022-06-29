import React from "react";
import io from "socket.io-client";
import { chatReducer, initState } from "../reducers/chatReducer";

export const Context = React.createContext();
const user = "Nick" + Math.floor(Math.random() * 100);

let socket;

function sendChatAction(value) {
    socket.emit("chat message", value);
}

export default function Store(props) {
    const [allChats, dispatch] = React.useReducer(chatReducer, initState);

    if (!socket) {
        socket = io.connect("http://localhost:3001");
        socket.on("chat message", (msg) => {
            dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
        });
    }

    return (
        <Context.Provider value={{ allChats, sendChatAction, user }}>
            {props.children}
        </Context.Provider>
    );
}
