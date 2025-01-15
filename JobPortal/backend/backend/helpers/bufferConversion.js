let DataUri = require("datauri/parser");
let path = require("path");

let dataURIChild = new DataUri();

module.exports = (originalName, buffer) => {
  const extension = path.extname(originalName).toString();
  return dataURIChild.format(extension, buffer).content;
};
