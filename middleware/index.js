const fs = require("fs");

function logReqText(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n${Date.now()}:${req.id}:${req.method}:${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = {
  logReqText,
};
