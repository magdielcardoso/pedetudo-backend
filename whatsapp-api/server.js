const app = require("./src/app");
const { baseWebhookURL } = require("./src/config");
require("dotenv").config();
const socket = require("socket.io");
const http = require("http");

// Start the server
const port = process.env.PORT || 7070;
const httpServer = http.createServer(app);
const io = socket(httpServer, {
  path: "/socket.io",
  cors: {
    origin: "*",
  },
});
module.exports = io
// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.error(
    "BASE_WEBHOOK_URL environment variable is not available. Exiting..."
  );
  process.exit(1); // Terminate the application with an error code
}

io.on("connection", (client) => {
  console.log("Client connected" + client.id);

  client.on("disconnect", () => {
    console.log("Client disconnected" + client.id);
  });
});

httpServer.listen(port, () => {
  console.log(`API Whatsapp rodando na porta ${port}`);
});
