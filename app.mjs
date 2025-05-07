import express from "express";
import postsRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";
import { config } from "./config.mjs";
import { db } from "./db/database.mjs";

const app = express();

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

// db.getConnection().then((connection) => console.log(connection));
//연결 잘 되는지 안 되는지 확인하는 디버깅용 (그 안에 정보를 줬던 걸로 연결을 해보고 연결이 되는지 에러가 나는지 알 수 있음)

app.listen(config.host.port);
