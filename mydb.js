const { query_mysql } = require("./cnu/mysql");
const myint = require("./db/mysql2");
const { getFiles } = require("node-aase/getfile");
const { enc_base64, dec_base64, clo, test } = require("node-aase/esa46");

// const qury = myint.dbinit({
//   HOST: "127.0.0.1",
//   USER: "root",
//   PASSWORD: "123456",
//   DATABASE: "test_db",
// });

const qury = myint.dbinit({
  HOST: query_mysql.HOST,
  USER: query_mysql.USER,
  PASSWORD: query_mysql.PASSWORD,
  DATABASE: query_mysql.DATABASE,
});

// let gfe = getFiles.getFileList("./").forEach((e) => {
//   let q = [];
//   q.push(enc_base64(e.path));
//   q.push(enc_base64(e.filename));
//   q.push(enc_base64(e.type));
//   myint.query("insert into disks(path,filename,type) values(?,?,?)", q, qury).then((r) => {
//     console.log("🚀 ~ file: index.js:13 ~ myint.query ~ r:", r);
//     return;
//   });
// });
console.log("🚀 ~ file: mydb.js:12 ~ gfe:", gfe);

// myint.query("SELECT * FROM girl", "", qury).then((r) => {
//   console.log("🚀 ~ file: index.js:13 ~ myint.query ~ r:", r);
//   return;
// });
// console.log("🚀 ~ file: index.js:9 ~ qury:");

// myint.query("insert into girl(name,age,skill) values(?,?,?)", ["xxx", "18", "8979"], qury).then((r) => {
//   console.log("🚀 ~ file: index.js:13 ~ myint.query ~ r:", r);
//   return;
// });
// console.log("🚀 ~ file: index.js:9 ~ qury:");
