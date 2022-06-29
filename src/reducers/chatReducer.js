export const initState = {
    General: [
        { from: "Nick", msg: "hello" },
        { from: "Tim", msg: "Welcome!" },
        { from: "Jack", msg: "hey" },
    ],
    React: [
        { from: "Nick", msg: "hey!" },
        { from: "Tim", msg: "welcome" },
        { from: "Jack", msg: "React is awesome!" },
    ],
    Angular: [
        { from: "Nick", msg: "hey!" },
        { from: "Tim", msg: "cool" },
        { from: "Jack", msg: "Angular is also awesome!" },
    ],
};

export function chatReducer(state = initState, action) {
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