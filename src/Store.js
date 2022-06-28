import React from "react";
import io from "socket.io-client";

export const Context = React.createContext();

function reducer(state, action) {
    const { from, msg, topic } = action.payload;
    switch (action.type) {
        case "RECEIVE_MESSAGE":
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg,
                    },
                ],
            };
        default:
            return state;
    }
}

const initState = {
    General: [
        { from: "Nick", msg: "hello" },
        { from: "Tim", msg: "hello" },
        { from: "Aaron", msg: "hey" },
    ],
    React: [
        { from: "Nick", msg: "hey!" },
        { from: "Tim", msg: "welcome" },
        { from: "Aaron", msg: "React is awesome" },
    ],
};

let socket;

function sendChatAction(value) {
    socket.emit("chat message", value);
}

export default function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io.connect("http://localhost:3001");
        socket.on('chat message', (msg) => {
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg});
        })
    }

    const user = 'Nick' + Math.floor(Math.random() * 100);


    return (
        <Context.Provider value={{ allChats, sendChatAction, user }}>
            {props.children}
        </Context.Provider>
    );
}
