const io = require("socket.io")(8900, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:8000"],
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("a user connected");
  //take user id and socket id
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, receiverId, text, created_at }) => {
    const user = getUser(receiverId);
    console.log(user);
    console.log(text);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
      created_at,
    });
  });

  socket.on("disconnect", () => {
    console.log("a user disconnect");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
