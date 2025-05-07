import mysql from "mysql2";
/* mysql2가 하는 일?
자바스크립트로 쿼리 구문을 쓸 때 중간다리 역할 (번역기)을 한다. 데이터베이스 관련 언어를 써야할 때 번역기 역할을 하는 모듈이 다 있어용
*/
import { config } from "../config.mjs";

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

export const db = pool.promise();
