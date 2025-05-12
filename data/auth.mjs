// import MongoDb from "mongodb";
// import { getUsers } from "../db/database.mjs";
import Mongoose from "mongoose";
import { useVirtualId } from "../db/database.mjs";

// 테이블을 만드는 구조와 비슷함
const userSchema = new Mongoose.Schema(
  {
    userid: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    url: String,
  },
  { versionKey: false } //몽구스는 데이터를 넣으면 버전키가 자동으로 들어가기 때문에 안 넣기로~
);

useVirtualId(userSchema);

const User = Mongoose.model("User", userSchema);
// 컬렉션 이름에 s가 자동으로 붙어서 Users가 만들어진다. 그 컬렉션의 틀이 userSchema가 된다.

// const ObjectID = MongoDb.ObjectId;

// 사용자 만들기
export async function createUser(user) {
  return new User(user).save().then((data) => data.id);
}

// export async function login(userid, password) {
//   const user = users.find(
//     (user) => user.userid === userid && user.password === password
//   );
//   return user;
// }

// 로그인 할 때 아이디가 있는지 체크하는 함수
export async function findByUserid(userid) {
  return User.findOne({ userid }); //하나를 찾는 메서드(findOne)
}

// 아이디로 포스트, 나의 정보를 찾는 함수
export async function findByid(id) {
  return User.findById(id);
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
