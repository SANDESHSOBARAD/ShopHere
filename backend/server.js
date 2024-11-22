import express from 'express'

const PORT = 3000

const app = express();

app.listen(3000, () => {
    console.log(`server started at port: ${PORT}, hello there`)
})