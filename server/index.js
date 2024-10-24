const express = require("express")
const http = require("http")
const {Server}= require("socket.io")
const app = express()

const server= http.createServer()
const io = new Server(server)

const PORT = 6000


io.on("connection" , (socket)=>{console.log(`user ${socket.id} connected with socket io  `)})

server.listen(PORT , ()=>{
        console.log("connected with server")
})