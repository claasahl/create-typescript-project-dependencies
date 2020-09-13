const pkg = require("./package.json");
const { exec } = require("child_process");

exec(
  `npm dist-tag add create-typescript-project-dependencies@${pkg.version} latest`,
  (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
  }
);
