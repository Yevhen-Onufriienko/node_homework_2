
const EventEmitter = require("events")
const eventEmitter = new EventEmitter()

// Функция отправки сообщения
function sendMessage(username, message, emitter) {

  emitter.emit("message", username, message)
}

eventEmitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`)
})


sendMessage("Alice", "Hello, everyone!", eventEmitter)
sendMessage("Bob", "Hi, Alice!", eventEmitter)
sendMessage("Charlie", "Good morning!", eventEmitter)
