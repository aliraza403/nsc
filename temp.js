const axios = require("axios");
const cron = require("node-cron");
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
    for (let i = 0; i < 1; i++) {
      proms.push(
        new Promise((a, r) => {
          axios
            .post("https://new.nsc.com.co/api/contact/add", data)
            .then((resp) => {
              console.log(
                resp?.data?.result?.insertId,
                new Date().getUTCHours(),
                ":",
                new Date().getUTCMinutes()
              );
              a();
            })
            .catch(() => {
              r();
            });
        })
      );
    }
    Promise.allSettled(proms);
    // setTimeout(() => Promise.allSettled(proms), 5000);
    // setTimeout(() => Promise.allSettled(proms), 10000);
    // setTimeout(() => Promise.allSettled(proms), 15000);
    // setTimeout(() => Promise.allSettled(proms), 20000);
    // setTimeout(() => Promise.allSettled(proms), 25000);
    // setTimeout(() => Promise.allSettled(proms), 30000);
    // setTimeout(() => Promise.allSettled(proms), 35000);
    // setTimeout(() => Promise.allSettled(proms), 40000);
    // setTimeout(() => Promise.allSettled(proms), 45000);
    // setTimeout(() => Promise.allSettled(proms), 50000);
    // setTimeout(() => Promise.allSettled(proms), 55000);
  } catch (e) {
    console.log(e);
  }
};

// cron.schedule("* * * * *", function () {
//   console.log("running script");
//   makeReqs();
// });

makeReqs();
// setInterval(() => {
//   console.log("running script");
//   makeReqs();
// }, 60000);
