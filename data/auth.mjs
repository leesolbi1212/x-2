import { db } from "../db/database.mjs";

// export async function createUser(user) {
//   const { userid, password, name, email, url } = user;
//   return user;
// }

export async function login(userid, password) {
  const [user] = await db.query(
    "select * from users where userid=? and password=?",
    [userid, password]
  );
  return user[0];
}

export async function createUser(user) {
  // 이런 방식도 있구나! 파라미터들을 한번에 받아서 객체분할하기.
  const { userid, password, name, email, url } = user;
  return (
    db
      .execute(
        "insert into users(userid, password, name, email, url) values (?,?,?,?,?)",
        [userid, password, name, email, url]
      )
      // insert 구문의 결과는 0번 인덱스에 몇개의 로우가 바뀌었는지에 대한 결과가 나옴.
      .then((result) => result[0].insertId)
  );
}

export async function findByUserid(userid) {
  return db
    .execute("select * from users where userid=?", [userid])
    .then((result) => result[0][0]);
}

export async function findByid(idx) {
  // return users.find((user) => user.id === id); -> 배열 처리로 되어있음(파일)
  return db
    .execute("select * from users where idx=?", [idx])
    .then((result) => result[0][0]);
}
