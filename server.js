const express = require('express')
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 3000
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Set static folder
app.use(express.static(path.join(__dirname, "public")))
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
io.on('connection', socket => {
  console.log("Someone joined")
  socket.broadcast.emit('player-connection')

  socket.on('disconnect', () => {
    console.log('Someone left')
  })

  socket.on('stripe', () => {
    console.log("clicked")
    socket.broadcast.emit("paintblack")
  })

  setTimeout(() => {
    socket.emit('timeout')
    socket.disconnect()
  }, 600000) // 10 minute limit
})