import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.end("<html><body><p>hello world</p></body></html>")
})

export default app