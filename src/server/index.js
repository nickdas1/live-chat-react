const express = require("express");
const app = express();
const http = require("http");

const { Server } = require("socket.io");

const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on('chat message', (msg) => {
        console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg);
      });
});

server.listen(3001, () => {
    console.log("listening on *:3001");
});
