module.exports = {
    apps: [
      {
        name: "3001.bison-casino",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3001,
          ...require("dotenv").config({ path: ".env.3001.bison-casino" }).parsed,
        },
      },
      {
        name: "3002.fatpiratecasino",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3002,
          ...require("dotenv").config({ path: ".env.3002.fatpiratecasino" }).parsed,
        },
      },
      {
        name: "3003.1onecasino",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3003,
          ...require("dotenv").config({ path: ".env.3003.1onecasino" }).parsed,
        },
      },
      {
        name: "3004.brunocasino2",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3004,
          ...require("dotenv").config({ path: ".env.3004.brunocasino2" }).parsed,
        },
      },
      {
        name: "3005.unique-casino1",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3005,
          ...require("dotenv").config({ path: ".env.3005.unique-casino1" }).parsed,
        },
      },
      {
        name: "3006.amon-casino1",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3006,
          ...require("dotenv").config({ path: ".env.3006.amon-casino1" }).parsed,
        },
      },
      {
        name: "3007.betonred2",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3007,
          ...require("dotenv").config({ path: ".env.3007.betonred2" }).parsed,
        },
      },
      {
        name: "3008.hitnspin.de.com",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3008,
          ...require("dotenv").config({ path: ".env.3008.hitnspin.de.com" }).parsed,
        },
      },
      {
        name: "3009.jokabet.org.uk",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3009,
          ...require("dotenv").config({ path: ".env.3009.jokabet.org.uk" }).parsed,
        },
      },
      {
        name: "3010.goldenbet.org.uk",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3010,
          ...require("dotenv").config({ path: ".env.3010.goldenbet.org.uk" }).parsed,
        },
      },
      {
        name: "3011.9ninecasino.es",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3011,
          ...require("dotenv").config({ path: ".env.3011.9ninecasino.es" }).parsed,
        },
      },
      {
        name: "3012.casinomidas.org.es",
        script: "npm",
        args: "run start",
        cwd: "/cms/onesite_app",
        env: {
          NODE_ENV: "production",
          PORT: 3012,
          ...require("dotenv").config({ path: ".env.3012.casinomidas.org.es" }).parsed,
        },
      },
    ],
};