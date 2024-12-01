module.exports = {
    apps: [
      {
        name: "3001.bison-casino",
        script: "npm",
        args: "run start",
        env: {
          NODE_ENV: "production",
          PORT: 3001,
          ...require("dotenv").config({ path: ".env.3001.bison-casino" }).parsed,
        },
      },
    ],
};