import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express()
const port = 3003

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@omnistack.ekd7k.mongodb.net/ajuda_nois?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
)

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})