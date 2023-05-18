const myint = require("./db/mysql2");

const qury = myint.dbinit({
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "123456",
  DATABASE: "test_db",
});

// myint.query("SELECT * FROM girl", "", qury).then((r) => {
//   console.log("🚀 ~ file: index.js:13 ~ myint.query ~ r:", r);
//   return;
// });
// console.log("🚀 ~ file: index.js:9 ~ qury:");

myint.query("insert into girl(name,age,skill) values(?,?,?)", ["高圆圆", "18", "8979"], qury).then((r) => {
  console.log("🚀 ~ file: index.js:13 ~ myint.query ~ r:", r);
  return;
});
console.log("🚀 ~ file: index.js:9 ~ qury:");
