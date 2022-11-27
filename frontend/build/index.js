import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import compression from "compression";

import { createServer as createViteServer } from 'vite'
import payload from 'payload'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  PORT = 5173,
  ASSETS = path.join(__dirname, "assets"),
  PRERENDERED = path.join(__dirname, "prerendered"),
  MONGODB_URI = "mongodb://localhost:27017",
  PAYLOAD_SECRET= "thisissecret!"
} = process.env;

const app = express();

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom'
})

payload.init(
  {
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    express: app
  }
)
app.use(vite.middlewares)


app.use(compression());
app.use("/", express.static(ASSETS));
app.use("/", express.static(PRERENDERED));
// Your own routes here

app.listen(PORT);
console.log(`started on ${PORT}`);