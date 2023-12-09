import express, { Application } from 'express';
import {config} from 'dotenv';
import router from './routes/router';
import sequelize from './db/postgres';
import errorHandling from './middlewares/errorMiddleware'
import {json, urlencoded} from 'body-parser';
import {resolve} from 'path';
import fileUpload from 'express-fileupload';
import cors from 'cors'
import {Server,Socket} from 'socket.io'
import {createServer} from 'http'
config()

const app: Application = express();
const port = process.env.PORT || 5000;
const io = new Server(createServer(app),{
  path: '/ws-chat', 
});

app.use(cors({
  origin: 'http://localhost:5173',
}))
app.use(express.static(resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use("/api", router);
app.use(errorHandling);

io.on(`connection`,(socket : Socket) => {
  console.log('test')
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();