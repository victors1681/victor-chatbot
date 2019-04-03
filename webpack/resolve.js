const path = require("path");

const getResolve = () => ({
  alias: {
    components: path.join(__dirname, "..", "src", "components"),
    containers: path.join(__dirname, "..", "src", "containers"),
    common: path.join(__dirname, "..", "src", "common")
  },
  extensions: [".js"],
  modules: [
    path.resolve(__dirname, "..", "src"),
    path.resolve(__dirname, "..", "node_modules")
  ]
});

module.exports.getResolve = getResolve;
