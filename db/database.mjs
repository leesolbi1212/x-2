/*
   몽고DB의 장점이자 단점 : 스키마가 없음! 골격이나 제한 사항이 없다보니까 실수해도 잘 넘어감 ㅠㅠ 
  Mongoosee 
  - 몽고DB + Node.js용 ORM (Object-Relational Mapping) sql 언어를 쓰지 않아도 자바언어로 접근할 수 있음. 데이터 베이스를 객체로 봄. 
  - 스키마를 정의
  - 입력, 수정, 조회, 삭제 모두 안정적이고 코드를 간결하게 작성 
  - 
 
*/

import { config } from "../config.mjs";
import Mongoose from "mongoose";

export async function connectDB() {
  return Mongoose.connect(config.db.host);
}

export function useVirtualId(Schema) {
  Schema.virtual("id").get(function () {
    return this._id.toString();
  });
  Schema.set("toJSON", { virtual: true });
  Schema.set("toObject", { virtual: true });
}

/* 원래는 몽고디비와 직접 연결하는 임포트를 썼었음

import MongoDb from "mongodb"; 

export async function connectDB() {
  return MongoDb.MongoClient.connect(config.db.host).then((client) => {
    db = client.db();
    // console.log(db);
  });

export function getUsers() {
  return db.collection("users");
}

export function getPosts() {
  return db.collection("posts");
} */
